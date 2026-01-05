import { useState, useEffect, useCallback } from "react";
import { FlashCard } from "@/components/FlashCard";
import { ProgressBar } from "@/components/ProgressBar";
import { Controls } from "@/components/Controls";
import { KeyboardHints } from "@/components/KeyboardHints";
import { questions, Question } from "@/data/questions";
import { toast } from "sonner";
import { Heart } from "lucide-react";

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const Index = () => {
  const [cards, setCards] = useState<Question[]>(questions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [learnedIds, setLearnedIds] = useState<Set<number>>(new Set());

  const currentCard = cards[currentIndex];
  const canGoNext = currentIndex < cards.length - 1;

  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setIsFlipped(false);
    }
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    if (canGoNext) {
      setCurrentIndex((prev) => prev + 1);
      setIsFlipped(false);
    }
  }, [canGoNext]);

  const handleShuffle = useCallback(() => {
    setCards(shuffleArray(questions));
    setCurrentIndex(0);
    setIsFlipped(false);
    toast.success("Cards shuffled!");
  }, []);

  const handleMarkLearned = useCallback(() => {
    const wasLearned = learnedIds.has(currentCard.id);
    
    setLearnedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(currentCard.id)) {
        newSet.delete(currentCard.id);
      } else {
        newSet.add(currentCard.id);
      }
      return newSet;
    });

    if (!wasLearned) {
      toast.success("Great job! Card marked as mastered");
      // Auto-advance to next card after marking as learned
      if (canGoNext) {
        setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
          setIsFlipped(false);
        }, 300);
      } else {
        toast("You've reached the last card! 🎉");
      }
    } else {
      toast("Card unmarked");
    }
  }, [currentCard.id, canGoNext, learnedIds]);

  const handleReset = useCallback(() => {
    setCards(questions);
    setCurrentIndex(0);
    setIsFlipped(false);
    setLearnedIds(new Set());
    toast("Progress reset");
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === " ") {
        e.preventDefault();
        handleFlip();
      }
      if (e.key.toLowerCase() === "m") handleMarkLearned();
      if (e.key.toLowerCase() === "s") handleShuffle();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrevious, handleNext, handleFlip, handleMarkLearned, handleShuffle]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="py-8 px-4 text-center animate-fade-in">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Heart className="w-6 h-6 text-primary fill-primary/20" />
          <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            K1 Visa Prep
          </h1>
        </div>
        <p className="text-muted-foreground max-w-md mx-auto">
          Practice your interview questions with confidence. Flip cards to see helpful tips.
        </p>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col justify-center px-4 py-8 gap-8">
        <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <ProgressBar 
            current={currentIndex} 
            total={cards.length} 
            learned={learnedIds.size}
          />
        </div>

        <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <FlashCard 
            question={currentCard} 
            isFlipped={isFlipped} 
            onFlip={handleFlip}
          />
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Controls
            onPrevious={handlePrevious}
            onNext={handleNext}
            onShuffle={handleShuffle}
            onMarkLearned={handleMarkLearned}
            onReset={handleReset}
            isLearned={learnedIds.has(currentCard.id)}
            canGoPrevious={currentIndex > 0}
            canGoNext={canGoNext}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-sm text-muted-foreground">
        <p>Good luck with your interview! 💕</p>
      </footer>

      <KeyboardHints />
    </div>
  );
};

export default Index;

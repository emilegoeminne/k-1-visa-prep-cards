import { Question, categoryLabels, categoryColors } from "@/data/questions";
import { cn } from "@/lib/utils";
import { Lightbulb, RotateCcw } from "lucide-react";

interface FlashCardProps {
  question: Question;
  isFlipped: boolean;
  onFlip: () => void;
}

export const FlashCard = ({ question, isFlipped, onFlip }: FlashCardProps) => {
  return (
    <div 
      className="perspective-1000 w-full max-w-2xl mx-auto cursor-pointer"
      onClick={onFlip}
    >
      <div 
        className={cn(
          "relative w-full aspect-[4/3] transform-style-3d card-flip",
          isFlipped && "flipped"
        )}
      >
        {/* Front of card - Question */}
        <div className="absolute inset-0 backface-hidden card-front">
          <div className="h-full bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 p-8 flex flex-col border border-border/50">
            <div className="flex items-center justify-between mb-6">
              <span className={cn(
                "px-3 py-1 rounded-full text-sm font-medium",
                categoryColors[question.category]
              )}>
                {categoryLabels[question.category]}
              </span>
              <span className="text-muted-foreground text-sm">
                #{question.id}
              </span>
            </div>
            
            <div className="flex-1 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl font-display text-center leading-relaxed text-foreground">
                {question.question}
              </h2>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mt-4">
              <Lightbulb className="w-4 h-4" />
              <span>Click for answer tips</span>
            </div>
          </div>
        </div>
        
        {/* Back of card - Tips */}
        <div className="absolute inset-0 backface-hidden card-back">
          <div className="h-full bg-primary rounded-2xl shadow-card-hover p-8 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary-foreground/20 text-primary-foreground flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                Answer Tip
              </span>
            </div>
            
            <div className="flex-1 flex items-center justify-center px-2">
              <p className="text-lg md:text-xl text-center leading-relaxed text-primary-foreground">
                {question.tip}
              </p>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-primary-foreground/70 text-sm mt-4">
              <RotateCcw className="w-4 h-4" />
              <span>Click to see question</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

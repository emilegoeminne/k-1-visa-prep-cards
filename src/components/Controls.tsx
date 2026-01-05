import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Shuffle, CheckCircle2, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface ControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  onShuffle: () => void;
  onMarkLearned: () => void;
  onReset: () => void;
  isLearned: boolean;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

export const Controls = ({
  onPrevious,
  onNext,
  onShuffle,
  onMarkLearned,
  onReset,
  isLearned,
  canGoPrevious,
  canGoNext,
}: ControlsProps) => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
      {/* Main navigation */}
      <div className="flex items-center justify-center gap-3">
        <Button
          variant="outline"
          size="lg"
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className="h-12 px-6"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Previous
        </Button>
        
        <Button
          variant={isLearned ? "secondary" : "default"}
          size="lg"
          onClick={onMarkLearned}
          className={cn(
            "h-12 px-6 min-w-[140px]",
            isLearned && "bg-primary/10 text-primary hover:bg-primary/20"
          )}
        >
          <CheckCircle2 className={cn("w-5 h-5 mr-2", isLearned && "fill-primary")} />
          {isLearned ? "Mastered" : "Mark Learned"}
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          onClick={onNext}
          disabled={!canGoNext}
          className="h-12 px-6"
        >
          Next
          <ChevronRight className="w-5 h-5 ml-1" />
        </Button>
      </div>
      
      {/* Secondary actions */}
      <div className="flex items-center justify-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={onShuffle}
          className="text-muted-foreground hover:text-foreground"
        >
          <Shuffle className="w-4 h-4 mr-2" />
          Shuffle Cards
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={onReset}
          className="text-muted-foreground hover:text-foreground"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset Progress
        </Button>
      </div>
    </div>
  );
};

import { cn } from "@/lib/utils";

interface ProgressBarProps {
  current: number;
  total: number;
  learned: number;
}

export const ProgressBar = ({ current, total, learned }: ProgressBarProps) => {
  const progressPercentage = ((current + 1) / total) * 100;
  const learnedPercentage = (learned / total) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto space-y-3">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          Card <span className="font-semibold text-foreground">{current + 1}</span> of {total}
        </span>
        <span className="text-primary font-medium">
          {learned} mastered
        </span>
      </div>
      
      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
        {/* Learned progress (background) */}
        <div 
          className={cn(
            "absolute inset-y-0 left-0 bg-primary/30 transition-all duration-500"
          )}
          style={{ width: `${learnedPercentage}%` }}
        />
        {/* Current position indicator */}
        <div 
          className={cn(
            "absolute inset-y-0 left-0 bg-primary transition-all duration-300"
          )}
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

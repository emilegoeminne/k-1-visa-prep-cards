export const KeyboardHints = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-6 text-xs text-muted-foreground bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50 shadow-sm">
      <span className="flex items-center gap-1.5">
        <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono">←</kbd>
        <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono">→</kbd>
        Navigate
      </span>
      <span className="flex items-center gap-1.5">
        <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono">Space</kbd>
        Flip
      </span>
      <span className="flex items-center gap-1.5">
        <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono">M</kbd>
        Mark Learned
      </span>
      <span className="flex items-center gap-1.5">
        <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono">S</kbd>
        Shuffle
      </span>
    </div>
  );
};

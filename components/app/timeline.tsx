type TimeLineProps = {
  date: string;
  title: string;
  description: string;
};

export function TimeLineItem({ date, title, description }: TimeLineProps) {
  return (
    <div className="relative flex items-start gap-6">
      <div className="bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
        {date}
      </div>
      <div className="relative z-10 mt-3">
        <div className="w-3 h-3 bg-foreground rounded-full"></div>
      </div>
      <div className="flex-1 pt-1">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

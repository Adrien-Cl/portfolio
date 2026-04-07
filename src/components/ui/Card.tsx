interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className = "", children }: CardProps) {
  return (
    <div className={`card-flat ${className}`}>
      {children}
    </div>
  );
}

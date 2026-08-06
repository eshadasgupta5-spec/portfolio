import { cn } from '../utils/cn';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const words = text.split(' ');

  return (
    <span className={cn('inline', className)}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            display: 'inline-block',
            opacity: 1,
            filter: 'blur(0px)',
            transform: 'none',
            willChange: 'transform',
          }}
        >
          {word}
          {i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </span>
  );
}

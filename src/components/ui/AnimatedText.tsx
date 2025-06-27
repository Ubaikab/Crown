
import React, { useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = '', 
  delay = 0,
  element = 'span' 
}) => {
  const words = text.split(' ');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const spanElements = container.querySelectorAll('span');
          spanElements.forEach((span, index) => {
            setTimeout(() => {
              span.style.opacity = '1';
              span.style.transform = 'translateY(0)';
            }, delay + index * 100); // Stagger each word
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => {
      if (container) observer.unobserve(container);
    };
  }, [delay]);

  const renderElement = () => {
    return words.map((word, index) => {
      const props = {
        key: index,
        className: "inline-block",
        style: {
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
          display: 'inline-block'
        }
      };

      switch (element) {
        case 'h1': return <h1 {...props}>{word}</h1>;
        case 'h2': return <h2 {...props}>{word}</h2>;
        case 'h3': return <h3 {...props}>{word}</h3>;
        case 'h4': return <h4 {...props}>{word}</h4>;
        case 'h5': return <h5 {...props}>{word}</h5>;
        case 'h6': return <h6 {...props}>{word}</h6>;
        case 'p': return <p {...props}>{word}</p>;
        default: return <span {...props}>{word}</span>;
      }
    });
  };

  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      {renderElement().map((el, i) => (
        <React.Fragment key={i}>
          {el}
          {i !== words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AnimatedText;

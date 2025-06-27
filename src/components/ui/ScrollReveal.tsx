
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ScrollRevealProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right' | 'down';
  duration?: number;
  disabled?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  threshold = 0.1,
  delay = 0,
  className = '',
  direction = 'up',
  duration = 0.7,
  disabled = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Reduce animation complexity on mobile
  const effectiveDuration = isMobile ? Math.min(duration, 0.5) : duration;
  const effectiveDelay = isMobile ? Math.min(delay, 200) : delay;

  useEffect(() => {
    const element = ref.current;
    if (!element || disabled) return;

    // Set initial styles before animation
    element.classList.add('opacity-0');
    
    // Function to handle intersection
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            let animationClass = 'animate-fade-in';
            
            if (direction === 'left') {
              animationClass = 'animate-slide-in-left';
            } else if (direction === 'right') {
              animationClass = 'animate-slide-in-right';
            } else if (direction === 'down') {
              animationClass = 'animate-slide-in-down';
            }
            
            element.classList.add(animationClass);
            element.style.animationDuration = `${effectiveDuration}s`;
          }, effectiveDelay);
          
          observer.unobserve(element);
        }
      });
    };

    // Use a larger rootMargin on mobile for earlier triggering
    const rootMargin = isMobile ? '20px' : '10px';

    const observer = new IntersectionObserver(handleIntersection, { 
      threshold, 
      rootMargin
    });

    observer.observe(element);
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, effectiveDelay, direction, effectiveDuration, disabled, isMobile]);

  // If disabled, just render children directly
  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;

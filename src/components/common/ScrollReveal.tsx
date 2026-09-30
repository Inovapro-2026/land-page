import React, { useEffect, useRef, useState } from 'react';

export type RevealDirection = 'left' | 'right' | 'center' | 'up' | 'down' | 'scale' | 'fade';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 700,
  threshold = 0.08,
  className = '',
  style = {},
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check user preference for reduced motion
    if (typeof window !== 'undefined') {
      const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(motionQuery.matches);

      const motionListener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      motionQuery.addEventListener?.('change', motionListener);

      setIsMobile(window.innerWidth < 768);
      const resizeListener = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener('resize', resizeListener, { passive: true });

      return () => {
        motionQuery.removeEventListener?.('change', motionListener);
        window.removeEventListener('resize', resizeListener);
      };
    }
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once revealed, unobserve to guarantee it remains stable forever
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -25px 0px',
      }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [threshold, prefersReducedMotion]);

  // Transform classes with responsive handling (subtle shift on mobile to prevent overflow, elegant sweep on desktop)
  const getTransformClasses = () => {
    if (prefersReducedMotion) {
      return 'opacity-100 translate-x-0 translate-y-0 scale-100';
    }

    if (isVisible) {
      return 'opacity-100 translate-x-0 translate-y-0 scale-100';
    }

    switch (direction) {
      case 'left':
        // Card on the left: enters smoothly from the left
        return 'opacity-0 -translate-x-3 translate-y-2 md:-translate-x-10 md:translate-y-0 scale-[0.98]';
      case 'right':
        // Card on the right: enters smoothly from the right
        return 'opacity-0 translate-x-3 translate-y-2 md:translate-x-10 md:translate-y-0 scale-[0.98]';
      case 'center':
      case 'scale':
        // Card in the center: enters smoothly from center / bottom with scale prominence
        return 'opacity-0 translate-y-4 md:translate-y-7 scale-[0.95]';
      case 'up':
        return 'opacity-0 translate-y-4 md:translate-y-7 scale-[0.98]';
      case 'down':
        return 'opacity-0 -translate-y-4 md:-translate-y-7 scale-[0.98]';
      case 'fade':
      default:
        return 'opacity-0 scale-100';
    }
  };

  // On mobile devices, cards enter sequentially as scrolled, so reduce delays to prevent user waiting
  const effectiveDelay = prefersReducedMotion ? 0 : isMobile ? Math.min(delay, 60) : delay;
  const effectiveDuration = prefersReducedMotion ? 150 : Math.min(Math.max(duration, 500), 900);

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${getTransformClasses()} ${className}`}
      style={{
        transitionDuration: `${effectiveDuration}ms`,
        transitionDelay: `${effectiveDelay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

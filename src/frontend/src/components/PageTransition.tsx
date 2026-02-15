import { useEffect, useState } from 'react';
import { useRouterState } from '@tanstack/react-router';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const router = useRouterState();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setIsTransitioning(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [router.location.pathname, children]);

  return (
    <main
      className={`flex-1 transition-opacity duration-300 ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {displayChildren}
    </main>
  );
}

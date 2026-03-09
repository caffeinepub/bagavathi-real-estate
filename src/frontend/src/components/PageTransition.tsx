import { useEffect, useState } from "react";

export default function PageTransition({
  children,
}: { children: React.ReactNode }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setIsTransitioning(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [children]);

  return (
    <main
      className={`flex-1 transition-opacity duration-300 ${
        isTransitioning ? "opacity-0" : "opacity-100"
      }`}
    >
      {displayChildren}
    </main>
  );
}

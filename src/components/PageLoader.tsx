import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    setProgress(0);

    // Simulate loading progress
    const timer1 = setTimeout(() => setProgress(30), 50);
    const timer2 = setTimeout(() => setProgress(60), 150);
    const timer3 = setTimeout(() => setProgress(90), 250);
    const timer4 = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setIsLoading(false), 150);
    }, 350);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [location.pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-muted/30">
      <div
        className="h-full bg-gradient-to-r from-primary via-primary to-secondary transition-all duration-200 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default PageLoader;

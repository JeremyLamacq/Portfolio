import { useState, useEffect } from 'react';
import './LoadingComponent.scss';

const LoadingComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main id='mainLoader' style={{ opacity: isLoading ? 1 : 0, transition: 'opacity 1.5s linear', display: !isLoading ? 'none' : '' }}>
        <h1>Bienvenu sur mon Portfolio</h1>
    </main>
  );
};

export default LoadingComponent;

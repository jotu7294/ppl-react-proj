import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useFadeIn = () => {
  const location = useLocation();

  useEffect(() => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.classList.remove('fade-in');
      void mainElement.offsetWidth; // Trigger reflow
      mainElement.classList.add('fade-in');
    }
  }, [location]);
};

export default useFadeIn;
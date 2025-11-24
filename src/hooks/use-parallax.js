import Parallax from 'parallax-js';
import { useEffect } from 'react';

export default function useParallax() {
  useEffect(() => {
    const parallaxInstances = Array.from(document.querySelectorAll('.scene')).map((element) => {
      return new Parallax(element);
    });

    return () => {
      parallaxInstances.forEach((parallax) => parallax.destroy());
    };
  }, []);
}
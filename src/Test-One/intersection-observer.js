import { useState, useEffect } from 'react';

const useIntersectionObserver = (refs, options) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setEntries(entries);
    }, options);

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [refs, options]);

  return entries;
};

export default useIntersectionObserver;

import { useState, useEffect } from "react";

const useInView = (threshold = 0.5) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold,
      }
    );

    const element = document.getElementById("product-card"); // You can replace with a ref as well.
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return isInView;
};

export default useInView;

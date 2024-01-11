import React, { useEffect, useRef } from "react";
import "../assets/styles/Animations.css"; // You can define your styles in a separate CSS file
import { animateScroll as scroll } from "react-scroll";

const YourComponent = ({ setSelected, searchParams }) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When the target element is in view, add a class or trigger animations
            entry.target.classList.add("animate");
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      // Cleanup: disconnect the observer when the component unmounts
      observer.disconnect();
    };
  }, []); // Empty dependency array to ensure the effect runs once on mount

  const scrollToTop = () => {
    scroll.scrollToTop();
    searchParams.delete("section");
    window.history.replaceState(null, null, `?${searchParams.toString()}`);
    setSelected(false);
  };

  return (
    <div ref={targetRef} className="your-component" onClick={scrollToTop}>
      <div>Scroll to Top</div>
    </div>
  );
};

export default YourComponent;
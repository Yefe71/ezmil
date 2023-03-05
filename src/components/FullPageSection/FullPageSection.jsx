import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const FullpageSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [touchStartPosition, setTouchStartPosition] = useState(0);
  const [touchEndPosition, setTouchEndPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = scrollRef.current.scrollTop;
      setScrollPosition(currentPosition);
    };
    scrollRef.current.addEventListener("scroll", handleScroll);
    return () => scrollRef.current.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleTouchStart = (event) => {
      setTouchStartPosition(event.touches[0].clientY);
      setIsDragging(true);
    };
    const handleTouchMove = (event) => {
      setTouchEndPosition(event.touches[0].clientY);
    };
    const handleTouchEnd = () => {
      const touchDistance = touchEndPosition - touchStartPosition;
      setScrollPosition((prevPosition) => prevPosition + touchDistance);
      setTouchStartPosition(0);
      setTouchEndPosition(0);
      setIsDragging(false);
    };
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [touchEndPosition, touchStartPosition]);

  const sectionOneOpacity = Math.max(0, 1 - scrollPosition / 100);
  const sectionTwoOpacity = Math.max(0, Math.min(1, scrollPosition / 100 - 1));
  const sectionThreeOpacity = Math.max(0, Math.min(1, scrollPosition / 100 - 2));

  const handleScroll = (event) => {
    if (!isDragging) {
      setScrollPosition(event.target.scrollTop);
    }
  };

  return (
    <div className="fullpage-container" ref={scrollRef} onScroll={handleScroll}>
      <div className="one section" style={{ opacity: sectionOneOpacity }}>
        <h1>Section 1</h1>
      </div>
      <div className="two section" style={{ opacity: sectionTwoOpacity }}>
        <h1>Section 2</h1>
      </div>
      <div className="three section" style={{ opacity: sectionThreeOpacity }}>
        <h1>Section 3</h1>
      </div>
    </div>
  );
};

export default FullpageSection;

import { useState, useRef, useEffect } from "react";

function HoverVideo({ src, className }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  const fadeDuration = 0.5; // Fade duration in seconds
  const fadeIntervalRef = useRef(null);
  const volumeRef = useRef(0);

  function handleMouseOver() {
    setIsHovered(true);
  }

  function handleMouseOut() {
    setIsHovered(false);
  }

  useEffect(() => {
    if (videoRef.current) {
      const targetVolume = isHovered ? 0.2 : 0;
      const currentVolume = volumeRef.current;
      const volumeStep = (targetVolume - currentVolume) / (fadeDuration * 60);

      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }

      fadeIntervalRef.current = setInterval(() => {
        const newVolume = volumeRef.current + volumeStep;
        if ((volumeStep > 0 && newVolume >= targetVolume) || (volumeStep < 0 && newVolume <= targetVolume)) {
          volumeRef.current = targetVolume;
          videoRef.current.volume = targetVolume;
          clearInterval(fadeIntervalRef.current);
          fadeIntervalRef.current = null;
        } else {
          volumeRef.current = newVolume;
          videoRef.current.volume = newVolume;
        }
      }, 16);
      
      return () => {
        clearInterval(fadeIntervalRef.current);
      }
    }
  }, [isHovered]);

  useEffect(() => {
    // Set the initial volume to 0
    if (videoRef.current) {
      volumeRef.current = 0;
      videoRef.current.volume = 0;
    }
  }, []);

  return (
    <video
      autoPlay
      loop
      playsInline
      src={src}
      ref={videoRef}
      className={className}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    />
  );
}

export default HoverVideo;

import { useState } from "react";
import "../BlurImage/blurcss.css";

function BlurImage({ src, alt, className = "", loading = "lazy" }) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  };

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      onLoad={handleLoad}
      className={`blur-image ${loaded ? "loaded" : ""} ${className}`}
    />
  );
}

export default BlurImage;

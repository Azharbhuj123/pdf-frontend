import { useEffect, useState } from "react";
import type { OptimizedImageProps } from "@/Types/ComponentTypes";
const Image: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  fit,
  height,
  loading = "lazy",
  extraClasses = "",
  onErrorFallbackSrc,
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    if (onErrorFallbackSrc) {
      setImgSrc(onErrorFallbackSrc);
    }
  };

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <img
      src={imgSrc}
      alt={alt}
      loading={loading}
      width={width}
      height={height}
      onError={handleError}
      className={`block ${fit} ${extraClasses ? extraClasses : ""} max-w-full`}
    />
  );
};

export default Image;

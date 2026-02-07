import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  style?: React.CSSProperties;
  loading?: "lazy" | "eager";
}

const ImageWithSkeleton = ({
  src,
  alt,
  className = "",
  skeletonClassName = "",
  style,
  loading = "lazy",
}: ImageWithSkeletonProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoaded(true);
  }, []);

  return (
    <div className={cn("relative overflow-hidden", skeletonClassName)}>
      {/* Skeleton shimmer */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, hsl(var(--muted-foreground) / 0.08) 50%, transparent 100%)",
              animation: "shimmer 1.8s ease-in-out infinite",
            }}
          />
        </div>
      )}

      {/* Actual image */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          className={cn(
            "transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          style={style}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <span className="text-muted-foreground text-xs">Image unavailable</span>
        </div>
      )}
    </div>
  );
};

export default ImageWithSkeleton;

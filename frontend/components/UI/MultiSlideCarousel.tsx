import { useState, useEffect, ReactNode, Children } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ResponsiveConfig {
  mobile: number;
  tablet: number;
  desktop: number;
}

interface CarouselProps {
  children: ReactNode;
  autoSlide?: boolean;
  autoSlideInterval?: number;
  itemsPerView?: number | ResponsiveConfig;
}

export default function Carousel({
  children,
  autoSlide = false,
  autoSlideInterval = 3000,
  itemsPerView = 4,
}: CarouselProps) {
  const slides = Children.toArray(children);
  const [curr, setCurr] = useState(0);
  const [currentItemsPerView, setCurrentItemsPerView] = useState(1);

  // Determine items per view based on screen size
  const getItemsPerView = () => {
    if (typeof itemsPerView === 'number') {
      // Legacy support for simple number
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 640) return 1;
        if (window.innerWidth < 1024) return Math.min(2, itemsPerView);
        return itemsPerView;
      }
      return itemsPerView;
    } else {
      // Responsive configuration
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 640) return itemsPerView.mobile;
        if (window.innerWidth < 1024) return itemsPerView.tablet;
        return itemsPerView.desktop;
      }
      return itemsPerView.mobile;
    }
  };

  // Update items per view on resize
  useEffect(() => {
    const handleResize = () => {
      setCurrentItemsPerView(getItemsPerView());
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [itemsPerView]);

  const totalPages = Math.ceil(slides.length / currentItemsPerView);

  const next = () => setCurr((prev) => (prev + 1) % totalPages);
  const prev = () => setCurr((prev) => (prev - 1 + totalPages) % totalPages);

  // Reset to first slide when items per view changes
  useEffect(() => {
    setCurr(0);
  }, [currentItemsPerView]);

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(next, autoSlideInterval);
    return () => clearInterval(interval);
  }, [autoSlide, autoSlideInterval, totalPages]);

  // Calculate item width based on current items per view
  const itemWidth = 100 / currentItemsPerView;

  return (
    <div className="relative w-full">
      {/* Navigation Arrows */}
      <div className="absolute top-[6%] 2xl:top-[-10%] xl:top-[-10%] lg:top-[-10%] md:top-[-10%] sm:top-[5%] right-[15%] sm:right-[12%] lg:right-[10%] transform -translate-y-1/2 z-20">
        <button
          onClick={prev}
          className="bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 mr-2"
          disabled={totalPages <= 1}
        >
          <FaChevronLeft className="text-gray-600 text-sm sm:text-base" />
        </button>
      </div>
      
      <div className="absolute top-[6%] 2xl:top-[-10%] xl:top-[-10%] lg:top-[-10%] md:top-[-10%] sm:top-[5%] right-[5%] sm:right-[5%] lg:right-[5%] transform -translate-y-1/2 z-20">
        <button
          onClick={next}
          className="bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
          disabled={totalPages <= 1}
        >
          <FaChevronRight className="text-gray-600 text-sm sm:text-base" />
        </button>
      </div>

      {/* Slide Track */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${curr * (100 / totalPages)}%)`,
            width: `${totalPages * 100}%`,
          }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className="flex"
              style={{ width: `${100 / totalPages}%` }}
            >
              {slides
                .slice(
                  pageIndex * currentItemsPerView,
                  (pageIndex + 1) * currentItemsPerView
                )
                .map((slide, slideIndex) => (
                  <div
                    key={`${pageIndex}-${slideIndex}`}
                    className="flex-shrink-0 px-2 sm:px-3"
                    style={{ width: `${itemWidth}%` }}
                  >
                    {slide}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurr(i)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-colors duration-200 ${
                curr === i ? "bg-white" : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
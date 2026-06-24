import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1920",
    title: "Freshly Baked Daily",
    subtitle: "Experience the aroma of tradition",
    cta: "View Products",
    link: "/products",
  },
  {
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1920",
    title: "Celebrate with Us",
    subtitle: "Custom cakes for every occasion",
    cta: "Order Now",
    link: "/products?category=cakes",
  },
  {
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1920",
    title: "Quality You Can Taste",
    subtitle: "Premium ingredients, authentic recipes",
    cta: "Find a Branch",
    link: "/branches",
  },
  {
     image: "data:image/jpeg;base64,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",
    title: "levy baraka",
    subtitle: "you know",
    cta: "like this",
    link: "/proper",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div
              className={`max-w-2xl transition-all duration-700 delay-300 ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-cream/90 mb-8">
                {slide.subtitle}
              </p>
              <Link
                to={slide.link}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg"
              >
                {slide.cta}
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-cream hover:bg-background/40 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-cream hover:bg-background/40 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-accent w-8"
                : "bg-cream/50 hover:bg-cream/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;

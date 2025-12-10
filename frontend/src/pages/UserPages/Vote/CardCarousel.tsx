// CardCarousel.tsx
import React, { useState, useEffect } from 'react';

export interface Candidate {
  id: string;
  name: string;
  department: string;
  description: string;
  role: 'King' | 'Queen';
}

interface CardCarouselProps {
  candidates: Candidate[];
  title: string;
}

const CardCarousel: React.FC<CardCarouselProps> = ({ candidates, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);

  // Calculate number of cards to show based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const totalCards = candidates.length;
  const maxIndex = Math.max(0, totalCards - cardsToShow);

  const nextSlide = () => {
    if (isAnimating || currentIndex >= maxIndex) return;
    
    setIsAnimating(true);
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevSlide = () => {
    if (isAnimating || currentIndex <= 0) return;
    
    setIsAnimating(true);
    setCurrentIndex(prev => Math.max(prev - 1, 0));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleVote = (candidateId: string) => {
    alert(`Voted for candidate: ${candidateId}`);
    // Implement your voting logic here
  };

  // Calculate card width based on number of cards to show
  const getCardWidth = () => {
    if (cardsToShow === 1) return 'w-full';
    if (cardsToShow === 2) return 'w-1/2';
    return 'w-1/3';
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{title}</h2>
      
      <div className="relative">
        {/* Navigation Buttons */}
        {currentIndex > 0 && (
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 
                       bg-white rounded-full w-10 h-10 md:w-12 md:h-12 shadow-lg 
                       flex items-center justify-center hover:bg-gray-50 
                       disabled:opacity-50 disabled:cursor-not-allowed 
                       transition-all duration-200 group"
            aria-label="Previous candidates"
          >
            <svg 
              className="w-6 h-6 text-gray-700 group-hover:text-gray-900" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {currentIndex < maxIndex && (
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 
                       bg-white rounded-full w-10 h-10 md:w-12 md:h-12 shadow-lg 
                       flex items-center justify-center hover:bg-gray-50 
                       disabled:opacity-50 disabled:cursor-not-allowed 
                       transition-all duration-200 group"
            aria-label="Next candidates"
          >
            <svg 
              className="w-6 h-6 text-gray-700 group-hover:text-gray-900" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Carousel Container */}
        <div className="overflow-hidden px-2">
          <div 
            className={`flex transition-transform duration-300 ease-out ${isAnimating ? 'transform-gpu' : ''}`}
            style={{ 
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              transition: isAnimating ? 'transform 0.3s ease-out' : 'none'
            }}
          >
            {candidates.map((candidate) => (
              <div 
                key={candidate.id}
                className={`${getCardWidth()} shrink-0 px-2 md:px-3`}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden 
                              hover:shadow-xl transition-shadow duration-300 
                              border border-gray-100 h-full">
                  <div className="p-6 md:p-8">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-purple-100 
                                    text-purple-700 rounded-full text-sm font-medium">
                        {candidate.department}
                      </span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                      {candidate.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {candidate.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500">
                        For {candidate.role}
                      </span>
                      <button
                        onClick={() => handleVote(candidate.id)}
                        className="bg-linear-to-r from-purple-600 to-indigo-600 
                                 text-white px-5 py-2.5 rounded-lg font-medium
                                 hover:from-purple-700 hover:to-indigo-700 
                                 focus:outline-none focus:ring-2 focus:ring-purple-500 
                                 focus:ring-offset-2 transition-all duration-200 
                                 transform hover:-translate-y-0.5 active:translate-y-0"
                      >
                        Vote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        {totalCards > cardsToShow && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-purple-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardCarousel;
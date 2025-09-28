"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Hero() {
  const slides = [
    {
      title: "ادرس أذكى، مو أكثر.",
      description: "حوّل مذاكرتك إلى تجربة تفاعلية وشخصية مع VegaLearn – منصة الذكاء الاصطناعي التعليمية.",
      subtext: "تلخيص فوري، بطاقات ذكية، وأسئلة تفاعلية – كل شيء مصمم خصيصًا لطريقتك في التعلم.",
      image: "/images/hero/3-AI-requirements-management-tools-you-cant-ignore.jpg"
    },
    {
      title: "تعلم بطريقتك الخاصة",
      description: "منصة تعليمية مبتكرة تتكيف مع أسلوبك في التعلم وتساعدك على تحقيق أهدافك بسرعة أكبر.",
      subtext: "تقنيات الذكاء الاصطناعي المتقدمة تحلل نقاط قوتك وتحسن من تجربة التعلم.",
      image: "/images/hero/BSc-Computing.jpg"
    },
    {
      title: "اختصر وقت المذاكرة",
      description: "استخدم أدواتنا الذكية لتلخيص المحتوى وإنشاء بطاقات المراجعة تلقائيًا.",
      subtext: "وفر وقتك للفهم العميق بدلاً من قضائه في تنظيم المعلومات.",
      image: "/images/hero/images.jpg"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen" dir="rtl">
      <div className="carousel relative h-screen">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`carousel-item absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
              currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="container px-4 md:px-6 relative h-full flex items-center justify-center">
              <div className="text-center text-white max-w-4xl">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 animate-fade-in-up">
                  {slide.title}
                </h1>
                <p className="mx-auto max-w-[700px] text-lg text-gray-200 mb-8 animate-fade-in-up animation-delay-200">
                  {slide.description}
                </p>
                <p className="mx-auto max-w-[700px] text-md italic text-gray-300 mb-10 animate-fade-in-up animation-delay-400">
                  {slide.subtext}
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-600">
                  <Button 
                    size="lg" 
                    className="font-medium bg-blue-600 hover:bg-blue-700 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    ابدأ مجانًا
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="font-medium border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
                  >
                    شاهد كيف نعمل
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-10">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:scale-110 transition-all duration-300" 
            onClick={prevSlide}
            aria-label="الشريحة السابقة"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
          
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <Button 
                key={index}
                variant={currentSlide === index ? "default" : "outline"}
                size="sm"
                className={`w-3 h-3 rounded-full p-0 min-w-0 transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-blue-600 border-blue-600 scale-125' 
                    : 'bg-white/20 border-white/30 hover:bg-white/40 hover:scale-110'
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`الانتقال إلى الشريحة ${index + 1}`}
              />
            ))}
          </div>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:scale-110 transition-all duration-300" 
            onClick={nextSlide}
            aria-label="الشريحة التالية"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
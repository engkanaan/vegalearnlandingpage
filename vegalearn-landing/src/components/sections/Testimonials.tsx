import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export function Testimonials() {
  const testimonials = [
    {
      quote: "أول مرة أحس إن الدراسة صارت ممتعة! VegaLearn اختصرت علي الوقت والمجهود.",
      author: "سارة، طالبة ثانوي"
    },
    {
      quote: "الأسئلة والبطاقات كانت كأنها مصممة لي شخصيًا، ساعدتني أراجع وأركز على نقاط ضعفي.",
      author: "فيصل، طالب قدرات"
    }
  ];

  return (
    <section className="bg-muted/50 py-16" dir="rtl" id="testimonials">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          ماذا يقول طلابنا؟
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="relative">
                  <span className="absolute -top-4 right-0 text-4xl text-primary/20">"</span>
                  <blockquote className="text-lg italic mb-4">
                    {testimonial.quote}
                  </blockquote>
                  <footer className="text-sm font-medium text-muted-foreground">
                    — {testimonial.author}
                  </footer>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Button } from '@/components/ui/button';

export function CTA() {
  return (
    <section className="bg-primary/10 py-16" dir="rtl">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
          جاهز تبدأ تتعلم بطريقة تناسبك؟
        </h2>
        <h3 className="text-xl mb-8">
          لا مزيد من الحفظ العشوائي. لا مزيد من الملل.
        </h3>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground mb-8">
          <strong>VegaLearn</strong> هي طريقتك الجديدة للدراسة الذكية.
        </p>
        <Button size="lg" className="font-medium">
          ابدأ مجانًا الآن
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          بدون بطاقة – فقط شغف للتعلم.
        </p>
      </div>
    </section>
  );
}
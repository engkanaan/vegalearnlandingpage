import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export function Privacy() {
  const privacyFeatures = [
    {
      icon: "🔒",
      text: "بياناتك مؤمنة 100%"
    },
    {
      icon: "📜",
      text: "سياسة خصوصية متوافقة مع GDPR"
    },
    {
      icon: "🤖",
      text: "كل المحتوى المولد بالذكاء الاصطناعي موثّق ومُراجع"
    }
  ];

  return (
    <section className="bg-background py-16" dir="rtl" id="privacy">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          خصوصيتك أولويتنا
        </h2>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center max-w-4xl mx-auto">
          {privacyFeatures.map((feature, index) => (
            <Card key={index} className="flex-1">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <p className="text-muted-foreground">{feature.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
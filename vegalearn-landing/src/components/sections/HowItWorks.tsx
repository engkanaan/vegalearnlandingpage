import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Upload, 
  BookOpen, 
  Brain, 
  Target, 
  Award,
  ArrowDown,
  Sparkles,
  CheckCircle
} from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "ارفع الكتاب",
      description: "أو اختر من مكتبتنا الغنية بآلاف الكتب المعتمدة",
      icon: <Upload className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      number: 2,
      title: "نقسمه تلقائيًا",
      description: "إلى فصول منظمة ومهيكلة بذكاء اصطناعي متطور",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-50 to-teal-50"
    },
    {
      number: 3,
      title: "نولد المحتوى الذكي",
      description: "تلخيص دقيق + بطاقات تفاعلية + أسئلة متنوعة",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      number: 4,
      title: "تدرس، تراجع، تختبر نفسك",
      description: "وكل شيء يتم تتبعه وتخصيصه حسب احتياجاتك الشخصية",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50"
    },
    {
      number: 5,
      title: "تحصل على شارات وتوصيات",
      description: "نظام تحفيزي ذكي يساعدك للوصول لأهدافك التعليمية",
      icon: <Award className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20" dir="rtl" id="how-it-works">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            عملية بسيطة ومبتكرة
          </div>
          
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            كيف تشتغل VegaLearn؟
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            خطوات بسيطة، نتائج عبقرية - رحلة تعليمية مصممة لتحقيق أقصى استفادة
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 top-full mt-4 mb-4 z-10">
                    <div className="flex flex-col items-center">
                      <ArrowDown className="w-6 h-6 text-gray-400 animate-bounce" />
                    </div>
                  </div>
                )}
                
                <Card className={`relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br ${step.bgColor}`}>
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      {/* Step Number and Icon */}
                      <div className="flex-shrink-0 relative">
                        <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg relative z-10`}>
                          {step.icon}
                        </div>
                        
                        {/* Step Number Badge */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100 z-20">
                          <span className="text-sm font-bold text-gray-700">{step.number}</span>
                        </div>
                        
                        {/* Decorative Ring */}
                        <div className={`absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-br ${step.color} opacity-20 scale-125`}></div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 text-center md:text-right space-y-4">
                        <h4 className="text-2xl font-bold text-gray-800 flex items-center justify-center md:justify-start gap-2">
                          <CheckCircle className="w-6 h-6 text-green-500" />
                          {step.title}
                        </h4>
                        
                        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                          {step.description}
                        </p>
                        
                        {/* Progress Indicator */}
                        <div className="flex items-center justify-center md:justify-start gap-2 pt-2">
                          <div className="text-sm text-gray-500">الخطوة {step.number} من {steps.length}</div>
                          <div className="flex gap-1">
                            {Array.from({ length: steps.length }).map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                  i < step.number ? 'bg-blue-500' : 'bg-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Final CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 px-6 py-3 rounded-full text-lg font-medium">
              <CheckCircle className="w-5 h-5" />
              جاهز للبدء؟ العملية تستغرق أقل من دقيقتين!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
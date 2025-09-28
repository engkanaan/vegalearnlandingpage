import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Library, BookOpen, Brain, Target, Users } from 'lucide-react';

export function Paths() {
  const paths = [
    {
      icon: <Upload className="w-8 h-8 text-blue-600" />,
      title: "المسار الشخصي",
      description: "ارفع كتبك أو مذكراتك بصيغة PDF، وخلي الذكاء الاصطناعي يختصرها لك، يحوّلها إلى بطاقات تعليمية وأسئلة تدريبية – كلها مخصصة لمستواك.",
      features: ["تلخيص ذكي للمحتوى", "بطاقات تعليمية تفاعلية", "أسئلة مخصصة", "تتبع التقدم"],
      buttonText: "ابدأ من هنا",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: <Library className="w-8 h-8 text-green-600" />,
      title: "مسار المكتبة الجاهزة",
      description: "اختر من مكتبة مناهج وقدرات مجهزة مسبقًا، حدّد تفضيلاتك، وخذ خطة دراسية كاملة تتحدث بلغتك.",
      features: ["مناهج جاهزة ومعتمدة", "خطط دراسية مخصصة", "محتوى متنوع", "تحديثات مستمرة"],
      buttonText: "استعرض المكتبة",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "مسار الذكاء الاصطناعي",
      description: "استخدم قوة الذكاء الاصطناعي لتحليل أسلوب تعلمك وإنشاء محتوى تعليمي مخصص يناسب احتياجاتك الفردية.",
      features: ["تحليل أسلوب التعلم", "محتوى مخصص", "توصيات ذكية", "تحسين مستمر"],
      buttonText: "جرب الآن",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <Target className="w-8 h-8 text-orange-600" />,
      title: "مسار الأهداف",
      description: "حدد أهدافك التعليمية واحصل على خطة مفصلة مع جدولة زمنية ومتابعة يومية لضمان تحقيق النجاح.",
      features: ["تحديد الأهداف الذكي", "جدولة زمنية", "متابعة يومية", "تقارير التقدم"],
      buttonText: "حدد أهدافك",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20" dir="rtl" id="paths">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            اختر طريقتك في التعلم
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            مسارات متنوعة مصممة لتناسب جميع أساليب التعلم وتحقق أهدافك التعليمية بأفضل الطرق
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {paths.map((path, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/80 backdrop-blur-sm"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${path.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-gray-100 group-hover:bg-white transition-colors duration-300">
                    {path.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {path.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10 flex-grow space-y-6">
                <p className="text-gray-600 leading-relaxed text-lg">
                  {path.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 text-lg">المميزات الرئيسية:</h4>
                  <ul className="space-y-2">
                    {path.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              
              <CardFooter className="relative z-10 pt-6">
                <Button 
                  className={`w-full bg-gradient-to-r ${path.gradient} hover:shadow-lg hover:scale-105 transition-all duration-300 text-white border-0 py-3 text-lg font-semibold`}
                >
                  {path.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Additional CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              غير متأكد من المسار المناسب؟
            </h3>
            <p className="text-gray-600 mb-6">
              جرب اختبار تحديد أسلوب التعلم المجاني واكتشف المسار الأمثل لك
            </p>
            <Button 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              ابدأ الاختبار المجاني
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
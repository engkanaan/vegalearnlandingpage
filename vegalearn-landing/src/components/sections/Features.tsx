import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  FileText, 
  Brain, 
  HelpCircle, 
  BarChart3, 
  Trophy, 
  Users, 
  Globe, 
  Zap,
  BookOpen,
  Target,
  Clock,
  Shield
} from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "تلخيص تلقائي للفصول المعقدة",
      description: "خوارزميات ذكية تحلل المحتوى وتستخرج النقاط الأساسية بدقة عالية",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "بطاقات تعليمية بأسلوب Active Recall",
      description: "تقنيات علمية مثبتة لتحسين الذاكرة وزيادة فعالية التعلم",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: "بنك أسئلة متنوع ومخصص",
      description: "أسئلة اختيارية وصح/خطأ ومفتوحة مصممة حسب مستواك التعليمي",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "تتبع التقدم والتحليلات",
      description: "رؤى مفصلة عن نقاط القوة والضعف مع توصيات للتحسين",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "نظام شارات وإنجازات",
      description: "تحفيز مستمر من خلال الإنجازات والتحديات اليومية",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "مشاركة المحتوى والتعاون",
      description: "شارك المواد التعليمية وتعاون مع زملائك بسهولة",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "دعم متعدد اللغات",
      description: "دعم كامل للغة العربية والإنجليزية مع ترجمة ذكية",
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "معالجة فورية بالذكاء الاصطناعي",
      description: "استجابة سريعة وذكية لجميع استفساراتك التعليمية",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "مكتبة محتوى غنية",
      description: "آلاف المواد التعليمية المعتمدة في مختلف التخصصات",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "خطط دراسية مخصصة",
      description: "جداول زمنية ذكية تتكيف مع وقتك وأهدافك الشخصية",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "تذكيرات ذكية",
      description: "نظام تنبيهات متقدم يساعدك على الالتزام بخطة الدراسة",
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "أمان وخصوصية عالية",
      description: "حماية متقدمة لبياناتك مع التزام كامل بمعايير الخصوصية",
      color: "from-slate-500 to-gray-500"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-20" dir="rtl" id="features">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            مميزاتنا الذكية
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            تقنيات متطورة ومميزات فريدة مصممة لتحويل تجربة التعلم إلى رحلة ممتعة وفعالة
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/80 backdrop-blur-sm"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <CardHeader className="relative z-10 pb-4">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-4 rounded-full bg-gradient-to-br ${feature.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10 text-center">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
            <div className="text-gray-600">طالب نشط</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-gray-600">معدل الرضا</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">1M+</div>
            <div className="text-gray-600">بطاقة تعليمية</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">دعم فني</div>
          </div>
        </div>
      </div>
    </section>
  );
}
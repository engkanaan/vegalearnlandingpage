import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Sparkles, 
  Users, 
  BookOpen, 
  Award,
  ArrowLeft,
  CheckCircle,
  Zap,
  Heart
} from 'lucide-react';

export function About() {
  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "50K+", label: "طالب نشط" },
    { icon: <BookOpen className="w-6 h-6" />, number: "1M+", label: "بطاقة تعليمية" },
    { icon: <Award className="w-6 h-6" />, number: "95%", label: "معدل النجاح" },
    { icon: <Sparkles className="w-6 h-6" />, number: "24/7", label: "دعم فني" }
  ];

  const features = [
    "تقنيات الذكاء الاصطناعي المتطورة",
    "واجهة سهلة الاستخدام ومتجاوبة",
    "محتوى تعليمي معتمد ومحدث",
    "نظام تتبع تقدم شخصي",
    "مجتمع تعليمي تفاعلي",
    "دعم متعدد اللغات"
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20" dir="rtl" id="about">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            من نحن؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            رحلة تعليمية مبتكرة تجمع بين التكنولوجيا المتطورة والتجربة الإنسانية الفريدة
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                منصة تعليمية ذكية
              </div>
              
              <h3 className="text-3xl font-bold text-gray-800 leading-tight">
                تعلم بطريقة تناسبك... 
                <span className="text-blue-600">أخيرًا!</span>
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                VegaLearn هي منصة تعليمية مبتكرة مدعومة بالذكاء الاصطناعي، مصممة لمساعدتك على الفهم السريع، المراجعة الذكية، والتحفيز المستمر.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                نحن لا نؤمن بالدراسة المملة... بل بالتجربة التفاعلية التي تشبه الألعاب الذكية وتحفز على التعلم المستمر.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                ما يميزنا
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group">
              ابدأ رحلتك التعليمية
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Side - Visual Content */}
          <div className="space-y-8">
            {/* Main Image Card */}
            <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-white to-blue-50">
              <CardContent className="p-8">
                <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20"></div>
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Heart className="w-12 h-12 text-red-500" />
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-8 left-8 bg-white/90 rounded-lg p-3 shadow-lg">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="absolute bottom-8 right-8 bg-white/90 rounded-lg p-3 shadow-lg">
                    <Award className="w-6 h-6 text-yellow-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
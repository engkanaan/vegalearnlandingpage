"use client";

import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">VegaLearn</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              منصة تعليمية مبتكرة مدعومة بالذكاء الاصطناعي، مصممة لمساعدتك على الفهم السريع، المراجعة الذكية، والتحفيز المستمر.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium">المنصة</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground">
                    المميزات
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground">
                    كيف تعمل
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-muted-foreground hover:text-foreground">
                    آراء الطلاب
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">الدعم</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    الأسئلة الشائعة
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    سياسة الخصوصية
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    تواصل معنا
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium">اشترك في نشرتنا</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              احصل على آخر التحديثات والنصائح التعليمية
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="rounded-md border border-border bg-background px-3 py-2 text-sm"
              />
              <button className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground">
                اشترك
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 VegaLearn. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
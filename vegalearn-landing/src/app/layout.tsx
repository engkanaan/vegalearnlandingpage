import type { Metadata } from "next";
import "./globals.css";
import { montserratArabic } from "./fonts";

export const metadata: Metadata = {
  title: "VegaLearn - ادرس أذكى، مو أكثر",
  description: "منصة تعليمية مبتكرة مدعومة بالذكاء الاصطناعي، مصممة لمساعدتك على الفهم السريع، المراجعة الذكية، والتحفيز المستمر.",
  openGraph: {
    title: "VegaLearn - ادرس أذكى، مو أكثر",
    description: "منصة تعليمية مبتكرة مدعومة بالذكاء الاصطناعي",
    url: "https://vegalearn.com",
    siteName: "VegaLearn",
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${montserratArabic.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}

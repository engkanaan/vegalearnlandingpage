import localFont from 'next/font/local';

export const montserratArabic = localFont({
  src: [
    {
      path: '../../public/fonts/ArbFONTS-Montserrat-Arabic-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ArbFONTS-Montserrat-Arabic-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ArbFONTS-Montserrat-Arabic-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ArbFONTS-Montserrat-Arabic-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ArbFONTS-Montserrat-Arabic-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ArbFONTS-Montserrat-Arabic-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ArbFONTS-Montserrat-Arabic-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ArbFONTS-Montserrat-Arabic-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ArbFONTS-Montserrat-Arabic-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
  ],
  variable: '--font-montserrat-arabic',
  display: 'swap',
});
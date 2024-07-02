import type { Metadata } from 'next';
import './globals.css';
import { Roboto } from '@next/font/google';
import Header from './header';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Championship App',
  description: 'A friends championship',
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>
      <body>
        <Header />
        <div className={roboto.className}>{children}</div>
      </body>
    </html>
  );
}

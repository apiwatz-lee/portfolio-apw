import { Outfit, Ovo } from 'next/font/google';
import './globals.css';

const outFit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const ovo = Ovo({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata = {
  title: 'Portfolio - APW',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${outFit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

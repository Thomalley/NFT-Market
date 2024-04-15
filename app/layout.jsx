import './globals.css';

import { Manrope } from 'next/font/google';
import Providers from './providers.jsx';

const manrope = Manrope({
  subsets: ['latin'],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.className} bg-[#161616] dark`}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

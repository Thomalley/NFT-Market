import './globals.css';
import Providers from './providers.jsx';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='font-Manrope bg-text-in-bg dark'>
      <body>
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  );
}

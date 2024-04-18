import './globals.css';
// eslint-disable-next-line import/no-unresolved
import { Toaster } from 'sonner';
import Providers from './providers.jsx';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='font-Manrope bg-text-in-bg dark'>
      <body>
        <Providers>
            {children}
            <Toaster richColors theme='dark'/>
        </Providers>
      </body>
    </html>
  );
}

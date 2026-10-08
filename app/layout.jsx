import './globals.css';
import { StoreProvider } from '@/components/StoreProvider';

export const metadata = {
  title: 'WhatBytes Store',
  description: 'A simple e-commerce frontend built for the WhatBytes assignment.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}

import { Metadata } from 'next';

import '../index.css';
import Footer from './Footer.js';
import InfoHeader from './InfoHeader.js';

export const metadata: Metadata = {
  title: 'My first site',
  description: 'This is my first site on NextJS!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <InfoHeader />
          <main className="content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import { Metadata } from 'next';

import '../index.css';
import Footer from './Footer.js';
import InfoHeader from './InfoHeader.js';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'A homework for innopolis frontend course',
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

import { Urbanist, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata = {
  title: 'Dylan Cheballah — Data Engineer',
  description:
    'Data Engineer & System Analyst based in Johannesburg. Building data systems that turn raw complexity into clean, meaningful output.',
  keywords: 'data engineer, system analyst, SQL, Python, ETL, Johannesburg',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0A',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${urbanist.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

import { Syne, Space_Grotesk, Space_Mono } from 'next/font/google';
import './globals.css';

const display = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const sans = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const mono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
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
  themeColor: '#060D1A',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

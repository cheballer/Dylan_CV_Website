import { Urbanist, Cormorant, JetBrains_Mono } from 'next/font/google';
import './globals.css';

/* Urbanist — body, UI, labels */
const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

/* Cormorant — display name in hero only */
const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

/* JetBrains Mono — labels and section markers */
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['300', '400', '500'],
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
  themeColor: '#070707',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${urbanist.variable} ${cormorant.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

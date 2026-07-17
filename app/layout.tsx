import type {Metadata} from 'next';
import { Inter, Outfit, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', weight: ['300','400','500','600','700','800','900'] });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Monika Dangi | BCA Student & Aspiring Software Developer',
  description: 'Portfolio of Monika Dangi — BCA student passionate about Software Development, AI, Cloud Computing, and Data Analytics. Building modern solutions, one project at a time.',
  keywords: ['Monika Dangi', 'BCA Student', 'Software Developer', 'AI', 'Cloud Computing', 'Data Analytics', 'Portfolio'],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#0891B2',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} ${jetbrains.variable} ${playfair.variable} font-sans antialiased bg-[#F8F5F0] text-[#1F2937] min-h-screen transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ThemeProvider defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'We scream for icecream!',
  description: `Our magical van is powered by sprinkles and fueled by joy, traveling from neighborhood to neighborhood, spreading happiness one scoop at a time. With a whimsical swirl of colors and a jolly jingle that can make even the grumpiest of grumps crack a smile, we're here to make your sweet dreams come true.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

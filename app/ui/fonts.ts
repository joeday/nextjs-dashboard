import { Inter, Cousine, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const cousine = Cousine({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['cyrillic'],
});
export const lusitana = Lusitana({
  weight: ['400', '700'],
  style: ['normal', 'normal'],
  subsets: ['latin'],
});

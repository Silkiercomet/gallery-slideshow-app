import localFont from 'next/font/local'
import "./globals.css";

const myFont = localFont({ src: 
[  {
  path: '../../public/fonts/LibreBaskerville-Regular.ttf',
  weight: '400',
  style: 'normal',
},
{
  path: '../../public/fonts/LibreBaskerville-Bold.ttf',
  weight: '700',
  style: 'bold',
},
{
  path: '../../public/fonts/LibreBaskerville-Italic.ttf',
  weight: '400',
  style: 'italic',
},] })

export const metadata = {
  title: "Gallery Slishow",
  description: "An application that showcases some of the most beautiful art in contemporary history",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}

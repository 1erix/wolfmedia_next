import type { Metadata, Viewport } from "next";
import './globals.css'
import localFont from 'next/font/local'
import { Layout } from "@/widgets/layouts";

export const metadata: Metadata = {
  metadataBase: new URL('https://wolfmedia-next.vercel.app'),
  title: "Wolfmedia",
  description: "Wolfmedia - издательство новых медиа",
  icons: {
    icon: '/favicon.ico',
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const CeraPro = localFont({
  src: [
    {
      path: '../../public/fonts/CeraPro/CeraPro-Thin.woff',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../../public/fonts/CeraPro/CeraPro-Light.woff',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/CeraPro/CeraPro-Regular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/CeraPro/CeraPro-Medium.woff',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/CeraPro/CeraPro-Bold.woff',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/CeraPro/CeraPro-Black.woff',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../../public/fonts/CeraPro/CeraPro-Italic.woff',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../public/fonts/CeraPro/CeraPro-BoldItalic.woff',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../../public/fonts/CeraPro/CeraPro-BlackItalic.woff',
      weight: '900',
      style: 'italic'
    },
  ],
  variable: '--font-cera-pro',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={CeraPro.variable}>
      <body className={`${CeraPro.className} antialiased`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
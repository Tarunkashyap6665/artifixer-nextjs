import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { GoogleAnalytics} from '@next/third-parties/google'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const generateMetadata=():Metadata=>{
  return{
    title:{
      default:"Artifixer - AI-powered tools for image and text editing",
      template:"%s - Artifixer"
    }
  }
}



export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased `}
        >
          {children}
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC_MEASUREMENT_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC_MEASUREMENT_ID}/>}
        </body>
      </html>
    </ClerkProvider>
  );
}

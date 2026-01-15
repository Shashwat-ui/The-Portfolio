// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import ScrollMouseIcon from "@/components/ui/ScrollMouseIcon";
import CanvasContainer from "@/components/canvas/CanvasContainer";
import { Toaster } from "react-hot-toast";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
     <body
  className={[
    geistSans.variable,
    geistMono.variable,
    "antialiased bg-black",
  ].join(" ")}
>


      
        {/* ROOT WRAPPER */}
        <div className="relative min-h-screen overflow-hidden">

          {/* ===== 3D BACKGROUND (BEHIND EVERYTHING) ===== */}
          <div className="fixed inset-0 -z-20">
            <CanvasContainer />
          </div>

          {/* ===== CONTRAST / READABILITY LAYER ===== */}
          {/* THIS IS WHAT FIXES FONT & CARD VISIBILITY */}
          <div className="pointer-events-none fixed inset-0 -z-10 bg-linear-to-b from-black/70 via-black/40 to-black/80 backdrop-blur-[2px]" />

          {/* ===== MAIN UI CONTENT ===== */}
          <main className="relative z-10">
            {children}
          </main>

          {/* ===== SCROLL INDICATOR (ALWAYS ON TOP) ===== */}
          <div className="relative z-20">
            <ScrollMouseIcon />
          </div>
          <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toasterId="default"
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    removeDelay: 1000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      iconTheme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>

        </div>
      </body>
    </html>
  );
}

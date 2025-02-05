import type { Metadata } from "next";
import { Pixelify_Sans, Space_Mono } from "next/font/google";
import { Suspense } from "react";
import { Toaster } from "@/app/components/ui/sonner"
import NavBar from "./components/NavBar";
import "./globals.css";
import Loading from "./loading";

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixelify-sans",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Leos Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${pixelifySans.variable} ${spaceMono.variable} flex w-full flex-col items-center overflow-hidden bg-yellow-light antialiased`}
      >
        <Suspense fallback={<Loading />}>
          <div className="flex w-full flex-col items-center justify-center">
            <NavBar />
            {children}
          </div>
        </Suspense>
        <Toaster toastOptions={{
          style: {
            backgroundColor: "#FEDC66",
            color: "#3D0066",
            padding: "1rem",
            borderRadius: "1rem",
            border: "2px solid #3D0066",
            boxShadow: "4px 4px rgba(61, 0, 102, 1)"
          }
        }}/>
      </body>
    </html>
  );
}

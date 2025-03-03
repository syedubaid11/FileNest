import type { Metadata } from "next";
import { Geist, Geist_Mono , Bebas_Neue} from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bebasNeue= Bebas_Neue({
  variable:'--font-bebas-neue',
  weight:"400"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({children,}: Readonly<{ children: React.ReactNode;}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased`}>
        <SignedOut>
          <SignInButton/>
          <SignUpButton/>
        </SignedOut>
        <SignedIn>
        </SignedIn>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}

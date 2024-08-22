import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/homepageComponents/Navbar";
import { ThemeProvider } from "next-themes";
import { Container } from "@/components/ui/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Toaster />
        <body className={inter.className}>
          <ThemeProvider attribute="class">
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider >
  );
}

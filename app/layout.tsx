import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Briana Mae Belardo",
  description: "Personal portfolio for Briana Mae Belardo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased font-body">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

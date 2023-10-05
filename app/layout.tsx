import "./globals.css";
import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import QueryProviders from "@/providers/query-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Learning",
  description: "AI Learning created by impruthvi",
};

const lexend = Lexend({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <QueryProviders>
        <html lang="en">
          <body
            className={cn(lexend.className, "antialiased min-h-screen pt-16")}
          >
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Navbar />
              {children}
              <Toaster />
            </ThemeProvider>
          </body>
        </html>
      </QueryProviders>
  );
}

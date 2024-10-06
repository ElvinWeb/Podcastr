import type { Metadata } from "next";
import { ConvexClientProvider } from "./providers/ConvexClientProvider";
import { ConvexClerkProvider } from "./providers/ConvexClerkProvider";
import { Manrope } from "next/font/google";
import { ReactNode } from "react";
import "../styles/globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcastr",
  description: "Generate your podcasts using AI",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${manrope.className}`}>
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </body>
      </html>
    </ConvexClerkProvider>
  );
}

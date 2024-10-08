import { ReactNode } from "react";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className="relative h-screen w-full">
      <div className="absolute size-full">
        <Image
          src="/images/bg-img.png"
          alt="background"
          className="size-full"
          fill
        />
      </div>
      {children}
    </main>
  );
}

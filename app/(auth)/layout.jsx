import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { shadesOfPurple } from "@clerk/themes";

import "../globals.css";

export const metadata = {
  title: "AOCOSA 05/11",
  description: "AOCOSA 05/11 set website",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
      baseTheme: shadesOfPurple,
    }}
    >
      <html lang="en">
        <body className={`${inter.className}`}>
            <div className="main">
            <div className="gradient" />
            </div>
          <div className="w-full flex justify-center relative items-center">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}

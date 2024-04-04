import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { shadesOfPurple } from "@clerk/themes";

import "../globals.css";

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
          <div className="flex-center min-h-screen bg-dotted-pattern bg-gray-200">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}

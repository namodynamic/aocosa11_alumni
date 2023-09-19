import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";

export const metadata = {
  title: "AOCOSA 05/11",
  description: "AOCOSA 05/11 set website",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
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

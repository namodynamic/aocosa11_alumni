import { Footer, NavBar } from "@/components";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Aocosa 05/11 set",
  description: "Aocosa 05/11 set alumni",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <div className="main">
            <div className="gradient" />
          </div>
          <NavBar />
          <div className="w-full flex justify-center items-center min-h-screen">
            {children}
          </div>
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}

import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "AOCOSA: Adeola Odutola College Class of 2005/11 Alumni Association",
  description:
    "Welcome to the official website for the Adeola Odutola College Old Student Association Class of 2005/11! Reconnect with your fellow classmates, share cherished memories, and stay updated on exclusive reunions and events. Join us in celebrating the unique bond of the 2005/11 set and create lasting connections with your schoolmates",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="container flex-1 mx-auto py-8">{children}</main>
            <Footer />
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}

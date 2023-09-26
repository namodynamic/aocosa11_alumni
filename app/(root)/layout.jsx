import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

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
          <header>
            <NavBar />
          </header>
          <div className="container mx-auto py-8">{children}</div>
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}

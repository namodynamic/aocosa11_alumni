import { Footer, NavBar } from "@/components";
import "./globals.css";
import Provider from "@/components/Provider";


export const metadata = {
  title: "Aocosa 05/11",
  description: "Aocosa 05/11 set alumni",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        {/* <Provider> */}
        <div className="main">
          <div className="gradient" />
        </div>
        <NavBar />
        {children}
        <Footer />
        {/* </Provider> */}
      </body>
    </html>
  );
}

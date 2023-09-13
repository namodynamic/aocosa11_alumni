import { Footer, NavBar } from "@/components";
import "./globals.css";
import Provider from "@/components/Provider";
import Excos from "@/components/Excos";

export const metadata = {
  title: "Aocosa 05/11",
  description: "Aocosa 05/11 set alumni",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Provider> */}
        <div className="main">
          <div className="gradient" />
        </div>
        <NavBar />
        {children}

        <div className="flex flex-col items-center justify-between">
          <Excos />
        </div>
        <Footer />
        {/* </Provider> */}
      </body>
    </html>
  );
}

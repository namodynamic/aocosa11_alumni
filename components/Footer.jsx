import { instagram } from "../public/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-maroon relative">
      <hr className="border-yellow-400 border-t-4" />
      <div className="flex flex-row mb-2 relative justify-center mt-2 ">
        <a
          href="https://www.instagram.com/aocosa2011"
          target="_blank"
          rel="noopener noreferrer"
          className="object-contain transform hover:scale-105 bg-white cursor-pointer"
        >
          <Image src={instagram} alt="instagram" />
        </a>
      </div>

      <p className="text-center text-sm text-white font-extrabold">
        &copy; {new Date().getFullYear()} AOCOSA 05/11 SET. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

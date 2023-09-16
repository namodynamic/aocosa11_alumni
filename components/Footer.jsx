import { instagram } from "@/public/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <hr className="border-yellow-400 border-t-4" />
      <div className="flex flex-row mb-2 relative justify-center mt-2 ">
        <a
          href="https://www.instagram.com/aocosa2011"
          target="_blank"
          rel="noopener noreferrer"
          className="object-contain hover:bg-yellow-400 bg-white cursor-pointer"
        >
          <Image src={instagram} alt="instagram" />
        </a>
      </div>

      <p className="text-center text-sm text-black font-extrabold">
        &copy; {new Date().getFullYear()} AOCOSA 05/11 SET. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

import Image from "next/image";
import Link from "next/link";
import { instagram, contact } from "../public/assets";

const Footer = () => {
  return (
    <footer className="bg-maroon relative w-full mx-auto pb-2 pt-0 flex flex-col gap-7 font-inter">
      <hr className="border-yellow-400 w-full border-t-2" />
      <div className="flex flex-wrap gap-7 px-8 items-center justify-between ">
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()} <strong>AOCOSA 05/11 SET</strong> .
          All rights reserved.
        </p>
        <div className="flex gap-3 justify-center items-center">
          <Link href="/contact" className="bg-white  cursor-pointer">
            <Image
              src={contact}
              alt="contact"
              className="object-contain w-6 h-6"
            />
          </Link>
          <a
            href="https://www.instagram.com/aocosa2011"
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-white cursor-pointer"
          >
            <Image
              src={instagram}
              alt="instagram"
              className="object-contain w-6 h-6"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

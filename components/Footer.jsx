import Image from "next/image";
import Link from "next/link";
import { instagram, contact } from "../public/assets";

const Footer = () => {
  return (
    <footer className="relative pb-2 pt-5 flex flex-col gap-7 font-inter">
      <div className="flex wrapper  border-t-2 flex-wrap gap-7 px-8 items-center justify-between ">
        <p className="text-sm ">
          &copy; {new Date().getFullYear()} <strong>AOCOSA 2005/11 SET</strong> .
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

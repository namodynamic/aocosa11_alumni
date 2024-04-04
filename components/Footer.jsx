import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

import { MdOutlineContactMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="relative isolate bg-gray-900 flex flex-col">
      <div className="flex wrapper border-t-2 flex-wrap gap-7 px-8 items-center justify-between ">
        <p className="text-sm text-white ">
          &copy; {new Date().getFullYear()} <strong>AOCOSA 2005/11 SET</strong>{" "}
          . All rights reserved.
        </p>
        <div className="flex gap-2 justify-center items-center">
          <div className="rounded-md bg-white/10 p-2 ring-1 ring-white/10">
            <Link href="/contact" className="cursor-pointer">
              <MdOutlineContactMail className="h-6 w-6 text-white hover:text-gray-200" />
            </Link>
          </div>

          <div className="rounded-md bg-white/10 p-2 ring-1 ring-white/10">
            <a
              href="https://www.instagram.com/aocosa2011"
              target="_blank"
              rel="noopener noreferrer"
              className=" cursor-pointer"
            >
              <FaInstagram className="w-6 h-6 text-white hover:text-gray-200" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

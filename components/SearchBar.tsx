"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { serch } from "@/public/assets";

import { Input } from "./ui/input";

interface Props {
  routeType: string;
}

function Searchbar({ routeType }: Props) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  // query after 0.3s of no input
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        router.push(`/${routeType}?q=` + search);
      } else {
        router.push(`/${routeType}`);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search, routeType]);

  return (
    <div className="flex gap-1 px-4 border rounded-full bg-white py-2 ">
      <Image
        src={serch}
        alt="search icon"
        width={24}
        height={24}
        className="object-contain"
      />

      <Input
        id="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={`${
          routeType !== "/alumni" ? "Search for an alumnus by name or username" : "Search creators"
        }`}
        className="searchbar_input"
      />
    </div>
  );
}

export default Searchbar;

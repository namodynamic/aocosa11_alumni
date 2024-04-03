"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { geo, logo } from "@/public/assets";

interface Props {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  occupation: string;
  location: string;
  personType: string;
}

const AlumnusCard = ({
  id,
  name,
  username,
  imgUrl,
  occupation,
  location,
}: Props) => {
  const router = useRouter();

  return (
    <div className="rounded-xl w-full text-center bg-white border-b-2 border-black shadow-md overflow-hidden">
      <Image
        src={imgUrl || logo}
        onError={(e) => {
          e.currentTarget.src = "assets/logo.jpeg";
          e.currentTarget.onerror = null;
        }}
        height={200}
        width={200}
        alt="Profile image"
        className="w-full h-[180px] object-fit object-center hover:opacity-80"
      />

      <div className="mt-4 sm:mt-1">
        <h4 className="text-xl sm:text-lg font-semibold text-slate-500">
          {name}
        </h4>
        <p className="text-md sm:text-sm text-gray-600">{occupation}</p>
        <div className="flex items-center justify-center space-x-1">
          <Image src={geo} alt="location icon" height={10} width={10} />
          <p className="text-sm text-slate-400">{location}</p>
        </div>
        <p className="text-sm text-slate-200">@{username}</p>
      </div>

      <Button
        className="view_btn mt-2"
        onClick={() => router.push(`/profile/${id}`)}
      >
        View
      </Button>
    </div>
  );
};

export default AlumnusCard;

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
    <div className="alumnus_card">
      <Image
        src={imgUrl || logo}
        onError={(e) => {
          e.currentTarget.src = "assets/logo.jpeg";
          e.currentTarget.onerror = null;
        }}
        height={160}
        width={160}
        alt="Profile image"
        className="rounded-full h-36 w-36 object-fill mx-auto"
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

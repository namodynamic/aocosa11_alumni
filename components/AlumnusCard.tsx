"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { geo } from "@/public/assets";

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
    <section className="alumnus_card">
      <div className="relative h-36 w-36 mx-auto mb-4">
        <Image
          src={imgUrl}
          onError={(e) => {
            const imgElement = e.currentTarget as HTMLImageElement;
            imgElement.style.display = "none";
          }}
          layout="fill"
          alt="Profile image"
          className="rounded-full object-fill"
        />
      </div>

      <div className="text-center">
        <h4 className="text-xl font-semibold text-slate-500">{name}</h4>
        <p className="text-md text-gray-600">{occupation}</p>
        <div className="flex justify-center space-x-1">
          <Image src={geo} alt="location icon" height={16} width={16} />
          <p className="text-sm text-slate-400">{location}</p>
        </div>
        <p className="text-sm text-slate-200">@{username}</p>
      </div>

      <Button
        className="view_btn"
        onClick={() => router.push(`/profile/${id}`)}
      >
        View
      </Button>
    </section>
  );
};

export default AlumnusCard;

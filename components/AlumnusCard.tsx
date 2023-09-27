"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  occupation: string;
  personType: string;
}

const AlumnusCard = ({ id, name, username, imgUrl,occupation }: Props) => {
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
          objectFit="cover"
        alt="Profile image"
        className="rounded-full"
      />
     </div>

      <div className="text-center">
        <h4 className="text-xl font-semibold text-slate-500">{name}</h4>
        <p className="text-md text-gray-600">{occupation}</p>
        <p className="text-sm text-slate-300">@{username}</p>
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

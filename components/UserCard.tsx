"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  personType: string;
}

const UserCard = ({ id, name, username, imgUrl }: Props) => {
  const router = useRouter();

  return (
    <section className="padding-x flex glassmorphism flex-1 flex-col relative w-full">
      <div className="">
        </div>
        <Image src={imgUrl} height={60} width={60} alt="Profile image" className="rounded-xl" />

        <div className="mt-5 text-center text-ellipsis flex-col">
          <h4 className="text-xl text-slate-500">{name}</h4>
          <p className="text-sm text-slate-400">@{username}</p>
      </div>

      <Button
        className="h-auto min-w-[74px] rounded-lg bg-slate-400 text-[12px] !important"
        onClick={() => router.push(`/profile/${id}`)}
      >
        View
      </Button>
    </section>
  );
};

export default UserCard;

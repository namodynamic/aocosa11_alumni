"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { edit } from "@/public/assets";
import { Button } from "./ui/button";

interface Props {
  accountId: string;
  authUserId: string;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
  location: string;
  occupation: string;
  birthday: Date;
  type?: "User" | "Community";
}

const ProfileHeader = ({
  accountId,
  authUserId,
  name,
  username,
  imgUrl,
  bio,
  location,
  occupation,
  birthday,
  type,
}: Props) => {
  const router = useRouter();
  const handleEditClick = () => {
    router.push("/profile/edit");
  };

  const formattedBirthday = birthday
    ? new Intl.DateTimeFormat("en-US", {
        day: "numeric",
        month: "short",
      }).format(new Date(birthday))
    : "No birthday available";

  return (
    <div className="flex flex-col text-white bg-cover relative justify-start w-full bg-black/80 p-6 rounded-lg shadow-lg ">
      <Button
        onClick={handleEditClick}
        className="self-end flex items-center space-x-1 text-gray-500 "
      >
        <Image
          src={edit}
          alt="edit icon"
          width={18}
          height={18}
          className="object-contain mr-2 transform hover:scale-105 cursor-pointer"
        />
        Edit Profile
      </Button>
      <div className="flex items-center gap-8">
        <div className="relative overflow-hidden rounded-xl">
          <Image
            src={imgUrl}
            alt="Profile picture"
            height={400}
            width={200}
            className="object-fill"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-white">
            <span className="text-gray-500"> Name:</span> {name}
          </h2>
          <p className="text-base font-medium">
            <span className="text-gray-500">Username:</span> @{username}
          </p>
          <p className="text-base-medium font-medium">
            <span className="text-gray-500">Location: </span>
            {location}
          </p>
          <p className="text-base-medium font-medium">
            <span className="text-gray-500">Birthday:</span> {formattedBirthday}
          </p>
          <p className="text-base-medium font-medium">
            <span className="text-gray-500">Occupation:</span> {occupation}
          </p>
        </div>
      </div>

      <p className="mt-6 text-base text-white">{bio}</p>
    </div>
  );
};

export default ProfileHeader;

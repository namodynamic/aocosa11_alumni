"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { edit } from "@/public/assets";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaLinkedin, FaFacebook  } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";



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
    <div className="wrapper">
      <div className="space-y-2">
        <h1 className="text-4xl flex flex-col font-extrabold tracking-tighter sm:text-5xl">
          {name}
        </h1>
      </div>

      <div className=" grid mt-16 grid-cols-1 items-center md:grid-cols-2">
        <div className="row-start-1 items-center max-w-md md:col-start-1 md:row-end-3">
          <Image
            src={imgUrl}
            alt="Profile picture"
            height={400}
            width={400}
            className="w-full max-w-md h-[600px] rounded-xl object-center"
          />

          <Button
            onClick={handleEditClick}
            className={`${
              accountId === authUserId
                ? "justify-end items-center mt-4 mb-4 space-x-1 border text-black"
                : "hidden"
            }`}
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
        </div>

        <div className=" max-w-3xl mt-4 grid gap-4">
          <div className="grid gap-1">
            <h2 className="text-lg font-semibold">Bio</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{bio}</p>
          </div>
          <div className="grid gap-1">
            <h2 className="text-lg font-semibold">Occupation</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {occupation}
            </p>
          </div>
          <div className="grid gap-1">
            <h2 className="text-lg font-semibold">Location</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {location}
            </p>
          </div>
          <div className="grid gap-1">
            <h2 className="text-lg font-semibold">Birthday</h2>
            <p className="list-disc list-inside text-sm grid gap-1">
              {formattedBirthday}
            </p>
          </div>
          <div className="grid gap-1">
            <h2 className="text-lg font-semibold">Username</h2>
            <p className="list-disc list-inside text-sm grid gap-1">
              @{username}
            </p>
          </div>

          <div className="flex flex-col gap-1 min-[400px]:flex-row">
            <Link className="social-link " href="#">
              <FaLinkedin />
              LinkedIn
            </Link>
            <Link className="social-link" href="#">
              <FaFacebook />
              Facebook
            </Link>
            <Link className="social-link" href="#">
              <FaXTwitter />
              Twitter
            </Link>
            <Link className="social-link" href="#">
              <FaInstagram />
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;

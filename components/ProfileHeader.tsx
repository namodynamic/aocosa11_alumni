import Image from "next/image";

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
  const formattedBirthday = birthday.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });
  return (
    <div className="flex flex-col relative justify-start w-full bg-white p-6 rounded-lg shadow-lg ">
      <div className="flex items-center gap-8">
        <div className="relative h-40 w-40 rounded-none overflow-hidden">
          <Image
            src={imgUrl}
            alt="Profile image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex items-items-start flex-col">
          <h2 className="text-left text-2xl font-bold text-black">
            <span className="text-slate-400"> Name:</span> {name}
          </h2>
          <p className="text-base font-medium">
            <span className="text-slate-400">Username:</span> @{username}
          </p>
          <p className="text-base-medium font-medium">
            <span className="text-slate-400">Location: </span>
            {location}
          </p>
          <p className="text-base-medium font-medium">
            <span className="text-slate-400">Birthday:</span>{" "}
            {formattedBirthday}
          </p>
          <p className="text-base-medium font-medium">
            <span className="text-slate-400">Occupation:</span> {occupation}
          </p>
        </div>
      </div>

      <p className="mt-6 text-base text-slate-600">{bio}</p>

      <div className="mt-8 h-px bg-slate-100" />
    </div>
  );
};

export default ProfileHeader;

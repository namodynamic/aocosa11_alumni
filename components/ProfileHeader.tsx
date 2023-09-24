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
    <div className="flex w-full flex-col justify-start glassmorphism">
      <div className="flex items-center gap-8">
        <div className="relative h-40 w-40">
          <Image
            src={imgUrl}
            alt="Profile image"
            fill
            className=" object-cover"
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <h2 className="text-left font-bold text-black">
              <span className="text-slate-400"> Name:</span> {name}
            </h2>
            <p className="text-lg font-medium">
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
      </div>

      {/*ToDo: Community */}

      <p className="mt-6 max-w-lg text-base-regular text-light-2">{bio}</p>

      <div className="mt-12 h-0.5 w-full bg-dark-3" />
    </div>
  );
};

export default ProfileHeader;

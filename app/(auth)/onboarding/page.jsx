import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";
import AccountProfile from "@/components/AccountProfile";
import { fetchAlumnus } from "@/lib/actions/alumnus.actions";

const page = async () => {
  const user = await currentUser();
  if (!user) return null;

  const alumnusInfo = await fetchAlumnus(user.id);
  if (alumnusInfo?.onboarded) redirect('/')

  const alumnusData = {
    id: user?.id,
    objectId: alumnusInfo?._id,
    username: alumnusInfo ? alumnusInfo?.username : user?.username,
    name: alumnusInfo ? alumnusInfo?.name : user?.firstName || "",
    bio: alumnusInfo ? alumnusInfo?.bio : "",
    occupation: alumnusInfo ? alumnusInfo?.occupation : "",
    location: alumnusInfo ? alumnusInfo?.location : "",
    birthday: alumnusInfo ? alumnusInfo?.birthday : "",
    linkedin: alumnusInfo ? alumnusInfo?.linkedin : "",
    twitter: alumnusInfo ? alumnusInfo?.twitter : "",
    facebook: alumnusInfo ? alumnusInfo?.facebook : "",
    instagram: alumnusInfo ? alumnusInfo?.instagram : "",
    image: alumnusInfo ? alumnusInfo?.image : user?.imageUrl,
  };

  return (
    <section className="wrapper sm:mt-20 flex justify-start  flex-col">
      <h1 className="text-3xl"> Onboarding</h1>
      <p className="mt-3 text-base maroon_gradient">
        Complete your profile now to be fully registered
      </p>

      <div className="mt-10 mb-10">
        <AccountProfile user={alumnusData} btnTitle="Continue" />
      </div>
    </section>
  );
};

export default page;

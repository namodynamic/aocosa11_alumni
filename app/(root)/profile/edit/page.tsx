import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";
import AccountProfile from "@/components/AccountProfile";
import { fetchAlumnus } from "@/lib/actions/alumnus.actions";

const page = async () => {
  const user = await currentUser();
  if (!user) return null;

  const alumnusInfo = await fetchAlumnus(user.id);
  if (!alumnusInfo?.onboarded) redirect('/onboarding')

  const alumnusData = {
    id: user?.id,
    objectId: alumnusInfo?._id,
    username: alumnusInfo ? alumnusInfo?.username : user?.username,
    name: alumnusInfo ? alumnusInfo?.name : user?.firstName || "",
    bio: alumnusInfo ? alumnusInfo?.bio : "",
    occupation: alumnusInfo ? alumnusInfo?.occupation : "",
    location: alumnusInfo ? alumnusInfo?.location : "",
    birthday: alumnusInfo ? alumnusInfo?.birthday : "",
    image: alumnusInfo ? alumnusInfo?.image : user?.imageUrl,
  };

  return (
    <main className="mx-auto flex justify-start py-20 px-10 max-w-3xl flex-col">
      <h1 className="text-lg"> Edit Profile</h1>
      <p className="mt-3 text-base maroon_gradient">
        Make any changes to your profile
      </p>

      <section className="mt-10 p-10 glassmorphism">
        <AccountProfile user={alumnusData} btnTitle="Continue" />
      </section>
    </main>
  );
};

export default page;



import ProfileHeader from "@/components/ProfileHeader";
import { fetchAlumnus } from "@/lib/actions/alumnus.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Page = async ({ params }: { params: { id: string } }) => {
  try {
    const user = await currentUser();
    if (!user) return null;

    const userInfo = await fetchAlumnus(params.id);

    if (!userInfo?.onboarded) redirect("/onboarding");
    return (
      <section className="padding-x py-40 mx-auto">
        <div className="">
          <ProfileHeader
            accountId={userInfo.id}
            authUserId={user.id}
            name={userInfo.name}
            username={userInfo.username}
            imgUrl={userInfo.image}
            bio={userInfo.bio}
            location={userInfo.location}
            occupation={userInfo.occupation}
            birthday={userInfo.birthday}
          />
        </div>
      </section>
    );
  } catch (error) {
    console.error(error);

    return (
      <div className="padding-x min-h-screen py-40 mx-auto text-center">
        Error: An error occurred while fetching user data.
      </div>
    );
  }
};

export default Page;

import ProfileHeader from "@/components/ProfileHeader";
import { fetchAlumnus } from "@/lib/actions/alumnus.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Page = async ({ params }: { params: { id: string } }) => {
  try {
    const user = await currentUser();
    if (!user) return null;

    const userInfo = await fetchAlumnus(params.id);

    // if (!userInfo?.onboarded) redirect("/onboarding");
    return (
      <section className="w-full">
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
          linkedin={userInfo?.linkedin}
          twitter={userInfo?.twitter}
          facebook={userInfo?.facebook}
          instagram={userInfo?.instagram}
        />
      </section>
    );
  } catch (error) {
    console.error(error);

    return (
      <div className="padding-x min-h-screen mx-auto text-center">
        Error: An error occurred while fetching user data.
      </div>
    );
  }
};

export default Page;

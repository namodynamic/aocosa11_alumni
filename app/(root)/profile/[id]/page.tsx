import ProfileHeader from "@/components/ProfileHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchAlumnus } from "@/lib/actions/alumnus.actions";
// import { profileTabs } from "@/constants";

import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

const Page = async ({ params }: { params: { id: string } }) => {
  const user = await currentUser();
  if (!user) return null;

    const userInfo = await fetchAlumnus(params.id);
    
    

  if (!userInfo?.onboarded) redirect("/onboarding");
  return (
    <section>
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


    </section>
  );
};

export default Page;

import ProfileHeader from "@/components/ProfileHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchAlumnus } from "@/lib/actions/alumnus.actions";



import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
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
  
         {/* Tabs Section */}
        <div className="mt-8">
            {/* <Tabs>
              <TabsList>
                <TabsTrigger>Tab 1</TabsTrigger>
                <TabsTrigger>Tab 2</TabsTrigger>
                <TabsTrigger>Tab 3</TabsTrigger>
              </TabsList>
              <TabsContent> */}
                <div className="py-4">
                  <h2 className="text-2xl font-bold mb-4">Tab 1 Content</h2>
                  <p>This is the content for Tab 1.</p>
                </div>
                {/* Add content for Tab 2 and Tab 3 as needed */}
              {/* </TabsContent>
            </Tabs> */}
          </div>
  
  
      </section>
    );
  } catch (error) {
    console.error(error);
    // Provide an error message or redirect as needed
    return <div className="padding-x py-40 mx-auto text-center">Error: An error occurred while fetching user data.</div>;

  }

 
    
    

};

export default Page;
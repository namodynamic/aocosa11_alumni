import AccountProfile from "@/components/AccountProfile";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/alumni.actions";


const page = async () => {
  const user = await currentUser();
  if (!user) return null;

  // if (userInfo?.onboarded) redirect('/')

  // const userInfo = await fetchUser(user.id);
  // if (userInfo?.onboarded) redirect('/')

//   const userData = {
//     id: user?.id,
//     objectId: userInfo?._id,
//     username: userInfo ? userInfo?.username : user?.username,
//     name: userInfo ? userInfo?.name : user?.firstName || "",
//     bio: userInfo ? userInfo?.bio : "",
//     image: userInfo ? userInfo?.image : user?.imageUrl,
// }

  return (
    <main className='mx-auto flex justify-start py-20 px-10 max-w-3xl flex-col'>
     <h1> Onboarding</h1>
      <p className='mt-3 text-regular'>Complete your profile now to be fully registered</p>

      <section className="mt-10 p-10 glassmorphism">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  )
}

export default page
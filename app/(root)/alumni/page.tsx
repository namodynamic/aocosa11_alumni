import Pagination from "@/components/Pagination";
import Searchbar from "@/components/SearchBar";
import AlumnusCard from "@/components/AlumnusCard";
import { fetchAlumni } from "@/lib/actions/alumnus.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  // const user = await currentUser();
  // if (!user) return null;
  // const userInfo = await fetchAlumnus(user.id);

  // if (!userInfo?.onboarded) redirect("/onboarding");

  // Fetch Alumni
  const result = await fetchAlumni({
    userId: "",
    searchString: searchParams?.q,
    pageNumber: searchParams?.page ? +searchParams.page : 1,
    pageSize: 16,
  });

  const alumniData = result.users;

  return (
    <section className="wrapper sm:mt-5">
      <div className="flex flex-col max-sm:flex-col-reverse justify-start relative gap-5">
        <div className="flex max-md:flex-col gap-5 justify-between">
          <div className="flex flex-col justify-start relative gap-5">
            <h2 className="text-4xl font-bold ">Our Alumni</h2>
            <p className="lg:max-w-lg mt-2 font-inter text-slate-950">
              Our alumni are the heart and soul of our association. They have
              made significant contributions to our community and continue to
              inspire us with their achievements.
            </p>
          </div>

          <div className="bg-green-700 max-md:hidden rounded-md text-center p-2 block">
            <p className="text-lg font-semibold text-white">
              Total Registered Alumni
            </p>
            <div className="flex items-center justify-center flex-col mt-2">
              <div className="w-20 h-20 flex items-center justify-center rounded-full shadow-2xl bg-maroon">
                <p className="text-3xl text-yellow-300 font-bold">
                  {result.totalUsersCount}
                </p>
              </div>
            </div>
          </div>
        </div>

        <Searchbar routeType="alumni" />
      </div>

      <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
        {alumniData.length === 0 ? (
          <p className="w-full text-center text-base text-slate-500">
            Alumnus not found in our database!
          </p>
        ) : (
          <>
            {alumniData.map((person) => (
              <div key={person.id} className="">
                <AlumnusCard
                  key={person.id}
                  id={person.id}
                  name={person.name}
                  username={person.username}
                  occupation={person.occupation}
                  location={person.location}
                  imgUrl={person.image}
                  personType="User"
                />
              </div>
            ))}
          </>
        )}
      </div>

      <Pagination
        path="alumni"
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={result.isNext}
      />
    </section>
  );
};

export default page;

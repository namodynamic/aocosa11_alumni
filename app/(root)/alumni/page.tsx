import Pagination from "@/components/Pagination";
import Searchbar from "@/components/SearchBar";
import AlumnusCard from "@/components/AlumnusCard";
import { fetchAlumnus, fetchAlumni } from "@/lib/actions/alumnus.actions";
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
    pageSize: 24,
  });

  const alumniData = result.users;

  return (
    <section className="padding-x">
      <div className="flex flex-col justify-start">
        <div className="flex flex-col justify-start relative gap-5">
          <h2 className="text-4xl font-bold ">
            Our <span className="maroon_gradient">Alumni</span>
          </h2>
          <p className="lg:max-w-lg mt-2 font-inter text-slate-950">
            Our alumni are the heart and soul of our association. They have made
            significant contributions to our community and continue to inspire
            us with their achievements.
          </p>
        </div>

        <div className="relative text-center mt-10 md:place-self-end">
          <div className="bg-green-700 p-4 block">
            <p className="text-lg font-semibold text-white">
              Total Registered Alumni
            </p>
            <div className="flex items-center justify-center flex-col mt-2">
              <div className="w-20 h-20 flex items-center justify-center rounded-full shadow-2xl bg-yellow-300">
                <p className="text-3xl font-bold">{result.totalUsersCount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 relative ">
        <Searchbar routeType="alumni" />

        <div className="mt-16 relative grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-2 gap-10">
          {alumniData.length === 0 ? (
            <p className="w-full text-center text-base text-slate-500">
              Alumnus not found in our database!
            </p>
          ) : (
            <>
              {alumniData.map((person) => (
                <div key={person.id} className="gap-8">
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
      </div>
    </section>
  );
};

export default page;

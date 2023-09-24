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
    pageSize: 25,
  });

  const alumniData = result.users; 

  return (
    <section className="padding-x py-40 max-sm:mt-12">
      <div className="flex flex-col justify-start relative gap-5">
        <h2 className="text-4xl font-bold ">
          Our <span className="maroon_gradient">Alumni</span>
        </h2>
        <p className="lg:max-w-lg mt-2 font-inter text-slate-950">
          Our alumni are the heart and soul of our association. They have made
          significant contributions to our community and continue to inspire us
          with their achievements.
        </p>
      </div>

      <div className="mt-16 relative ">
       
        <Searchbar routeType="alumni" />

        <div className="mt-16 relative grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 gap-10">
          {alumniData.length === 0 ? (
            <p className="text-center text-base text-slate-500">Alumnus not found!</p>
          ) : (
            <>
              {alumniData.map((person) => (
                <AlumnusCard
                  key={person.id}
                  id={person.id}
                  name={person.name}
                  username={person.username}
                  imgUrl={person.image}
                  personType="User"
                />
              ))}
            </>
          )}
        </div>

        <Pagination
          path="alumni"
          pageNumber={searchParams?.page ? +searchParams.page : 2}
          isNext={result.isNext}
        />
      </div>
    </section>
  );
};

export default page;

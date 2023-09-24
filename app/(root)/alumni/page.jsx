import AlumniList from "@/components/AlumniList"
import Search from "@/components/Search"



const page = () => {
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

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 gap-10">
        {/* <AlumniList /> */}
        <Search/>
      </div>
    </section>
  )
}

export default page
import ExcosCard from "../../../components/ExcosCard";
import { excos } from "../../../constants";

const page = () => {
  return (
    <section className="wrapper sm:mt-8">
      <div className="flex flex-col justify-start relative gap-5">
        <h2 className="sm:text-5xl text-3xl font-bold ">
          Meet Our Executives 
        </h2>
        <p className="lg:max-w-lg mt-2 font-inter text-slate-950">
          The association is led by a dynamic and versatile team steering the
          affairs of the association. The team will serve a two years term from
          December 2023-December 2025 as ambassadors to carry out and deliver
          the visions of the association.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 gap-10">
        {excos.map((excos) => (
          <ExcosCard key={excos.name} {...excos} />
        ))}
      </div>
    </section>
  );
};

export default page;

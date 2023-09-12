import { ExcosCard } from ".";
import { excos } from "@/constants";

const Excos = () => {
  return (
    <section id="excos" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-bold ">
          Meet <span className="text-maroon">Our</span> Excos
        </h2>
        <p className="lg:max-w-lg mt-2 font-inter text-slate-950">
          The following are our excos
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 gap-14">
        {excos.map((excos) => (
          <ExcosCard key={excos.name} {...excos} />
        ))}
      </div>
    </section>
  );
};

export default Excos;

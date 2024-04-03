import Link from "next/link";
import Image from "next/image";
import { fetchAlumni } from "@/lib/actions/alumnus.actions";

const links = [
  { name: "Meet our leadership", href: "/executives" },
  { name: "Alumni directory", href: "/alumni" },
  { name: "Our values", href: "#values" },
  { name: "Grow with us", href: "/registration" },
];
const stats = [
  { name: "Since graduation", value: "13yrs+" },
  { name: "Intra-marriages recorded", value: "4+" },
  { name: "Bi-annual Reunion parties organized", value: "4" },
];

const Hero = async ({ searchParams }) => {
  const result = await fetchAlumni({
    userId: "",
    searchString: searchParams?.q,
    pageNumber: searchParams?.page ? +searchParams.page : 1,
    pageSize: 16,
  });

  return (
    <section className="relative -top-12 isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1462536943532-57a629f6cc60?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhpZ2glMjBzY2hvb2wlMjByZXVuaW9ufGVufDB8fDB8fHww"
        alt="hero bg"
        className="absolute inset-0 -z-10 h-full w-full opacity-70 object-cover object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            HOW WILL WE FORGE OUR FUTURE?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            The AOCOSA 2005/11 Alumni is a non-profit, a non-religious, a non-
            governmental and a non-political association of old students of
            Adeola Odutola College. We are a group of 2005/11 set who have
            recognized the need to network and foster meaningful connections for
            personal and professional development, while also striving to create
            a positive impact on society.
            <br />
            <br />
            <strong>Together we can make a profound difference!</strong>
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-label={`Navigate to ${link.name}`}
              >
                {link.name} <span aria-hidden="true">&rarr;</span>
              </Link>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  {stat.name}
                </dt>

                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
            <div className="flex flex-col-reverse text-base text-gray-300">
              Registered alumni
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                {" "}
                {result.totalUsersCount}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Hero;

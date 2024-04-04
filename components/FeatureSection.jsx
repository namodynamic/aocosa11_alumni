import {
  LifebuoyIcon,
  LightBulbIcon,
  ArrowTrendingUpIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Networking and Mentorship",
    description:
      "Alumni often serve as valuable resources for current students, offering guidance, advice, and mentorship in various fields. Alumni networks can provide opportunities for students to connect with professionals in their areas of interest, explore career paths, and gain insights into different industries.",
    icon: UsersIcon,
  },
  {
    name: "Supporting School Programs",
    description:
      "Alumni may contribute to fundraising efforts and support various school programs, such as scholarships, extracurricular activities, and academic initiatives. Their financial contributions can help enhance educational opportunities for current students and support the overall mission of the school.",
    icon: LifebuoyIcon,
  },
  {
    name: "Promoting School Spirit and Tradition",
    description:
      "Alumni often maintain strong ties to their alma mater and play a key role in preserving school spirit and tradition. They may attend reunions, homecoming events, and other alumni gatherings, helping to foster a sense of community and pride among current students and fellow graduates.",
    icon: LightBulbIcon,
  },
  {
    name: "Professional Development and Career Advancement",
    description:
      "Alumni networks can be valuable resources for professional development and career advancement. Alumni may share job opportunities, provide referrals, and offer support to recent graduates as they navigate the transition from high school to college or the workforce.",
    icon: ArrowTrendingUpIcon,
  },
];

const FeatureSection = () => {
  return (
    <div className=" py-24 isolate relative sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Things you need to know about high school alumni
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            High school alumni play a significant role in enriching the
            educational experience for current students, fostering a sense of
            community and tradition, and contributing to the long-term success
            of their alma mater.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#44143d]">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};
export default FeatureSection;

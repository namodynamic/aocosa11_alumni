import HeroCarousel from "@/components/HeroCarousel";

const Section1 = () => {
  return (
    <section
      id="values"
      className="relative isolate overflow-hidden bg-gray-50 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className=" text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
                Welcome to AOCOSA 05/11 alumni!
              </h1>
              <p className="mt-10 text-xl leading-8 text-gray-700">
                At AOCOSA 05/11, we are proud to serve as a vital link between
                members of Adeola Odutola College 05/11 set . Established with
                the aim of fostering lifelong connections and supporting the
                ongoing success of our alma mater, AOCOSA plays a pivotal role
                in enriching the lives of our alumni and contributing to the
                growth and development of our beloved institution.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-6 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <HeroCarousel />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                As alumni of Adeola Odutola College, we are united by a shared
                sense of pride, tradition, and commitment to excellence. Through
                AOCOSA 05/11, we come together to celebrate our achievements,
                preserve our heritage, and make a positive impact on the world
                around us. Here are some key functions and roles that AOCOSA
                05/11 fulfills:
              </p>
              <ul role="list" className="mt-8 space-y-4 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <h2 className="text-xl font-semibold text-black mb-4">
                      Networking and Mentorship
                    </h2>
                    AOCOSA 05/11s provides a platform for alumni to connect,
                    network, and engage with one another. Whether it's through
                    social events, professional development workshops, or online
                    networking platforms, we facilitate meaningful connections
                    and foster mentorship opportunities among alumni from
                    diverse backgrounds and fields of expertise.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <h2 className="text-xl font-semibold text-black mb-4">
                      Supporting the School Community
                    </h2>
                    As proud ambassadors of Adeola Odutola College, AOCOSA 05/11
                    actively supports the academic, cultural, and
                    extracurricular activities of our alma mater. From
                    volunteering as guest speakers, judges, or mentors to
                    providing financial assistance through scholarships and
                    grants, we are dedicated to nurturing the next generation of
                    leaders and scholars at our school.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <h2 className="text-xl font-semibold text-black mb-4">
                      Celebrating Tradition and Heritage
                    </h2>
                    AOCOSA 05/11 plays a central role in preserving the rich
                    heritage and traditions of Adeola Odutola College. Through
                    alumni reunions, homecoming events, and special
                    commemorations, we honor our shared history, celebrate our
                    achievements, and strengthen the bonds of fellowship that
                    define the Adeola Odutola College experience.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <h2 className="text-xl font-semibold text-black mb-4">
                      Advocating for Alumni Interests
                    </h2>
                    AOCOSA 05/11 serves as a collective voice for alumni
                    interests and concerns within the broader Adeola Odutola
                    College community. By engaging with school administrators,
                    board members, and other stakeholders, we advocate for
                    alumni priorities and contribute to the ongoing development
                    and enhancement of our alma mater.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <h2 className="text-xl font-semibold text-black mb-4">
                      Giving Back and Paying It Forward
                    </h2>
                    At AOCOSA 05/11, we believe in the importance of giving back
                    and paying it forward. Through philanthropic initiatives,
                    volunteer service projects, and fundraising efforts, we
                    support initiatives that benefit our school, our community,
                    and society at large. Whether it's through donations,
                    volunteerism, or advocacy, every contribution from AOCOSA
                    05/11 alumni helps make a difference in the lives of others.
                  </span>
                </li>
              </ul>

              <p className="mt-6">
                As members of AOCOSA 05/11, we are part of a proud legacy that
                spans generations. Together, we continue to uphold the values of
                excellence, integrity, and service that define the Adeola
                Odutola College experience. We invite you to join us in
                celebrating our shared heritage, forging new connections, and
                making a lasting impact as proud alumni of Adeola Odutola
                College.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section1;

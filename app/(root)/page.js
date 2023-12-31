import Link from "next/link";
import Hero from "../../components/Hero";

export default function Home() {
  return (
    <main className="relative py-20">
      <div className="hero-bg w-full bg-cover bg-center">
        <Hero />
      </div>

      <section className="container mx-auto py-12">
        <div className="padding-x grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
            <h2 className="text-xl font-semibold maroon_gradient mb-4">
              Welcome to AOCOSA Alumni!
            </h2>
            <p className="text-gray-700">
              We are a community of graduates from Adeola Odutola College,
              committed to fostering connections, personal development, and
              positive societal impact.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
            <h2 className="text-xl font-semibold text-black mb-4">
              Stay Connected
            </h2>
            <p className="text-gray-700">
              Join our alumni network to stay in touch with old friends,
              mentors, and classmates. Share your achievements, updates, and
              memories.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
            <h2 className="text-xl font-semibold text-black mb-4">
              Get Involved
            </h2>
            <p className="text-gray-700">
              Engage in community projects, mentorship programs, and events that
              make a difference. Your participation matters!
            </p>
          </div>
        </div>
      </section>

      <section className="container news_bg bg-cover mx-auto py-12">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Latest News and Updates
          </h2>
          <p className="text-white/60">
            Stay informed about the latest happenings, events, and achievements
            within our alumni community.
          </p>
        </div>

        <div className="padding-x grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* News Card 1 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
            <h3 className="text-lg font-bold text-black mb-2">
              Alumni Reunion Event
            </h3>
            <p className="text-gray-700">
              We're excited to announce our upcoming alumni reunion event! Mark
              your calendars and join us for a memorable day of reminiscing and
              reconnecting.
            </p>
          </div>

          {/* News Card 2 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
            <h3 className="text-lg font-bold text-black mb-2">
              New Alumni Mentoring Program
            </h3>
            <p className="text-gray-700">
              Introducing our new mentoring program for alumni. Help guide the
              next generation of graduates and make a positive impact on their
              lives.
            </p>
          </div>

          {/* News Card 3 */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
            <h3 className="text-lg font-bold text-black mb-2">
              Community Service Project
            </h3>
            <p className="text-gray-700">
              Join us in our latest community service project aimed at improving
              the lives of underprivileged children in our area. Together, we
              can make a difference.
            </p>
          </div>
        </div>
      </section>

      <section className="container section_bg_img bg-cover bg-center mt-10 mx-auto">
        <div className="flex w-full items-center flex-col mt-8">
          <h1 className="text-4xl px-2 mt-16 mb-6 font-extrabold text-maroon leading-[1.15]">
            OUR FUTURE STARTS HERE.
          </h1>
          <p className="sub_head_text padding-x">
            In our vision to build a strong group, no member is left behind and
            we hope to carry everyone along and make a stronger unit in the long
            run. One person at a time, we are sure to make the impact we desire
            to see.
          </p>

          <div className="bg-yellow-400 py-2 px-5 transition-transform duration-300 ease-in-out hover:scale-105 font-bold text-sm rounded-full text-white mb-6">
            <Link href="/registration">GROW WITH US</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

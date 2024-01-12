const page = () => {
  return (
    <section className="wrapper xl:flex-row sm:mt-10 flex flex-col gap-10">
      <div className="flex-1 flex-col glassmorphism justify-start">
        <h1 className="text-4xl font-bold ">
          Pay your monthly due into the account below:
        </h1>
        <h2 className="mt-10 font-bold">
          Account Name:{" "}
          <span className="text-xl">DAMILARE OLUWASEUN BAMGBOPA</span>
          <br />
          Account No: <span className="text-xl">0814394652</span>
          <br />
          Bank: <span className="text-xl">ACCESS BANK PLC</span>
        </h2>
        <p className="mt-10">
          <span className="text-red-600">NOTE</span>: In payment description
          endeavour to add full details of Alumni member and the month being
          paid for.
        </p>
      </div>
      <div className="justify-end glassmorphism">
        <p className="lg:max-w-lg mt-2 font-inter text-black">
          Membership Dues are necessary as it proves you are a true Alumnus of
          AOCOSA 05/11 set and have the interests of the association at heart.
          It also going to Help the achievement of our periodic and future
          projects projects.
        </p>
      </div>
    </section>
  );
};

export default page;

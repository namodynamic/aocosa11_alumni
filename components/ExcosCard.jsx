import Image from "next/image";

const ExcosCard = ({ name, office, image }) => {
  return (
    <div className="rounded-xl bg-white border-b-2 border-black shadow-md overflow-hidden">
      <Image
        src={image}
        alt="exco"
        className="w-full h-[360px] object-fit object-center hover:opacity-80"
      />
      <div className="text-center flex flex-col">
        <p className="mt-4 text-sm font-medium text-gray-700">{name}</p>
        <h3 className="mt-1 text-lg font-medium text-gray-900">{office}</h3>
      </div>
    </div>
  );
};

export default ExcosCard;

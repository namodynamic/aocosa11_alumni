import Image from "next/image"

const ExcosCard = ({name,office,image}) => {
  return (
    <div className="exco_card">
      <Image src={image} alt="exco" className="w-[280px] h-[280px] rounded-xl mx-auto" />
      <div className="mt-5 text-center flex flex-col">
        <p className="text-2xl leading-normal text-slate-500 font-inter">{ name}</p>
      <h3 className="text-xl leading-normal font-bold">{office}</h3>
      </div>
    </div>
  )
}

export default ExcosCard
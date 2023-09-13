import Image from "next/image"

const ExcosCard = ({name,office,image}) => {
  return (
    <div className="padding-x flex flex-1 flex-col relative w-full">
      <Image src={image} alt="exco" className="w-[280px] h-[280px]" />
      <div className="mt-5 flex flex-col">
        <p className="text-2xl leading-normal sm:text-center font-inter">{ name}</p>
      <h3 className="text-xl leading-normal sm:text-center font-bold">{office}</h3>
      </div>
    </div>
  )
}

export default ExcosCard
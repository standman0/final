import Image, { StaticImageData } from "next/image";

interface TeamMember {
  src: StaticImageData;
  comment: string;
  name: string;
  job: string;
  index?: number;
}

const TeamMemberCard: React.FC<TeamMember> = ({
  src,
  comment,
  name,
  job,
  index
}) => {
  const colourGroups = [
    {bg: "#B7D784", text: "#333311"},
    {bg: "#E2E2E2", text: "#222222"},
    {bg: "#051070", text: "#FFFFFF"},
  ];
  
  const colors = colourGroups[(index || 0) % colourGroups.length];
  
  return (
    <>
      <div
        className={
          "lg:w-1/4 w-full  px-7 lg:animate-marquee overflow-scroll no-scrollbar shrink-0 grow-0 flex flex-col relative pt-8 md:pt-10 h-64 lg:h-96 rounded-2xl " +
          (colors?.bg ? `bg-[${colors?.bg}] ` : "bg-homeash ") +
          (colors?.bg ? `text-[${colors?.text}] ` :  "text-[#758089]")
        }
      >
        <p className="font-medium text-sm md:text-base lg:text-sm">{comment}</p>
        <p className="absolute bottom-12 right-[7rem] text-base">{name}</p>
        <p className="absolute bottom-8 right-[7rem] text-sm">{job}</p>
        <div className="absolute bottom-5 right-7 bg-black rounded-full">
          <Image
            src={src}
            alt={name}
            objectFit="cover"
            className="rounded-full object-cover border border-homeblue w-[4rem] h-[4rem]"
          />
        </div>
        <span className="bg-[#B7D784] text-[#333311]" ></span>
      <span className="bg-[#E2E2E2] text-[#222222]" ></span>
      <span className="bg-[#051070] text-[#FFFFFF]" ></span>
      </div>
    </>
  );
};

export default TeamMemberCard;

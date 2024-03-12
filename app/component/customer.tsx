import Image, { StaticImageData } from 'next/image';

interface TeamMember {
  src:  StaticImageData;
  comment: string;
  name: string;
  job:string;
}

const TeamMemberCard: React.FC<TeamMember> = ({ src, comment, name, job}) => {
  return (
    <>
        <div className="lg:w-1/4 w-full  px-7 lg:animate-marquee overflow-scroll no-scrollbar shrink-0 grow-0 flex flex-col relative pt-32 h-96 rounded-2xl bg-homeash">
      <p className="text-center text-lg  font-medium">{comment}</p>
      <p className="absolute bottom-20 right-[7rem] text-lg">{name}</p>
      <p className="absolute bottom-14 right-[7rem] text-sm">{job}</p>
      <div className="w-[5rem] h-[5rem] absolute bottom-8 right-7 bg-black rounded-full">
        <Image
          src={src}
          height={100}
          width={100}
          alt={name}
          objectFit="cover"
          className="rounded-full object-cover border border-homeblue w-[5rem] h-[5rem]"
        />
      </div>
    </div>
      
    </>

  );
};

export default TeamMemberCard;

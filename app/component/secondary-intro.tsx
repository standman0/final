import Ball from "@/public/ball.svg";

interface SecondaryIntro {
  title: string;
  description: string;
}

const SecondaryIntroBox: React.FC<SecondaryIntro> = ({
  title,
  description,
}) => {
  return (
    <div className=" grid justify-items-center text-center w-full md:w-1/3  h-full ">
      <div className="flex flex-col text-left p-5 md:w-full md:pl-8 justify-center">
        <Ball />
        <h1 className="md:text-xl text-2xl pt-7 font-bold text-homeblue ">
          {title}
        </h1>
        <p className="text-gray-500 text-[0.9rem] leading-6">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SecondaryIntroBox;

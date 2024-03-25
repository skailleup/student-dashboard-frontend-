import Image from "next/image";
import Learning from "@/icons/learning";
import Module from "@/icons/module";
import LearningTrack from "@/icons/learning-track.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CircularProgressBar from "@/components/ui/circularprogressbar";

export default function Page() {
  const progress = 40;

  return (
    <div className="w-full p-2 md:p-4">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="bg-primary text-white rounded-md w-full md:w-[60%] h-[20%] px-4 py-2 my-2 md:my-0 md:mr-2">
          <h3 className="text-[22px] tracking-widest">Hello Skailler, Welcome to your Dashboard</h3>
          <p className="text-[14px]">You have learned 40% of your goal this week!</p>
          <p className="text-[14px]">Keep it up and improve your result!</p>
        </div>
        <div className="text-left sm:text-center">
          <Avatar className="w-20 h-20 ml-6">
            <AvatarImage src="./images/abiola.jpg" alt="image of abiola nnamdi" />
            <AvatarFallback>ANM</AvatarFallback>
          </Avatar>
          <p>Abiola Nnamdi Musa</p>
          <p>Student</p>
        </div>
      </div>

      <div className="bg-[#5C58006B] rounded-full mt-4 px-4 sm:px-6 py-2 text-primary mb-8 font-semibold">
        <p>Protect your privacy: Please be careful not to share your personal information with anyone.</p>
      </div>

      <div className="flex flex-wrap justify-between text-center gap-2">
        <div className="bg-[#000E5C47] rounded-md px-0 md:px-8 pt-8 pb-6 flex flex-col items-center w-[320px] sm:w-[23%] md:mb-0 mx-auto sm:mx-0">
          <Learning />
          <p className="font-bold text-[18px] mt-6">Learning Hours</p>
          <p className="text-[14px]">10hrs per week</p>
        </div>
        <div className="bg-[#04ED8D73] rounded-md px-0 md:px-8 pt-8 pb-6 flex flex-col items-center w-[320px] sm:w-[23%] md:mb-0 mx-auto sm:mx-0">
          <Module />
          <p className="font-bold text-[18px] mt-6">Module Assessment</p>
          <p className="text-[14px]">0 Assessment completed</p>
        </div>
        <div className="bg-[#FFA500] rounded-md px-0 md:px-8 py-6 flex flex-col items-center w-[320px] sm:w-[23%] md:mb-0 mx-auto sm:mx-0">
          <CircularProgressBar percent={progress} />
          <p className="font-bold text-[18px] mt-3">Course Progress</p>
          <p className="text-[14px]">UI/UX</p>
        </div>
        <div className="bg-[#008080] rounded-md px-0 md:px-8 pt-8 pb-6 flex flex-col items-center w-[320px] sm:w-[23%] mx-auto sm:mx-0">
          <Image src={LearningTrack} alt="image of learning track" />
          <p className="font-bold text-[18px] mt-6">Learning Track</p>
          <p className="text-[14px]">Design - UI/UX</p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import DataTable, { TableColumn } from "react-data-table-component";
import { useRouter } from "next/navigation";

import Learning from "@/icons/learning";
import Module from "@/icons/module";
import LearningTrack from "@/icons/learning-track.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CircularProgressBar from "@/components/ui/circularprogressbar";
import { CoursesType } from "@/types";
import LoadingSpinner from "@/components/ui/spinner";
import { Calendar } from "@/components/ui/calendar";
import EmptyTask from "@/images/empty-task.svg";

const Courses: CoursesType[] = [
  {
    id: "1",
    courseName: "Project planning",
    startDate: "2021-09-01",
    courseRatings: 4.9,
    courseLevel: "Intermediate",
    tutor: "Busola",
    status: "Yet to commence",
  },
  {
    id: "2",
    courseName: "UI/UX",
    startDate: "2021-09-01",
    courseRatings: 4,
    courseLevel: "Beginner",
    tutor: "John Doe",
    status: "In Progress",
  },
  {
    id: "3",
    courseName: "Software Engineering",
    startDate: "2021-09-01",
    courseRatings: 4,
    courseLevel: "Beginner",
    tutor: "Jane Doe",
    status: "Yet to commence",
  },
];
const progress = 40;

export default function Page() {
  const [isMounted, setIsMounted] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const router = useRouter();

  const columns: TableColumn<CoursesType>[] = [
    {
      name: "Course Name",
      cell: (row) => (
        <div className="flex items-center gap-4">
          <Image src={LearningTrack} alt="image of learning track" />
          <p>{row.courseName}</p>
        </div>
      ),
    },
    {
      name: "Start Date",
      cell: (row) => row.startDate.toString(),
      center: true,
    },
    {
      name: "Course Ratings",
      cell: (row) => row.courseRatings,
      center: true,
    },
    {
      name: "Course Level",
      cell: (row) => row.courseLevel,
    },
    {
      name: "Tutor",
      cell: (row) => row.tutor,
    },
    {
      name: "Status",
      cell: (row) => <div className="p-2 bg-primary-gray rounded-xl text-white">{row.status}</div>,
    },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen w-full p-2 md:p-4">
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

      <div className="flex flex-wrap justify-between text-center gap-2 mb-16">
        <div className="bg-[#000E5C47] rounded-md px-0 md:px-8 pt-8 pb-6 flex flex-col items-center w-[320px] sm:w-[full] md:mb-0 mx-auto">
          <Learning />
          <p className="font-bold text-[18px] mt-6">Learning Hours</p>
          <p className="text-[14px]">10hrs per week</p>
        </div>
        <div className="bg-[#04ED8D73] rounded-md px-0 md:px-8 pt-8 pb-6 flex flex-col items-center w-[320px] sm:w-[full] md:mb-0 mx-auto">
          <Module />
          <p className="font-bold text-[18px] mt-6">Module Assessment</p>
          <p className="text-[14px]">0 Assessment completed</p>
        </div>
        <div className="bg-[#FFA500] rounded-md px-0 md:px-8 py-6 flex flex-col items-center w-[320px] sm:w-[full] md:mb-0 mx-auto">
          <CircularProgressBar percent={progress} />
          <p className="font-bold text-[18px] mt-3">Course Progress</p>
          <p className="text-[14px]">UI/UX</p>
        </div>
        <div className="bg-[#008080] rounded-md px-0 md:px-8 pt-8 pb-6 flex flex-col items-center w-[320px] sm:w-[full] mx-auto">
          <Image src={LearningTrack} alt="image of learning track" />
          <p className="font-bold text-[18px] mt-6">Learning Track</p>
          <p className="text-[14px]">Design - UI/UX</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8 w-full mb-8">
        <div className="w-full">
          <div className="flex justify-between items-center mb-8">
            <p>My Courses</p>

            <p className="border p-2 rounded-xl cursor-pointer" onClick={() => router.push("/dashboard/my-courses")}>
              View All
            </p>
          </div>
          {isMounted ? <DataTable columns={columns} data={Courses} /> : <LoadingSpinner type="secondary" />}
        </div>

        <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
      </div>

      <div className="flex flex-col items-end cursor-pointer">
        <h1 className="mb-4">Task Progress</h1>
        <div>
          <Image src={EmptyTask} alt="image of empty task" onClick={() => router.push("/dashboard/my-task")} />
        </div>
        <p className="mt-4">You currently don’t have any Task</p>
      </div>
    </div>
  );
}

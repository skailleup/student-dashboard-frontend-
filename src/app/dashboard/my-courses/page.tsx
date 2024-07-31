"use client";

import { Search, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Video from "../../../components/ui/video";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import DesignPrinciple from "../../../../public/images/designprinciple.jpg";
import greenMark from "../../../../public/images/greenmark.jpg";
import LineChart from "../../../components/ui/line-chart";
import CourseActivity from "../../../components/ui/course-activity-bar";
import Badge from "../../../../public/images/Badge.jpg";
import Link from "next/link";

export default function Page() {
  return (
    <div className="px-4 md:px-8">
      <div className="relative flex justify-center items-center mb-4">
        <Input
          type="text"
          placeholder="Search"
          className="w-full md:w-[443px] text-lg p-2 px-4 border border-[#F2F2F2] rounded-md focus:outline-none focus:ring"
        />
        <div className="absolute inset-y-0 right-4 md:right-[330px] pl-3 flex items-center">
          <Search className="h-5 w-5 font-bold text-[#000E5C]" />
        </div>
      </div>
      <div className="pr-8 pl-4 py-4 text-[#000E5C]">
        <Tabs defaultValue="ongoing">
          <TabsList className="flex justify-between">
            <p className="font-bold text-[18px] text-[#17181A] mb-4 md:mb-0">My course</p>
            <div className="flex mb-4 md:mb-0">
              <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
              <TabsTrigger value="completed-course">Completed courses</TabsTrigger>
            </div>
          </TabsList>
          <TabsContent value="ongoing">
            <div>
              <div className="grid gap-2 w-full md:flex shadow-md shadow-[#454545] py-2 px-1 mb-4">
                <div className="w-full md:w-[275px] h-[202px] border border-[#676767] border-b-4 rounded-md pt-1 md:pt-4 px-1">
                  <p className="mx-4 font-bold">Learning Hours</p>
                  <LineChart />
                </div>
                <div className="w-full md:w-[275px] h-[202px] border border-[#04F38E] border-b-4 rounded-md p-4">
                  <p className="font-bold">Course Activity</p>
                  <CourseActivity progress={0} ongoing={false} />
                </div>
                <div className="flex flex-col w-full md:w-[275px] h-[202px] border border-[#FFA500] border-b-4 rounded-md justify-center items-center">
                  <p className="font-bold pb-2 mt-1">Badge</p>
                  <Image src={Badge} className="w-30 h-30 mb-2" alt="badge" />
                  <p className="text-[20px] text-[#17181A]">Collected 0 badges</p>
                </div>
                <div className="w-full md:w-[275px] h-[202px] border border-[#676767] rounded-md px-4 pt-8 text-center font-bold">
                  <p>Quiz Time Counter</p>
                  <div className="flex justify-between px-3">
                    <div>
                      <p className="text-[50px] text-[#000E5C]">5</p>
                      <p className="m-0 p-0">Days</p>
                    </div>
                    <div>
                      <p className="text-[50px] text-[#04F38E]">24</p>
                      <p>Hours</p>
                    </div>
                    <div>
                      <p className="text-[50px] text-[#17181A]">0</p>
                      <p>Minutes</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between my-4 py-4 pl-4 bg-[#F7FFFB] shadow-md shadow-[#676767]">
                <div className="w-full md:w-[40%] mt-5">
                  <Video videoId="zHAa-m16NGk" />
                </div>
                <div className="pl-0 md:pl-8 w-full md:w-[27%]">
                  <p className="text-[20px] font-semibold">Upcoming Task</p>
                  <Accordion type="single" collapsible className="text-[#17181A]">
                    {["Week 1 Task", "Week 2 Task", "Week 3 Task", "Week 4 Task", "Week 5 Task"].map((task, index) => (
                      <AccordionItem
                        key={index}
                        value={`task-${index}`}
                        className="bg-[#FEF7FF] my-1 w-full md:w-[250px] px-2 rounded-[6px] py-2"
                      >
                        <AccordionTrigger className="flex flex-col">
                          <p className="font-bold">{task}</p>
                          <p className="text-[12px]">Virtual 23/08/2024</p>
                        </AccordionTrigger>
                        <AccordionContent>Introduction to Design</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
                <div className="w-full md:w-[33%] px-4 mt-4 md:mt-0">
                  <p className="font-semibold text-[20px]">Daily Quiz</p>
                  <div className="flex justify-between mt-2">
                    <p className="text-[#17181A]">Attempted</p>
                    <button className="border bg-[#676767] text-[#FFFFFF] rounded-md px-2">0/3</button>
                  </div>
                  <div className="mt-4 shadow-md shadow-[#454545] bg-[#FFFBFE] p-2 pb-4">
                    <p className="text-[#17181A] mt-4 ml-6">Question 1</p>
                    <p className="my-6 ml-6 text-[#17181A]">
                      How does the principle of &apos;hierarchy&apos; contribute to effective design?
                    </p>
                    <div className="flex flex-wrap text-[#17181A]">
                      {["A Organizing elements", "B Flexibility", "C Spacing", "D Contrast"].map((option, index) => (
                        <div
                          key={option}
                          className={`flex items-center mb-4 pr-2 text-[13px] rounded-tl-[28px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[28px] bg-[#E4E4E4] ${
                            index % 2 === 0 ? "mr-2" : "ml-2"
                          }`}
                        >
                          <div className="w-8 h-8 mr-2 bg-[#676767] text-[#F7FFFB] rounded-full flex items-center justify-center">
                            {option.charAt(0)}
                          </div>
                          <span className="flex-grow">{option.slice(2)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row mt-4 shadow-md shadow-[#676767] py-4 px-2">
                <div className="shadow-md shadow-[#676767] mb-4 md:mb-0">
                  <Image src={DesignPrinciple} alt="image of design principle" />
                </div>
                <div className="flex flex-col items-center justify-center px-6">
                  <h3 className="text-[#000000] font-bold text-[22px]">Introduction to product design</h3>
                  <Link href="/dashboard/live-class">
                    <button className="flex justify-between bg-[#676767] mt-12 px-6 py-3 rounded-md text-[#FFFFFF]">
                      <span className="pr-6">Go to class</span>
                      <ArrowRight size={23} color="white" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="completed-course">
            <div className=" w-full flex flex-col md:flex-row mt-10 shadow-md shadow-[#676767] py-4 px-2">
              <div className="mb-2">
                <Image
                  src={DesignPrinciple}
                  className="mx-6 shadow-md shadow-[#676767] mb-8"
                  alt="image of design principle"
                />
                <div className="flex text-[12px] text-[#17181A] mx-4">
                  <Image src={greenMark} className="w-5 h-5 mr-1" alt="" />
                  <p>
                    Excellent work! Congratulations you have passed all the tasks and tests, you can view and download
                    your certificate
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center px-6">
                <h3 className="text-[#000000] font-bold text-[22px] text-center">Introduction to product design</h3>
                <Link href="/dashboard/certificate">
                  <div className="flex justify-between bg-[#676767] mt-12 px-6 py-3 rounded-md text-[#FFFFFF]">
                    <span className="pr-6">View your certificate</span>
                    <ArrowRight size={23} color="white" />
                  </div>
                </Link>
                <p className="text-[#17181A] mt-6">Rate Course</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

import React from 'react';

interface CourseActivityProps {
  progress: number;
  ongoing: boolean;
}

const CourseActivity: React.FC<CourseActivityProps> = ({ progress, ongoing }) => {
  return (
    <div className="p-2">
      <div className="flex justify-center items-center">
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-8 border-[#D9D9D9] bg-white">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {progress}%
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4 px-1">
        <div className='flex gap-[2px] items-center'>
          <div className='h-3 w-3 rounded-full bg-[#D9D9D9] border border-[#000000]'></div>
          <span className='mr-1 text-[#000000]'>On going</span>
        </div>
        <div className='flex gap-[2px] items-center'>
          <div className='h-3 w-3 rounded-full bg-[#04F38E] ml-1'></div>
          <span className='text-[#04F38E] font-bold'>Completed</span>
        </div>
      </div>
    </div>
  );
};

export default CourseActivity;
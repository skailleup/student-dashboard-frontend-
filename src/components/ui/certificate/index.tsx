import React from 'react';
import Image from 'next/image';
import TEF from '../../../../public/images/TEF.jpg';
import MasterCard from '../../../../public/images/mastercard.jpg';

interface CertificateProps {
  studentName: string;
  courseName: string;
  issueDate: string;
  certificateId: string;
}

const Certificate: React.FC<CertificateProps> = ({
  studentName,
  courseName,
  issueDate,
  certificateId,
}) => {
  return (
    <div className="ml-6 pl-16 pr-6 py-4 bg-[#F7FFFB]">
        <div className='flex justify-between'>
            <p className=''>Realease date: {issueDate}</p>
            <p>Certificate ID: {certificateId}</p>
        </div>
        <p className='py-10 text-xl'>2024</p>
        <p className='font-[900] text-[50px] text-[#000E5C]'>certi<span className='text-[#04ED8D]'>ficate</span></p>
        <div className='w-40 h-0.5 bg-black ml-6 border-0 mb-6'></div>
        <p className='pb-8'>In witness whereof</p>
      <p className="text-2xl pl-4 py-6 font-bold">{studentName}</p>
      <div className='flex gap-6 pb-4'>
        <p className="pt-4">Successfully completed the 6-month Skailleup Design School course where she<br /> demonstrated her ability and skills to design digital products</p>
        <div className='w-0.5 h-16 bg-black'></div>
        <p className="text-3xl font-bold text-[#000E5C] px-4 pt-4">{courseName}</p>
      </div>
      <div className='flex items-center justify-center gap-4 mt-4 mb-8 pb-6'>
        <Image src={MasterCard} alt='master card image' />
        <Image src={TEF} alt='Tony Elemelu Foundation' />
      </div>
      <div className='flex justify-center gap-6 items-center font-bold mt-12 pb-4 text-[#000E5C]'>
        <p>Student: {studentName}</p>
        <p>School: SkailleUp</p>
        <p>Course: {courseName}</p>
        <p>Certificate ID: {certificateId}</p>
      </div>
      <div className='flex items-center justify-center gap-6 font-bold pt-2 mb-4 text-[#000E5C]'>
        <p>Realease date: {issueDate}</p>
        <p>Expiration: There is no expiration date</p>
      </div>
      
      <div className='flex justify-center items-center gap-2 mt-4'>
        <button className="mt-4 px-4 py-2 border border-[#676767] text-[#17181A] text-sm font-bold rounded">
            Share link
        </button>
        <button className="mt-4 px-4 py-2 bg-[#04F38E] text-white text-sm font-bold rounded">
            Download certificate
        </button>
      </div>
      
      
    </div>
  );
};

export default Certificate;
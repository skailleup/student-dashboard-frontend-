
import React from 'react';
import Certificate from '../../../components/ui/certificate';
import Notificationbell from "@/icons/notificationbell";
import Abosad from "@/images/abosad.jpg";
import Image from "next/image";
import { ChevronDown } from 'lucide-react';

export default function CertificatePage() {
  
  const certificateProps = {
    studentName: 'Abosad Toriola Friday',
    courseName: 'Product Design (UX/UI)',
    issueDate: 'September 5, 2024',
    certificateId: 'sfnbogq4',
  };


  return (
    <div className="min-h-screen pr-6">
        <div className='flex justify-end gap-4 mx-4 pr-6 items-center'>
            <Notificationbell />
            <Image  src={Abosad} alt='image of abosad' />
            <p className='font-bold'>Abosad Toriola Friday</p>
            <ChevronDown />
        </div>
        <div>
            <Certificate {...certificateProps} />
        </div>
    </div>
  );
}
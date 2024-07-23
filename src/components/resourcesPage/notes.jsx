'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { folderContents } from '@/app/data';
import { ArrowLeft, Bookmark, DownloadCloud, Folder } from 'lucide-react';

const icons = {
  powerpoint: '/assets/ppt1.jpg',
  word: '/assets/word.jpg',
  pdf: '/assets/pdf.jpg',
};

export default function NotesContent() {
  const [openFolder, setOpenFolder] = useState(null);
  const handleFolderClick = (folder) => {
    setOpenFolder(openFolder === folder ? null : folder);
  };

  return (
    <div>
      {openFolder ? (
        <>
          <div
            onClick={() => setOpenFolder(null)}
            className="cursor-pointer flex gap-2 items-center"
          >
            <ArrowLeft size={24} />
            <span className="sr-only">Back</span>
          </div>
          <Table>
            <TableBody>
              {folderContents[openFolder].map(({ name, date, size }, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    <img
                      src={icons[openFolder]}
                      alt={name}
                      className="w-8 h-8"
                    />
                  </TableCell>
                  <TableCell className="text-gray-900">{name}</TableCell>
                  <TableCell className="text-gray-900">{date}</TableCell>
                  <TableCell className="text-gray-900">{size}</TableCell>
                  <TableCell className="text-right text-gray-900">
                    <Bookmark />
                  </TableCell>
                  <TableCell className="text-right text-gray-900">
                    <DownloadCloud />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      ) : (
        <div className="flex justify-between max-w-[600px] mx-auto space-x-4 mt-12">
          <div
            onClick={() => handleFolderClick('powerpoint')}
            className="cursor-pointer flex flex-col items-center gap-1"
          >
            <Folder size={48} />
            <span className="text-gray-600">PowerPoint slides</span>
          </div>
          <div
            onClick={() => handleFolderClick('word')}
            className="cursor-pointer flex flex-col items-center gap-1"
          >
            <Folder size={48} />
            <span className="text-gray-600">Word Document</span>
          </div>
          <div
            onClick={() => handleFolderClick('pdf')}
            className="cursor-pointer flex flex-col items-center gap-1"
          >
            <Folder size={48} />
            <span className="text-gray-600">PDF</span>
          </div>
        </div>
      )}
    </div>
  );
}

import { videos } from '@/app/data';
import { DownloadCloud } from 'lucide-react';

export default function VideosContent() {
  return (
    <div className="container mx-auto gap-7 grid grid-cols-3">
      {videos.map(({ videoUrl, title, length, subtitle, timePosted, id }) => (
        <div className="bg-primary rounded-lg w-fit flex flex-col items-center" key={id}>
          <div className="relative w-fit">
            <iframe
              src={videoUrl}
              frameBorder="0"
              name="video1"
              title={title}
              width="100%"
              height="200"
              allowFullScreen
              className="block rounded-t-lg"
            ></iframe>
            <div className="absolute bottom-2 text-gray-900 right-2">
              <DownloadCloud size={18} />
            </div>
          </div>
          <div className="mt-4 px-2 mb-4">
            <div className="flex justify-between text-gray-100">
              <p className='text-sm font-semibold tracking-tight'>{title}</p>
              <p className='text-sm font-semibold tracking-tight'>{length}</p>
            </div>
            <div className="flex justify-between mt-4 text-gray-300">
              <p className="text-xs">{subtitle}</p>
              <p className="text-xs">{timePosted}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

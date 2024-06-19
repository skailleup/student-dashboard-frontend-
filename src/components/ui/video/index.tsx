import React from 'react';

interface VideoProps {
  videoId: string;
}

const Video: React.FC<VideoProps> = ({ videoId }) => {
  return (
    <div className="relative w-full pb-[56.25%] h-[300px] overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-md"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      >
      </iframe>
    </div>
  );
};

export default Video;

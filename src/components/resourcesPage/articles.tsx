import React from 'react';
import { Button } from '../ui/button';
import { ArrowRightSquare } from 'lucide-react';

export default function ArticlesContent() {
  return (
    <section className="container text-gray-900">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Top articles to read:
      </h4>
      <ol className="bg-gray-300 my-3 text-base px-10 py-12 rounded list-decimal">
        <li>Principles of design</li>
        <li>Information Architecture</li>
        <li>What is responsive design</li>
        <li>What is responsive design</li>
        <li>What is responsive design</li>
      </ol>
      <div className="p-1">
        <img
          src="/assets/Article card.png"
          alt="Article image"
          className="w-full rounded"
        />
        <div className="mt-4">
          <h5 className="scroll-m-20 text-lg font-semibold tracking-">
            10 Best Free Vector Websites for Designer
          </h5>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Vectors are one of the go-to image files for designers especially if
            they’re working on a logo, illustration or print layout. After all,
            they’re mostly ready-made unlike if you’ll begin with an unedited
            image (or scratch altogether!)
          </p>
          <Button variant='ghost'>
            <ArrowRightSquare size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
}

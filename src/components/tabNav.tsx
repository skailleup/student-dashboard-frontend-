'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import BooksContent from './resourcesPage/books';
import ArticlesContent from './resourcesPage/articles';
import VideosContent from './resourcesPage/videos';
import NotesContent from './resourcesPage/notes';


const resources = [
  {
    name: 'Notes',
    value: 'notes',
    icon: '/assets/fluent-emoji-notebook.svg',
    activeClass: 'text-green-600',
    component: <NotesContent />,
  },
  {
    name: 'Books',
    value: 'books',
    icon: '/assets/emojione-blue-book.svg',
    activeClass: 'text-blue-600',
    component: <BooksContent />,
    // selected: true,
  },
  {
    name: 'Articles',
    value: 'articles',
    icon: '/assets/ooui-articles-rtl.svg',
    activeClass: 'text-green-600',
    component: <ArticlesContent />,
  },
  {
    name: 'Videos',
    value: 'videos',
    icon: '/assets/lets-icons-video-fill.svg',
    activeClass: 'text-red-600',
    component: <VideosContent />,
  },
];

export default function TabNav() {
  const [activeTab, setActiveTab] = useState(resources[1].value);

  return (
    <Tabs
      defaultValue={resources[1].value}
      className="w-full min-h-screen"
      onValueChange={(value) => setActiveTab(value)}
    >
      <TabsList className="w-full grid grid-cols-4">
        {resources.map((resource) => (
          <TabsTrigger
            key={resource.value}
            value={resource.value}
            className="gap-1"
          >
            <img
              src={resource.icon}
              alt={resource.name}
              className={`w-4 h-4 ${
                activeTab === resource.value
                  ? resource.activeClass
                  : 'text-gray-400'
              }`}
            />
            {resource.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {resources.map((resource) => (
        <TabsContent
          key={resource.value}
          value={resource.value}
          className="w-full min-h-screen"
        >
          <Card className="w-full h-full border-none">
            <CardContent className="space-y-2 mt-4">
              {resource.component}
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}

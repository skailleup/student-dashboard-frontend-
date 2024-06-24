import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const resources = [
  { name: 'Notes', value: 'notes', icon: '/assets/fluent-emoji-notebook.svg' },
  {
    name: 'Books',
    value: 'books',
    icon: '/assets/emojione-blue-book.svg',
    selected: true,
  },
  {
    name: 'Articles',
    value: 'articles',
    icon: '/assets/ooui-articles-rtl.svg',
  },
  {
    name: 'Videos',
    value: 'videos',
    icon: '/assets/lets-icons-video-fill.svg',
  },
];

export default function TabNav() {
  return (
    <div className="flex gap-28 p-4 justify-center bg-white">
      <Tabs defaultValue="books" className="flex items-center gap-2">
        {resources.map((resource, index) => (
          <TabsList key={index} className="w-full grid grid-cols-2">
            <TabsTrigger value={resource.value} className="gap-1">
              <img
                src={resource.icon}
                alt={resource.name}
                className="w-4 h-4"
              />
              {resource.name}
            </TabsTrigger>
          </TabsList>
        ))}
      </Tabs>
    </div>
  );
}

            {
              /* <TabsContent value={resource.value} className="min-w-full">
              <Card>
                <CardContent className="space-y-2">
                  <p>card contents will go here</p>
                </CardContent>
              </Card>
            </TabsContent> */
            }
// {resources.map((resource, index) => (
//   <Tabs defaultValue="books" key={index} className="w-[400px]">
//     <TabsList className="grid w-full grid-cols-2">
//       <TabsTrigger value={resource.value}>{resource.name}</TabsTrigger>
//     </TabsList>
//     <TabsContent value={resource.value}>
//       <Card>
//         <CardHeader>
//           <CardTitle>{resource.name}</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-2">
//           card contents will go here
//         </CardContent>
//         {/* <CardFooter>
//           <Button>Save changes</Button>
//         </CardFooter> */}
//       </Card>
//     </TabsContent>

//   </Tabs>
// ))}

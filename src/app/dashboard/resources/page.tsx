
import TabNav from '@/components/tabNav';
import SearchComponent from '@/components/resourcesPage/search'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources',
  icons: '/images/logo.jpg',
};


export default function Page() {

  return (
    <div className={`min-h-screen`}>
      {/* create a header for this page to include ht e search input and notifications icon */}
      <SearchComponent  />
      <TabNav />
    </div>
  );
}


import TabNav from '@/components/tabNav';
import SearchComponent from '@/components/resourcesPage/search'


export default function Page() {

  return (
    <div className={`min-h-screen`}>
      {/* create a header for this page to include ht e search input and notifications icon */}
      <SearchComponent  />
      <TabNav />
    </div>
  );
}

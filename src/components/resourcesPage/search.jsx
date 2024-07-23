import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';

export default function SearchComponent() {
  return (
    <div className="flex max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search"  />
      <Button type="submit" variant='outline'>
        <SearchIcon size={24} />
      </Button>
    </div>
  );
}

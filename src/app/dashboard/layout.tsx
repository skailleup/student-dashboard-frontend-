import Header from "@/components/ui/dashboard/header";
import SideNav from "@/components/ui/dashboard/sidenav";


export default function Layout({ children }: { children: React.ReactNode }) {
  
  return (
    <div className="flex h-screen flex-row md:overflow-hidden">
      <div className="w-16 flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow md:overflow-y-auto">
        <Header />
        {children}
      </div>
    </div>
  );
}

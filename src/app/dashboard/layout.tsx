import Header from "@/components/ui/dashboard/header";
import SideNav from "@/components/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-row md:overflow-hidden">
      <div className="w-16 min-h-full md:w-64">
        <SideNav />
      </div>
      <div className="min-h-full md:overflow-y-auto">
        <Header />
        {children}
      </div>
    </div>
  );
}

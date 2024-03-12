import { ReactNode } from "react";
import AuthWrapper from "@/components/shared/auth-wrapper";

const Layout = ({ children }: { children: ReactNode }) => {
  return <AuthWrapper>{children}</AuthWrapper>;
};

export default Layout;

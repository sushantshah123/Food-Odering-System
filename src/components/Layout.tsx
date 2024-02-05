"use client";

import { MyProvider } from "@/context/MyContext";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MyProvider>
      {children}
    </MyProvider>
  );
};

export default Layout;
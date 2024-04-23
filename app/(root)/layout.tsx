import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex items-center justify-center">
      <div className="w-[420px] bg-white h-screen overflow-auto">
        <div> {children}</div>
      </div>
    </main>
  );
};

export default Layout;

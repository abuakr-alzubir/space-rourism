import React from "react";

const MainTage = ({children, className}: {children:React.ReactNode, className?: string}) => {
  return (
    <main className={`pt-[150px] lg:pt-[240px] bg-cover h-[100vh] text-white ${className}`}>
        {children}
    </main>
  );
};

export default MainTage;

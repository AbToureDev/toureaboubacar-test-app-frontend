import React from 'react';
import SideBar from "@/app/components/sideBar";

const Layout = ({children}) => {
    return (
        <div className="h-screen flex overflow-hidden">
            <SideBar />
            <main className="w-full flex-grow flex flex-col">{children}</main>
        </div>
    );
};

export default Layout;
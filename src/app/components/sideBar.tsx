import React from 'react';
import Link from "next/link";
const sideMenu = [
    {name: "Programs", path: "/programs" },
    {name: "Levels", path: "/levels" },
    {name: "Students", path: "/students" },
];
const SideBar = () => {

    return (
        <div className="mb-48 lg:mb-0 z-50 overflow-hidden shrink-0 bg-gray-200">
            {/* for destop */}
            <div className="h-screen hidden lg:flex flex-col overflow-hidden w-[200px] lg:w-[250px]">
                {/* logo */}
                <Link
                    href={"#"}
                    className="pb-2 mt-2 flex justify-center items-center"
                    title="Logo"
                >
                    <h1 className="text-secondary text-3xl font-bold">Admin</h1>
                </Link>

                <div className="h-full flex-1 pb-2 flex flex-col gap-4 overflow-y-auto">
                    <ul
                    >
                        {sideMenu.map((item, index) => (
                            <div key={index}>
                                <Link
                                    href={item.path}
                                    className={`flex items-center gap-5 px-3 lg:pl-5 xl:text-lg lg:text-sm border-y hover:bg-bgColor duration-400 font-semibold  border-[#b3b2b2]/60 rounded-b-md py-3`}
                                >
                                    <span className="hidden lg:block">{item.name}</span>
                                </Link>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default SideBar;
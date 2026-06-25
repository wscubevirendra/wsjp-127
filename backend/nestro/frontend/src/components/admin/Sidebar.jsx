"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    MdDashboardCustomize,
    MdPeople,
    MdShoppingCart,
    MdCategory,
    MdSettings,
    MdLogout,
    MdMenu
} from "react-icons/md";


export default function Sidebar() {

    const pathname = usePathname();

    const [collapse, setCollapse] = useState(false);


    const menuItems = [
        {
            name: "Dashboard",
            path: "/admin",
            icon: <MdDashboardCustomize size={24}/>
        },
        {
            name: "Users",
            path: "/admin/users",
            icon: <MdPeople size={24}/>
        },
        {
            name: "Products",
            path: "/admin/product",
            icon: <MdShoppingCart size={24}/>
        },
        {
            name: "Categories",
            path: "/admin/category",
            icon: <MdCategory size={24}/>
        },
        {
            name: "Settings",
            path: "/admin/settings",
            icon: <MdSettings size={24}/>
        }
    ];


    return (

        <aside

        className={`
        sticky
        left-0
        top-0
        h-screen
        bg-[#3b497e]
        text-white
        transition-all
        duration-300
        ${collapse ? "w-[80px]" : "w-[260px]"}
        `}
        
        >


            {/* Header */}

            <div 
            className="
            h-[70px]
            flex
            items-center
            justify-between
            px-4
            border-b
            border-white/20
            "
            >


                {
                    !collapse &&
                    <h1 className="text-2xl font-bold">
                        Nestro
                    </h1>
                }


                <button
                onClick={()=>setCollapse(!collapse)}
                className="hover:bg-white/20 p-2 rounded"
                >

                    <MdMenu size={25}/>

                </button>


            </div>



            {/* Menu */}


            <div className="p-3">


            {
                menuItems.map((item)=>{


                    const active = pathname === item.path;


                    return (

                        <Link

                        key={item.path}

                        href={item.path}

                        className={`
                        flex
                        items-center
                        gap-4
                        px-4
                        py-3
                        rounded-xl
                        mb-3
                        transition

                        ${
                            active 
                            ?
                            "bg-white/20"
                            :
                            "hover:bg-white/10"
                        }

                        `}

                        >


                            {item.icon}


                            {
                                !collapse &&
                                <span>
                                    {item.name}
                                </span>
                            }


                        </Link>

                    )

                })
            }


            </div>



            {/* Logout */}

            <div className="absolute bottom-5 w-full px-3">


                <button

                className="
                flex
                items-center
                gap-4
                w-full
                px-4
                py-3
                rounded-xl
                hover:bg-red-500
                "

                >

                    <MdLogout size={24}/>

                    {
                        !collapse &&
                        "Logout"
                    }


                </button>


            </div>



        </aside>

    )
}
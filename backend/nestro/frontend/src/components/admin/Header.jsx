"use client";

import React, { useState } from "react";
import {
    MdNotifications,
    MdPerson,
    MdKeyboardArrowDown,
} from "react-icons/md";


export default function Header() {


    const [profile, setProfile] = useState(false);


    return (

        <header
            className="
        h-[70px]
        bg-white
        shadow
        flex
        items-center
        justify-between
        px-6"

        >
            <div className="flex items-center gap-5">
                <div>

                    <h2 className="text-xl font-semibold">
                        Dashboard
                    </h2>

                </div>



            </div>
            <div className="flex items-center gap-6">



                {/* Search */}

                <input

                    type="text"

                    placeholder="Search..."

                    className="
                hidden
                md:block
                border
                rounded-full
                px-5
                py-2
                outline-none
                "

                />



                {/* Notification */}


                <button
                    className="
                relative
                "
                >

                    <MdNotifications size={25} />


                    <span
                        className="
                    absolute
                    top-0
                    right-0
                    bg-red-500
                    w-2
                    h-2
                    rounded-full
                    "
                    ></span>


                </button>




                {/* Profile */}


                <div className="relative">


                    <button

                        onClick={() => setProfile(!profile)}

                        className="
                    flex
                    items-center
                    gap-2
                    "

                    >

                        <div
                            className="
                        w-10
                        h-10
                        rounded-full
                        bg-[#3b497e]
                        text-white
                        flex
                        items-center
                        justify-center
                        "
                        >

                            <MdPerson />

                        </div>


                        <span className="hidden md:block">
                            Admin
                        </span>


                        <MdKeyboardArrowDown />


                    </button>




                    {
                        profile &&

                        <div
                            className="
                        absolute
                        right-0
                        mt-3
                        bg-white
                        shadow-lg
                        rounded-xl
                        w-40
                        p-2
                        "
                        >


                            <p
                                className="
                            px-3
                            py-2
                            hover:bg-gray-100
                            rounded
                            cursor-pointer
                            "
                            >
                                Profile
                            </p>


                            <p
                                className="
                            px-3
                            py-2
                            hover:bg-gray-100
                            rounded
                            cursor-pointer
                            "
                            >
                                Logout
                            </p>



                        </div>

                    }



                </div>



            </div>
        </header>

    )
}
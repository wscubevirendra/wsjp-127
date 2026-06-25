"use client"

import React, { useState } from 'react'
import { client } from '@/utils/helper';
import {
    MdMoreVert,
    MdEdit,
    MdDelete,
    MdVisibility
} from "react-icons/md";
import { useRouter } from 'next/navigation';
import { toast } from 'sonner'
import Link from 'next/link';

export default function ActionDropdown({ id, module }) {
    const [openMenu, setOpenMenu] = useState(null);
    const router = useRouter()
    function deletHandler() {
        client.delete(`${module}/delete/${id}`).then(
            (response) => {
                if (response.data.success) {
                    toast.success(response.data.message)
                    router.refresh()

                }
            }
        ).catch(
            (error) => {
                toast.error(error.response.data.message || 'Internal server error')
            }
        )
    }

    return (
        <td className="p-3 relative">


            <button


                onClick={() => setOpenMenu(
                    openMenu === id ? null : id
                )}

                className="
                            p-2
                            rounded-lg
                            hover:bg-gray-100
                            "
            >

                <MdMoreVert size={22} />


            </button>



            {
                openMenu === id &&


                <div
                    className="
                            absolute
                            right-10
                            top-10
                            w-36
                            bg-white
                            shadow-xl
                            rounded-lg
                            z-20
                            p-2
                            "
                >


                    <button
                        className="
                                flex
                                gap-2
                                items-center
                                w-full
                                p-2
                                hover:bg-gray-100
                                rounded
                                "
                    >

                        <MdVisibility />

                        View

                    </button>



                    <Link href={`/admin/${module}/edit/${id}`}>
                        <button
                            className="
                                flex
                                gap-2
                                items-center
                                w-full
                                p-2
                                hover:bg-gray-100
                                rounded
                                "
                        >

                            <MdEdit />

                            Edit

                        </button>
                    </Link>





                    <button
                        onClick={deletHandler}
                        className="
                                flex
                                gap-2
                                items-center
                                w-full
                                p-2
                                hover:bg-red-100
                                text-red-600
                                rounded
                                "
                    >

                        <MdDelete />

                        Delete

                    </button>


                </div>

            }



        </td>
    )
}

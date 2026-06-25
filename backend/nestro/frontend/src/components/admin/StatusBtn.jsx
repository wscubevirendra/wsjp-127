'use client'
import { client } from '@/utils/helper'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'


export default function StatusBtn({ status, path }) {
    const router = useRouter()

    function statusHandler() {
        client.patch(path).then(
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

        <td className="p-3">


            {
                status ?

                    <span
                        onClick={statusHandler}
                        className="
                                    bg-green-100
                                    text-green-600
                                    px-3
                                    py-1
                                    rounded-full
                                    text-sm
                                    "
                    >
                        Active
                    </span>


                    :

                    <span
                        onClick={statusHandler}
                        className="
                                    bg-red-100
                                    text-red-600
                                    px-3
                                    py-1
                                    rounded-full
                                    text-sm
                                    "
                    >
                        Inactive
                    </span>
            }



        </td>

    )
}

"use client";

import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import {
    FiSave,
    FiTag
} from "react-icons/fi";

import { client ,generateSlug} from "@/utils/helper";


export default function Add() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        slug: "",
    });



    function changeHandler(e) {
        const { name, value } = e.target;

        setFormData((prev) => {
            return {
                ...prev,
                [name]: value,
                // only name change => auto slug
                slug: name === "name"
                    ? generateSlug(value)
                    : prev.slug
            }

        })

    }


    async function submitHandler(e) {
        e.preventDefault();

        try {
            const response = await client.post("room-type/create", formData);
            if (response.data.success) {
                toast.success(response.data.message);
                setFormData({
                    name: "",
                    slug: "",
                })
                router.push("/admin/room-type");
            }
        }
        catch (error) {
            toast.error(error.response?.data?.message || "Internal server error")

        }
    }


    function resetForm() {
        setFormData({
            name: "",
            slug: "",
        })
    }



    return (

        <div className="min-h-screen bg-[#f6f7fb] p-6">

            <div className="max-w-4xl mx-auto">


                <div className="mb-5">

                    <h1 className="text-2xl font-bold text-[#27335f]">
                        Add Room Type
                    </h1>

                    <p className="text-sm text-gray-500">
                        Create new product room
                    </p>

                </div>



                <form onSubmit={submitHandler} className="bg-white rounded-2xl shadow border overflow-hidden">


                    <div className="bg-[#3b497e] text-white p-5 flex gap-3 items-center">

                        <FiTag />

                        <h2 className="font-semibold">
                            Room Details
                        </h2>

                    </div>



                    <div className="p-6 space-y-5">


                        <div>

                            <label className="text-sm font-medium">
                                Name
                            </label>


                            <input
                                name="name"
                                value={formData.name}
                                onChange={changeHandler}
                                placeholder="Room  name"
                                className="input"
                            />

                        </div>



                        <div>

                            <label className="text-sm font-medium">
                                Slug
                            </label>


                            <input
                                name="slug"
                                value={formData.slug}
                                onChange={changeHandler}
                                placeholder="room-slug"
                                className="input bg-gray-50"
                            />

                        </div>
                        <div className="flex justify-end gap-3 pt-3">

                            <button
                                type="button"
                                onClick={resetForm}
                                className="px-5 py-2 border rounded-xl"
                            >
                                Cancel
                            </button>



                            <button className="flex gap-2 items-center bg-[#3b497e] text-white px-5 py-2 rounded-xl">
                                <FiSave />
                                Save
                            </button>

                        </div>
                    </div>
                </form>

            </div>

        </div>

    )
}
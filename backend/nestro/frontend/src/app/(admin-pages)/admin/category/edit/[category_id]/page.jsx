"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import React, { useState, use, useEffect } from "react";

import {
    FiSave,
    FiTag,
    FiLoader
} from "react-icons/fi";

import { generateSlug } from "@/app/utils/helper";
import { fetchCategoryById } from "@/utils/api";
import { client } from "@/utils/helper";


export default function EditCategory({ params }) {


    const { category_id } = use(params);

    const router = useRouter();


    const [loading, setLoading] = useState(true);
    const [submitLoading, setSubmitLoading] = useState(false);
    const [error, setError] = useState("");


    const [formData, setFormData] = useState({
        name: "",
        slug: "",
        image: null,
        oldImage: ""
    });



    // Fetch category
    useEffect(() => {


        const getCategory = async () => {

            try {

                setLoading(true);
                setError("");


                const response = await fetchCategoryById(category_id);


                if (!response.success) {
                    throw new Error("Category not found" || response.message);
                }


                const data = response.data;


                setFormData({
                    name: data.name || "",
                    slug: data.slug || "",
                    image: null,
                    oldImage: data.image || ""
                });


            } catch (err) {

                console.log(err);

                setError(
                    err.message || "Something went wrong"
                );

                toast.error(
                    err.message || "Failed to load category"
                );


            } finally {

                setLoading(false);

            }

        }


        getCategory();


    }, [category_id]);





    function changeHandler(e) {


        const { name, value } = e.target;


        setFormData(prev => ({
            ...prev,
            [name]: value,

            ...(name === "name" && {
                slug: generateSlug(value)
            })

        }));

    }





    function imageChangeHandler(e) {


        const file = e.target.files[0];


        if (!file) return;


        setFormData(prev => ({
            ...prev,
            image: file
        }));

    }





    async function submitHandler(e) {


        e.preventDefault();


        try {


            setSubmitLoading(true);


            const form = new FormData();


            form.append(
                "name",
                formData.name
            );


            form.append(
                "slug",
                formData.slug
            );


            if(formData.image){
                form.append(
                    "image",
                    formData.image
                );
            }



            const response = await client.put(
                `category/edit/${category_id}`,
                form
            );



            if(response.data.success){


                toast.success(
                    response.data.message
                );


                router.push(
                    "/admin/category"
                );

            }



        } catch(error){
            console.log(error)


            toast.error(
                error?.response?.data?.message ||
                "Internal server error"
            );


        } finally {

            setSubmitLoading(false);

        }


    }





    if(loading){

        return (

            <div className="
                h-screen
                flex
                justify-center
                items-center
            ">

                <FiLoader 
                    className="animate-spin text-4xl"
                />

            </div>

        )

    }





    if(error){

        return (

            <div className="
                h-screen
                flex
                flex-col
                justify-center
                items-center
                gap-3
            ">

                <h2 className="text-xl text-red-500">
                    {error}
                </h2>


                <button
                    onClick={()=>router.back()}
                    className="
                    px-4
                    py-2
                    bg-gray-800
                    text-white
                    rounded
                    "
                >
                    Go Back
                </button>


            </div>

        )

    }






    return (

        <div className="min-h-screen bg-[#f6f7fb] p-6">


            <div className="max-w-4xl mx-auto">


                <div className="mb-5">


                    <h1 className="text-2xl font-bold text-[#27335f]">
                        Edit Category
                    </h1>


                    <p className="text-sm text-gray-500">
                        Update category details
                    </p>


                </div>





                <form
                    onSubmit={submitHandler}
                    className="
                    bg-white
                    rounded-2xl
                    shadow
                    border
                    overflow-hidden
                    "
                >



                    <div className="
                    bg-[#3b497e]
                    text-white
                    p-5
                    flex
                    gap-3
                    items-center
                    ">


                        <FiTag />

                        Category Details


                    </div>





                    <div className="p-6 space-y-5">



                        <div>

                            <label>
                                Name
                            </label>


                            <input
                                name="name"
                                value={formData.name}
                                onChange={changeHandler}
                                className="input"
                            />

                        </div>





                        <div>

                            <label>
                                Slug
                            </label>


                            <input
                                name="slug"
                                value={formData.slug}
                                onChange={changeHandler}
                                className="input bg-gray-50"
                            />

                        </div>





                        <div>

                            <label>
                                Image
                            </label>


                            <input
                                type="file"
                                onChange={imageChangeHandler}
                                className="input"
                            />



                            {
                                formData.image ?

                                <img
                                    src={
                                      URL.createObjectURL(
                                        formData.image
                                      )
                                    }
                                    className="
                                    w-24
                                    h-24
                                    object-cover
                                    mt-3
                                    rounded
                                    "
                                />

                                :

                                formData.oldImage &&

                                <img
                                    src={formData.oldImage}
                                    className="
                                    w-24
                                    h-24
                                    object-cover
                                    mt-3
                                    rounded
                                    "
                                />

                            }


                        </div>






                        <div className="flex justify-end">


                            <button
                                disabled={submitLoading}
                                className="
                                flex
                                gap-2
                                items-center
                                bg-[#3b497e]
                                text-white
                                px-5
                                py-2
                                rounded-xl
                                disabled:opacity-50
                                "
                            >


                                {
                                    submitLoading
                                    ?
                                    <FiLoader className="animate-spin"/>
                                    :
                                    <FiSave/>
                                }


                                {
                                    submitLoading
                                    ?
                                    "Updating..."
                                    :
                                    "Edit"
                                }


                            </button>



                        </div>





                    </div>


                </form>



            </div>


        </div>

    );

}
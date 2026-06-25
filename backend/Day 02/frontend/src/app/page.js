import { fetchStudent } from '@/api/api'
import React from 'react'

export default async function page() {
  const response=await fetchStudent()
  console.log(response)
  return (
  <div className="min-h-screen bg-gray-100 p-10">


            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">


                <h1 className="text-2xl font-bold p-5">
                    Student Data
                </h1>


                <table className="w-full">


                    <thead className="bg-slate-800 text-white">

                        <tr>

                            <th className="p-4 text-left">
                                S.No
                            </th>

                            <th className="p-4 text-left">
                                Name
                            </th>

                            <th className="p-4 text-left">
                                Email
                            </th>

                            <th className="p-4 text-left">
                                Age
                            </th>

                            <th className="p-4 text-left">
                                Status
                            </th>

                        </tr>

                    </thead>



                    <tbody>


                    {
                        response.data.map((student,index)=>(

                            <tr 
                              key={student._id}
                              className="border-b hover:bg-gray-100"
                            >

                                <td className="p-4">
                                    {index+1}
                                </td>


                                <td className="p-4 font-semibold">
                                    {student.name}
                                </td>


                                <td className="p-4">
                                    {student.email}
                                </td>


                                <td className="p-4">
                                    {student.age}
                                </td>


                                <td className="p-4">

                                    {
                                        student.status ? 

                                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                                            Active
                                        </span>

                                        :

                                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">
                                            Inactive
                                        </span>
                                    }

                                </td>


                            </tr>

                        ))
                    }


                    </tbody>


                </table>


            </div>


        </div>
  )
}

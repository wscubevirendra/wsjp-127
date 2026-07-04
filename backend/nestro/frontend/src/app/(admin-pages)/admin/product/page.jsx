import ActionDropdown from "@/components/admin/ActionDropdown"
import Button from "@/admin/Button";
import StatusBtn from "@/components/admin/StatusBtn";
import { fetchProduct } from "@/utils/api"
import { CiCirclePlus } from "react-icons/ci";
import Link from "next/link";


export default async function AdminTable() {
    const product = await fetchProduct();

    if (product.success === false) {
        throw new Error("Internal Server Error" || product.message)
    }

    return (
        <>
            <Button path="/admin/product/add" name="Product" />

            <div className="bg-white rounded-xl shadow p-5 overflow-x-auto">

                <table className="w-full">
                    <thead>
                        <tr className="border-b text-left text-gray-600">
                            <th className="p-3">S.No</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Price</th>
                            <th className="p-3">Thumbnail</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Add</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            product.data.map((prod, index) => (
                                <tr key={prod._id} className="border-b hover:bg-gray-50">
                                    <td className="p-3">
                                        {index + 1}
                                    </td>

                                    <td className="p-3 font-medium">
                                        {prod.name}
                                    </td>

                                    <td className="p-3">
                                        {prod.salePrice} | {prod.discount}
                                    </td>

                                    <td className="p-3">
                                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                                            <img src={prod.thumbnail} width={50} height={50} alt="" />
                                        </span>
                                    </td>

                                    <StatusBtn status={prod.status} path={`/product/status-update/${prod._id}`} />
                                    <td>
                                        <Link href={`/admin/product/add-images/${prod._id}`}>
                                            <CiCirclePlus className="text-2xl cursor-pointer" />
                                        </Link>

                                    </td>

                                    <ActionDropdown module={`/product`} id={prod._id} />
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
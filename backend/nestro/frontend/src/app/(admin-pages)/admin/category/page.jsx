import ActionDropdown from "@/components/admin/ActionDropdown"
import Button from "@/components/admin/Button";
import StatusBtn from "@/components/admin/StatusBtn";
import { fetchCategory } from "@/utils/api"

export default async function AdminTable() {
    const category = await fetchCategory();

    if (category.success === false) {
        throw new Error("Internal Server Error" || category.message)
    }

    return (
        <>
            <Button path="/admin/category/add" name="Category" />

            <div className="bg-white rounded-xl shadow p-5 overflow-x-auto">

                <table className="w-full">
                    <thead>
                        <tr className="border-b text-left text-gray-600">
                            <th className="p-3">S.No</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Slug</th>
                            <th className="p-3">Thumbnail</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            category.data.map((cat, index) => (
                                <tr key={cat._id} className="border-b hover:bg-gray-50">
                                    <td className="p-3">
                                        {index + 1}
                                    </td>

                                    <td className="p-3 font-medium">
                                        {cat.name}
                                    </td>

                                    <td className="p-3">
                                        {cat.slug}
                                    </td>

                                    <td className="p-3">
                                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                                            <img src={cat.image} width={50} height={50} alt="" />
                                        </span>
                                    </td>

                                    <StatusBtn status={cat.status} path={`/category/status-update/${cat._id}`} />

                                    <ActionDropdown module={`/category`} id={cat._id} />
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
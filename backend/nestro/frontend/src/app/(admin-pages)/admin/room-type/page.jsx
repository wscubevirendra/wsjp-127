import ActionDropdown from "@/components/admin/ActionDropdown"
import Button from "@/components/admin/Button";
import StatusBtn from "@/components/admin/StatusBtn";
import { fetchRoom } from "@/utils/api"

export default async function Table() {
    const room = await fetchRoom();
    if (room.success === false) {
        throw new Error("Internal Server Error" || room.message)
    }

    return (
        <>
            <Button path="/admin/room-type/add" name="Room Type" />

            <div className="bg-white rounded-xl shadow p-5 overflow-x-auto">

                <table className="w-full">
                    <thead>
                        <tr className="border-b text-left text-gray-600">
                            <th className="p-3">S.No</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Slug</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            room.data.map((item, index) => (
                                <tr key={item._id} className="border-b hover:bg-gray-50">
                                    <td className="p-3">
                                        {index + 1}
                                    </td>

                                    <td className="p-3 font-medium">
                                        {item.name}
                                    </td>

                                    <td className="p-3">
                                        {item.slug}
                                    </td>

                                    <StatusBtn status={item.status} path={`/room-type/status-update/${item._id}`} />
                                    <ActionDropdown module={`/room-type`} id={item._id} />
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
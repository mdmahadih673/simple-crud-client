'use client'


import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import UpdateUserDialog from "@/components/updateUserDialog";

const UserCardPage = ({ user }) => {



    const { _id } = user

    const router = useRouter()
    const handleDeleteUser = async (id) => {
        const res = await fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE"
        });
        const afterDelete = await res.json()
        if (afterDelete.deletedCount > 0) {
            router.refresh()
        }
    }




    return (
        <Card className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-400 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">

            {/* Top Section */}
            <div className="h-2 shrink-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500" />

            {/* User Information */}
            <CardHeader className="flex-1 p-6">
                <div className="mb-4 flex items-center gap-4">

                    {/* Avatar */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-xl font-bold text-blue-700 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        {(user.name || "U").charAt(0).toUpperCase()}
                    </div>

                    {/* Name */}
                    <div className="min-w-0 flex-1">
                        <CardTitle className="truncate text-lg font-bold text-slate-900">
                            {user.name || "Unknown User"}
                        </CardTitle>
                    </div>
                </div>

                {/* Email */}
                <CardDescription className="break-words text-sm leading-6 text-slate-500">
                    {user.email || "No email available"}
                </CardDescription>
            </CardHeader>

            {/* Footer & Button */}
            <CardFooter className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 bg-gray-400 p-5">

                <Link href={`/users/${user._id}`}>

                    <Button
                        type="button"
                        variant="default"
                        className="cursor-pointer rounded-xl bg-blue-600 text-white hover:bg-blue-700"
                    >
                        View User →
                    </Button>
                </Link>

                {/* Update dialog lives here — centered */}
                <UpdateUserDialog user={user} />

                <Button
                    onClick={() => { handleDeleteUser(_id) }}
                    type="button"
                    variant=""
                    className=" cursor-pointer rounded-xl bg-blue-600 text-white hover:bg-blue-700"
                >
                    Delete User <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                </Button>
            </CardFooter>

        </Card>
    );
};

export default UserCardPage;
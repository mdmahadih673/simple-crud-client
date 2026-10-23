import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const UserCardPage = ({ user }) => {
    return (
        <Card className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">

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
            <CardFooter className="mt-auto border-t border-slate-100 bg-slate-50/70 p-5">

                <Link href={`/users/${user._id}`}>

                    <Button
                        type="button"
                        variant="default"
                        className="w-full cursor-pointer rounded-xl bg-blue-600 text-white hover:bg-blue-700"
                    >
                        View User →
                    </Button>
                </Link>
            </CardFooter>

        </Card>
    );
};

export default UserCardPage;
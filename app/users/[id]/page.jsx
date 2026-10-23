import Link from "next/link";

const UserPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:5000/users/${id}`);
    const user = await res.json();

    return (
        <div className="min-h-screen bg-slate-50 px-4 py-16 sm:px-6">

            <div className="mx-auto max-w-3xl">

                {/* Header */}
                <div className="mb-8">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
                        User Management
                    </p>

                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        User Profile
                    </h1>

                    <p className="mt-2 text-slate-500">
                        View user information and account details.
                    </p>
                </div>

                {/* Profile Card */}
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">

                    {/* Cover */}
                    <div className="h-36 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 sm:h-44" />

                    {/* Profile Content */}
                    <div className="px-6 pb-8 sm:px-10">

                        {/* Avatar */}
                        <div className="-mt-12 mb-5 flex h-24 w-24 items-center justify-center rounded-3xl border-4 border-white bg-blue-100 text-4xl font-bold text-blue-700 shadow-md">
                            {(user.name || "U").charAt(0).toUpperCase()}
                        </div>

                        {/* Name */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                                {user.name || "Unknown User"}
                            </h2>

                            <p className="mt-2 text-sm text-slate-500">
                                Registered User
                            </p>
                        </div>

                        {/* User Details */}
                        <div className="space-y-4">

                            {/* User ID */}
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    User ID
                                </p>

                                <p className="break-all text-sm font-medium text-slate-800">
                                    {id}
                                </p>
                            </div>

                            {/* Email */}
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Email Address
                                </p>

                                <p className="break-all text-base font-medium text-slate-800">
                                    {user.email || "No email available"}
                                </p>
                            </div>

                        </div>

                        {/* Back Button */}
                        <div className="mt-8">
                            <Link
                                href="/users"
                                className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
                            >
                                ← Back to Users
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserPage;
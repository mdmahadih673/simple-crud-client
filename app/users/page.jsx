import UserCardPage from "@/components/UserCardPage";

const UsersPage = async () => {
    const res = await fetch("http://localhost:5000/users");
    const users = await res.json();

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">

                {/* Header */}
                <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                    <div>
                        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
                            User Management
                        </p>

                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            All Users
                        </h1>

                        <p className="mt-3 text-sm text-slate-500 sm:text-base">
                            Manage and explore all registered users in one place.
                        </p>
                    </div>

                    {/* Total Users */}
                    <div className="flex w-fit items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl">
                            👥
                        </div>

                        <div>
                            <p className="text-sm text-slate-500">
                                Total Users
                            </p>

                            <p className="text-2xl font-bold text-slate-900">
                                {users.length}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Users Grid */}
                {users.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {users.map((user) => (
                            <UserCardPage
                                key={user._id}
                                user={user}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">
                        <div className="mb-4 text-5xl">👤</div>

                        <h2 className="text-xl font-semibold text-slate-800">
                            No Users Found
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                            There are no registered users to display yet.
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default UsersPage;
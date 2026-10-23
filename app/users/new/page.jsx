'use client'

import { Button } from "@/components/ui/button"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { toast, Bounce } from "react-toastify";
import { useRouter } from "next/navigation";


const NewUserPage = () => {
    const router = useRouter();

    const handleAddNewUser = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const newUser = Object.fromEntries(formData.entries())
        console.log(newUser);

        const res = await fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })

        const afterSubmit = await res.json()

        if (afterSubmit.insertedId) {
            toast('🦄 Wow so easy!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            router.push('/users');
        }



    }
    return (
        <div className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6">
            <div className="mx-auto max-w-lg">

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">

                    <FieldGroup className="gap-6">

                        <form onSubmit={handleAddNewUser} className="space-y-6">
                            {/* Name */}
                            <Field className="gap-2">
                                <FieldLabel
                                    htmlFor="fieldgroup-name"
                                    className="text-sm font-semibold text-slate-800"
                                >
                                    Full Name
                                </FieldLabel>

                                <Input
                                    id="fieldgroup-name"
                                    name='name'

                                    placeholder="Enter your full name"
                                    className="h-12 rounded-xl border-slate-300 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-blue-500"
                                />
                            </Field>

                            {/* Email and Buttons */}

                            <Field className="gap-2">
                                <FieldLabel
                                    htmlFor="fieldgroup-email"
                                    className="text-sm font-semibold text-slate-800"
                                >
                                    Email Address
                                </FieldLabel>

                                <Input
                                    id="fieldgroup-email"
                                    name='email'
                                    type="email"
                                    placeholder="name@example.com"
                                    className="h-12 rounded-xl border-slate-300 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-blue-500"
                                />

                                <FieldDescription className="text-xs text-slate-500">
                                    We&apos;ll send updates to this address.
                                </FieldDescription>
                            </Field>

                            {/* Buttons */}
                            <div className="flex gap-3 pt-2">

                                <Button
                                    type="reset"
                                    variant="outline"
                                    className="h-11 flex-1 rounded-xl border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                                >
                                    Reset
                                </Button>

                                <Button
                                    type="submit"
                                    className="h-11 flex-1 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
                                >
                                    + Add User
                                </Button>

                            </div>

                        </form>

                    </FieldGroup>

                </div>
            </div>
        </div>
    );
};

export default NewUserPage;
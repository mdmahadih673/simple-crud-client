

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const UpdateUserDialog = ({ user }) => {

    const handleUptade = (e) => {
        e.preventDefaulT()
        const formData = new FormData(e.currentTarget)
        const updatedUser = Object.fromEntries(formData.entries())
    }

    return (
        <Dialog>
            <DialogTrigger
                render={
                    <Button
                        type="button"
                        variant=""
                        className="cursor-pointer rounded-xl bg-blue-600 text-white hover:bg-blue-700"
                    >
                        Edit User <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg>
                    </Button>
                }
            />
            <DialogContent className="sm:max-w-sm">
                <form onSubmit={handleUptade}>
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <FieldGroup>
                        <Field>
                            <Label htmlFor="name-1">Name</Label>
                            <Input id="name-1" name="name" defaultValue={user.name} />
                        </Field>
                        <Field>
                            <Label htmlFor="email-1">Use Email</Label>
                            <Input id="email-1" type="email" name="email" defaultValue={user.email} />
                        </Field>
                    </FieldGroup>
                    <DialogFooter>
                        <DialogClose render={<Button variant="outline">Cancel</Button>} />
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateUserDialog;
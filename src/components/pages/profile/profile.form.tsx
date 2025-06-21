import type { FC } from 'react';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import useUserStore from '@/store/user.store';

const FormSchema = z.object({
    username: z.string().min(2, {
        message: "El nombre del usuario debe tener por lo menos 2 caracteres.",
    }),
    email: z.string().email({
        message: "Correo electrónico no válido"
    }),
    profilePicture: z.string().url({
        message: "URL no Valida"
    })
})

type Props = {};
const ProfileForm: FC<Props> = ({ }) => {
    const user = useUserStore()

    const form = useForm<z.infer<typeof FormSchema>>({
        // @ts-ignore
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            email: "",
            profilePicture: ""
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {

        console.log("Esto es un mensaje de el Toaster")
        
        user.updateUser(data)

        toast("Usuario creado", {
            description: JSON.stringify(data, null, 2)
        })
    }

    return (
        <Form {...form}>
            <div>
                <pre>{JSON.stringify(user.userData, null, 2)}</pre>
            </div>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nombre de Usuario</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                Este es tu nombre de usuario.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="profilePicture"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Foto de Pefil</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                Esta es la foto que se verá en tu perfil.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                Este es tu correo electrónico.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Guardar Información</Button>
            </form>
        </Form>
    );
};
export default ProfileForm;
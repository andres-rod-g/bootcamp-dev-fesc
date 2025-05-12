import type { FC } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { DialogClose } from "@radix-ui/react-dialog"

type Props = {};
const indexHeader: FC<Props> = ({}) => {
  return (
    <div className="flex w-full p-2 flex-row justify-between">
        <img src="/logo.svg" alt="" className=" flex h-[40px] w-[120px] object-cover" />

        <div className=" flex flex-row space-x-2">

          <Dialog>
            <DialogTrigger>
              <Button>Iniciar Sesión</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Iniciar Sesión</DialogTitle>
                <DialogDescription>
                  Introduce tus datos para poder ingresar a la plataforma
                </DialogDescription>

                <div className=" flex flex-col w-full space-y-2">
                  <Input placeholder="Correo" />
                  <Input placeholder="Contraseña" />
                </div>

                <DialogFooter>
                  <DialogClose>
                    <Button>Enviar</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogHeader>
            </DialogContent>
          </Dialog>


          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="w-10 h-10 cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

      </div>
  );
};
export default indexHeader;
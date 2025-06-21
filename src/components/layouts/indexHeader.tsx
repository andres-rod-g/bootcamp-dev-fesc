import { useState, type FC } from 'react';
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

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


import { Input } from "@/components/ui/input"
import { DialogClose } from "@radix-ui/react-dialog"
import { ShoppingCart } from 'lucide-react';
import type { Producto } from '../pages/ejemplo.page';

type Props = {
  cartInfo?: Producto[];
  setCartInfo: React.Dispatch<React.SetStateAction<Producto[]>>;
  removeElementFromCart: (productId: number) => void
};
const indexHeader: FC<Props> = ({ cartInfo = [], setCartInfo, removeElementFromCart }) => {


  return (
    <div className="flex w-full p-2 flex-row justify-between">
      <img src="/logo.svg" alt="" className=" flex h-[40px] w-[120px] object-cover" />

      <div className=" flex flex-row space-x-2">


        <Sheet>
          <SheetTrigger>
            <div className=' relative flex h-10 w-10 items-center justify-center rounded-full shadow-sm'>
              <ShoppingCart />
              {
                cartInfo !== undefined && cartInfo.length > 1 &&
                  <div className='flex w-4 h-4 rounded-full items-center justify-center text-xs absolute -bottom-1 -right-1 bg-red-500 text-white'>{cartInfo.length}</div>
              }
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Carrito de Compras</SheetTitle>
              <SheetDescription>Aute sunt ea laborum consectetur cupidatat irure. Quis ad ad reprehenderit consectetur enim culpa pariatur aliqua nulla anim aute nisi quis.</SheetDescription>
                <div className="flex flex-col space-y-4">
                  {
                cartInfo !== undefined && cartInfo.length === 0 ? (
                    <p className="text-center text-gray-500">Tu carrito está vacío</p>
                  ) : (
                    cartInfo.map((producto, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium">{producto.nombre}</h4>
                          <p className="text-sm text-gray-600">${producto.precio}</p>
                        </div>
                        <Button 
                          variant="destructive" 
                          size="sm"
                          onClick={() => removeElementFromCart(index)}
                        >
                          Eliminar
                        </Button>
                      </div>
                    ))
                  )}
                </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>

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
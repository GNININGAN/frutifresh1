"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User } from "lucide-react";

const LoginButton = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="border rounded-full w-[30px] h-[30px] items-center justify-center flex">
                <User/>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Historique</DropdownMenuItem>
                <DropdownMenuItem>Se Déconnecter</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default LoginButton;
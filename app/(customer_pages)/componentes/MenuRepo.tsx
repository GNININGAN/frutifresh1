"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AlignJustify, User } from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation"

const links = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Catalogue",
        href: "/about"
    },
    {
        name: "Menu",
        href: "/about"
    },
    {
        name: "Contact",
        href: "/contact"
    }
]
const MenuRepo = () => {
        const pathname = usePathname();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden absolute  w-[30px] h-[30px] items-center justify-center flex">
                <AlignJustify/>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {
                    links.map((items, index) => {
                        return (
                            <DropdownMenuItem key={index}>
                                 <Link  
                                href={items.href}
                                className={pathname == items.href ? "text-sm text-black font-black underline decoration-pink-500 decoration-4" : "hover:underline hover:decoration-4 hover:decoration-pink-500 text-sm text-gray-600"}
                                
                                >
                                {items.name}
                            </Link>
                            </DropdownMenuItem>
                           
                        );
                    })
                }
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default MenuRepo;
"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "antd"
import { ShoppingBasket } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {usePathname, useRouter} from "next/navigation"
import LoginButton from "./LoginButon"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import MenuRepo from "./MenuRepo"
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

const CustomerNavbar = () => {
    const pathname = usePathname();
    const router  = useRouter();
    const item = useSelector((state: RootState) => state.cart.items)
    const isAuth = useSelector((state: RootState) => state. auth.value.isAuth)
    return (
        <div className="px-4 md:px-[200px] py-5 flex items-center justify-between content-between ">
            {/** logo place */}
            <div>
                <Image src="/logo/logo.png" 
                alt="logo" 
                width={50} 
                height={50} 
                quality={100}
                priority
                className="hidden xl:flex object-cover content-center"
                />
            </div>

            {/** menu repon */}
            <MenuRepo />

            {/** menu place */}
            <div className="hidden md:flex gap-[32px]">
                {
                    links.map((items, index) => {
                        return (
                            <Link key={index} 
                                href={items.href}
                                className={pathname == items.href ? "text-sm text-black font-black underline decoration-pink-500 decoration-4" : "hover:underline hover:decoration-4 hover:decoration-pink-500 text-sm text-gray-600"}
                                
                                >
                                {items.name}
                            </Link>
                        );
                    })
                }
            </div>

            {/**search login and cart */}
            <div className="flex gap-[32px] items-center">
                <Input placeholder="Search plat" className="hidden md:flex rounded-xl w-[200px]" />

                <div onClick={() => {
                    router.push('/cart')
                }} className="w-[30px] h-[30px] bg-yellow-400  rounded-full items-center justify-center flex ">
                <Badge count={item.length} showZero style={{ backgroundColor: '#52c41a' }}>
                    <ShoppingBasket className="text-white "/>
                </Badge>
                    
                </div>
                {
                    isAuth ?
                    <LoginButton />
                    : 
                <Button onClick={() => {
                    router.push('/login')
                }} size={"sm"} className="bg-lime-600 rounded-xl " > Login</Button> 
                
                }
                
            </div>
        </div>
    )
}
export default CustomerNavbar;
"use client"
import Image from "next/image"
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
import { CirclePlus, SquareMinus, SquarePlus, ShoppingCart } from "lucide-react"
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast"
import { useDispatch } from "react-redux"
import { addProduct } from "@/redux/features/cart-slice"
import CartModel from "@/model/CartModel"
import { Datas } from "@/lib/utils"

interface Plat {
    id: number;
    price: number;
    image: string;
    name: string;
}

const AddToCartDialog = ({ id }: { id: number }) => {
    const [qte, setQte] = useState(1);
    const { toast } = useToast();
    const dispatch = useDispatch();
    const  [product, setProduct] = useState<Plat>();

//Suggested code may be subject to a license. Learn more: ~LicenseLog:3323359107.
    useEffect(() => {
        setProduct(Datas.selectElementById(Datas.plats, id));
    }, [])

    
    
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="bg-transparent border-0 " size={"sm"} >
                    <CirclePlus className="h-[20px] w-[20px]  " />
                </Button>
            </DialogTrigger>
            <DialogContent className="">
                <DialogHeader>
                    <DialogTitle>Ajouter le Produit au Panier</DialogTitle>
                    <DialogDescription>
                    </DialogDescription>
                </DialogHeader>
                <div className="flex md:flex-row items-center flex-col space-y-5 md:space-y-0 md:space-x-5">
                    <Image src={String(product?.image)}
                        alt="product"
                        width={250}
                        height={280}
                        priority
                        quality={100}
                        className="object-cover content-center  rounded-md"
                    />

                    <div className="flex flex-col space-y-5">
                        <div>
                            <h1 className="text-md font-bold">String(product.name)</h1>
                        <h1 className="text-[12px] text-gray-600 ">description</h1>
                        <h1 className="font-light text-[12px]">Prix <span className="font-bold text-red-600"> Number(product.price)</span> FCFA </h1>
                        </div>
                        

                        <div className="flex space-x-7 w-full items-center justify-center">
                            <Button  onClick={() => {
                                if (qte > 1 ) {
                                    setQte(qte-1)
                                }
                                
                            }} type="button" size="icon" className="bg-transparent ">
                                <SquareMinus className="text-black"/>
                            </Button>


                            <h1 className="text-2xl font-black">{qte}</h1>

                            <Button onClick={() => {
                                setQte(qte+1)
                            }}  type="button" size="icon" className="bg-transparent ">
                                <SquarePlus className="text-black"/>
                            </Button>

                        </div>

                        <DialogClose asChild>
                            <Button onClick={() => {
                                  const modelCart = new CartModel(Number(product?.id), String(product?.name), String(product?.image), Number(product?.price), Number(Number(product?.price) * qte), qte);
                                  dispatch(addProduct(modelCart));
                                  setQte(1);
                                  toast({
                                      title: "Panier",
                                      description: "Article ajouté au panier!!",
                                  })
                                toast({
                                    title: "Le produit à été ajouter au panier",
                                    description: "Merci de continuer votre course"
                                })
                            }} type="button" size="sm" className="text-white self-center hover:bg-lime-400 active:bg-lime-400 flex space-x-3 bg-lime-700" variant="secondary">
                                <h1>Ajouter au panier</h1>
                                <ShoppingCart />
                            </Button>
                        </DialogClose>
                    </div>
                </div>
               
            </DialogContent>
        </Dialog>
    );
}
export default AddToCartDialog;
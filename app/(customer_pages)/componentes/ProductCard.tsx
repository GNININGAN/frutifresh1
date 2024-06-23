"use client"
import Image from "next/image"
import AddToCartDialog from "./AddToCartDialog";
interface PropsInterf {
    imageUrl: string,
    name: string,
    price: string,
    id: number,

}
const ProductCard = ({imageUrl,
    name,
    price,
    id}: PropsInterf ) => {
    return(
        <div className="flex flex-col space-y-3  w-[200px] h-auto bg-gray-100 rounded-md ">
            <Image src={imageUrl} 
            alt="product" 
            width={200} 
            height={150} 
            priority
            quality={100}
            className="object-cover h-[150px] bg-cover rounded-md"
            />
            <div className="flex flex-col space-y-2 m-3">
                <h1 className="font-black">{name}</h1>

                <div className="flex justify-between content-between items-center">
                <h1 className="font-light text-[12px]">Prix <span className="font-bold text-red-600"> {price} </span> FCFA </h1>
                <AddToCartDialog id={id}/>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;

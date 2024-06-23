import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export class Datas {
  static  selectElementById(plats: any[], id: number){
    return plats.find(plat => plat.id === id);
}
  static plats = [
    {
      id: 1,
      price: 2000,
      image: "/images/02.jpg",
      name: "Mi Quang:",
      description: "Mi Quang is a frangant and confronting is a frangant and confronting "
    },
    {
      id: 2,
      price: 3000,
      image: "/images/08.jpg",
      name: "Mi Quang:",
      description: "Mi Quang is a frangant and confronting is a frangant and confronting "
    },
    {
      id: 3,
      price: 3000,
      image: "/images/04.jpg",
      name: "Mi Quang:",
      description: "Mi Quang is a frangant and confronting is a frangant and confronting "
    },
    {
      id: 4,
      price: 4000,
      image: "/images/06.jpg",
      name: "Mi Quang:",
      description: "Mi Quang is a frangant and confronting is a frangant and confronting "
    },
  ]
}
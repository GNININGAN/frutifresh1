"use client"
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";
import ProductCard from "./componentes/ProductCard";

const plats = [
  {
    image: "/images/02.jpg",
    name: "Mi Quang:",
    description: "Mi Quang is a frangant and confronting is a frangant and confronting "
  },
  {
    image: "/images/08.jpg",
    name: "Mi Quang:",
    description: "Mi Quang is a frangant and confronting is a frangant and confronting "
  },
  {
    image: "/images/04.jpg",
    name: "Mi Quang:",
    description: "Mi Quang is a frangant and confronting is a frangant and confronting "
  },
  {
    image: "/images/06.jpg",
    name: "Mi Quang:",
    description: "Mi Quang is a frangant and confronting is a frangant and confronting "
  },
]

export default function Home() {
  return (
    <main className="flex flex-col space-y-10">
      {/** section 1 */}
      <div>
        <h1 className="md:text-7xl text-3xl font-black ">
          "Explorer les délices de la cuisine faite a base des fruits"
        </h1>

        <div className="flex flex-col space-y-5 xl:space-y-0 xl:space-x-5 xl:flex-row xl:justify-between xl:content-between xl:items-center">
          <Image src={"/images/04.jpg"}
            width={600}
            height={300}
            alt={""}
            className="rounded-3xl object-cover content-center"
          />

          <div className="flex flex-col gap-4">
            {
              plats.map((items, index) => {
                return (
                  <div key={index} className="flex space-x-3">
                    <Image src={items.image}
                      width={50}
                      height={50}
                      alt={""}
                      className="rounded-md object-cover content-center"
                    />

                    <div>
                      <h1 className=""> {items.name} </h1>
                      <h1 className="text-gray-600 text-[12px]"> {items.description} </h1>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

      </div>

      {/** section 2 top categorie */}
      <section>
        <h1 className="text-xl font-bold">Nos Top Catégories</h1>
        <Tabs defaultValue="account" className="w-full">
          <TabsList>
            <TabsTrigger value="account">Plats</TabsTrigger>
            <TabsTrigger value="password">Boissons</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className="grid grid-cols-1 md:grid-cols-3  xl:grid-cols-4 gap-4"> 
              {
                plats.map((items, index) => {
                  return (
                    <div key={index}>
                      <ProductCard imageUrl={"/images/04.jpg"} name={items.name} price={"5000"} id={index} />
                    </div>
                  )
                })
              }
            </div>
          </TabsContent>

          <TabsContent value="password">
          <div className="grid grid-cols-1 md:grid-cols-3  xl:grid-cols-4 gap-4"> 
              {
                [1,2,3,4].map((items, index) => {
                  return (
                    <div key={index}>
                      <ProductCard imageUrl={"/images/02.jpg"} name={"product Name"} price={"5000"} id={0} />
                    </div>
                  )
                })
              }
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/** section 3 chief */}

      {/** section 4 reserve place */}


    </main>
  );
}

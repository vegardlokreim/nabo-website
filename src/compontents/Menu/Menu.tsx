import { useState } from "react";
import MenuItem from "./MenuItem";

export default function Menu({ menuData, title, description, backgroundImage }: { menuData: Array<any>, title: string, description: string, backgroundImage: string }) {

    return (
        <div className="flex flex-col w-[100%]">
            <div className="relative bg-cover bg-center bg-no-repeat h-[25vh] rounded-[200px]">
                <img src={backgroundImage} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover rounded-[20px]" />
                <div className="absolute inset-0 bg-black opacity-50 rounded-[20px]"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-9 ">
                    <h2 className="text-4xl font-bold text-white">{title}</h2>
                    <p className="mt-4 text-lg text-white">{description}</p>

                </div>
            </div >


            <div className="flex flex-col gap-8 px-2 py-4">
                {
                    menuData.map(item => (
                        <MenuItem
                            key={item.menuItemId} // Add a key for each item
                            menuItemId={item.menuItemId}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            allergens={item.allergens}
                        />
                    ))
                }
            </div>
        </div >
    )
}
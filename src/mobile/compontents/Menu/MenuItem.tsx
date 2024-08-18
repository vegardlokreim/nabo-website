import { useState } from "react";

interface MenuItemProps {
    menuItemId: string,
    name: string,
    description: string,
    price: number,
    allergens: string[]
}

function MenuItem({ menuItemId, name, description, price, allergens }: MenuItemProps) {

    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="flex flex-col gap-4">
            {/* menu item id, name and price */}
            <div className="flex justify-between w-[100%] items-start gap-8">
                <div className="flex flex-col items-start gap-2 tracking-wide text-lg font-medium" >
                    <h3 className="text-lg">{menuItemId}. {name}</h3>
                    <p className="text-sm">{price} kr - inneholder: ({allergens.join(', ')})</p>
                    <p className="text-sm">{description} </p>
                </div>


                <div className="counter flex items-center">
                    <button onClick={handleDecrement} className="bg-gray-300 text-black rounded-full w-7 h-7 flex items-center justify-center">
                        -
                    </button>
                    <span className="mx-2">{quantity}</span>
                    <button onClick={handleIncrement} className="bg-gray-300 text-black rounded-full w-7 h-7 flex items-center justify-center">
                        +
                    </button>
                </div>
            </div>
        </div>
    )

}

export default MenuItem;
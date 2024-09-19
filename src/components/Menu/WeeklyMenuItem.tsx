import { useDispatch, useSelector } from "react-redux"
import { RootState } from '../../redux/store/store';  // Adjust the path based on your structure
import { addItem } from "../../redux/features/order/orderSlice";


interface WeeklyMenuItemProps {
    title: string
    price: number
    description: string
    prefix: string
    allergens: string[]
    id: string
    order: number | string

}

export default function WeeklyMenuItem({ title, price, description, prefix, allergens, id, order }: WeeklyMenuItemProps) {

    const dispatch = useDispatch();

    // Get the current quantity of this item from the store
    const item = useSelector((state: RootState) =>
        state.order.items.find(item => item.menuItemId === id)
    );
    const quantity = item ? item.quantity : 0;

    const handleIncrement = () => {
        dispatch(addItem({
            menuItemId: id,
            price,
            quantity: 1,
            title,
            description,
            category: 'weekly'
        }));
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            dispatch(addItem({
                menuItemId: id,
                price,
                quantity: -1,
                title,
                description,
                category: "weekly"
            }));
        }
    };
    const today = new Date()

    return (
        <div className="flex flex-col uppercase mb-8 justify-center items-center gap-2">
            <p className="text-[20px] font-extrabold">{prefix}. {title}</p>
            <p className="text-[14px] font-semibold">{description}</p>
            <p className="text-xl">kr {price},-</p>
            {allergens.length > 0 && <p className="text-[10px] text-red-900 lowercase">inneholder: {allergens.map(allergen => {
                if (allergen == 'sk') return 'skalldyr'
                if (allergen == 'bl') return 'bløtdyr'
                if (allergen == 'f') return 'fisk'
                if (allergen == 'e') return 'egg'
                if (allergen == 'gh') return 'gluten'
                if (allergen == 'so') return 'soya'
                if (allergen == 'se') return 'sesam'
                if (allergen == 'cn') return 'cashewnøtter'
                if (allergen == 'lu') return 'lupin'
                if (allergen == 'p') return 'peanøtter'
                if (allergen == 'mn') return 'mandler'
                if (allergen == 'm') return 'melk'
            }).join(', ')}</p>}

            {
                today.getDay() === order ?
                    <div className="counter flex items-center mt-4">
                        <button
                            onClick={handleDecrement}
                            className="bg-gray-300 text-black rounded-full w-7 h-7 flex items-center justify-center"
                        >
                            -
                        </button>
                        <span className="mx-2">{quantity}</span>
                        <button
                            onClick={handleIncrement}
                            className="bg-gray-300 text-black rounded-full w-7 h-7 flex items-center justify-center"
                        >
                            +
                        </button>
                    </div>
                    :
                    ''
            }

        </div>
    )



}
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store/store';  // Adjust the path based on your structure
import { addItem } from '../../redux/features/order/orderSlice';

interface MenuItemProps {
    menuItemId: string;
    name: string;
    description: string;
    price: number;
    allergens: string[];
}

function MenuItem({ menuItemId, name, description, price, allergens }: MenuItemProps) {
    const dispatch = useDispatch();

    // Get the current quantity of this item from the store
    const item = useSelector((state: RootState) =>
        state.order.items.find(item => item.menuItemId === menuItemId)
    );
    const quantity = item ? item.quantity : 0;

    const handleIncrement = () => {
        dispatch(addItem({
            menuItemId,
            price,
            quantity: 1,
            title: name,
            description
        }));
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            dispatch(addItem({
                menuItemId,
                price,
                quantity: -1,
                title: name,
                description
            }));
        }
    };

    return (
        <div className="flex flex-col border-b-2 border-b-slate-200 py-8 px-4">
            {/* Menu item id, name, and price */}
            <div className="flex justify-between w-full items-start gap-8">
                <div className="flex flex-col items-start gap-2 tracking-wide text-lg font-medium">
                    <h3 className="text-sm">{menuItemId}. {name}</h3>
                    <p className="text-xs">kr {price},-</p>
                    <p className="text-sm">{description}</p>
                    <p className="text-sm">inneholder: ({allergens.join(', ')})</p>
                </div>

                <div className="counter flex items-center">
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
            </div>
        </div>
    );
}

export default MenuItem;

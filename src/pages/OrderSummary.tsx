import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store/store';
import { selectOrderItems, selectSubtotal, clearOrder } from '../redux/features/order/orderSlice';

const OrderSummary: React.FC = () => {
    const dispatch = useDispatch();
    // Retrieve order items and subtotal from the Redux store
    const items = useSelector((state: RootState) => selectOrderItems(state.order));
    const subtotal = useSelector((state: RootState) => selectSubtotal(state.order));

    // Handler function to clear the order items
    const handleClearOrder = () => {
        dispatch(clearOrder());
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Send bestilling</h1>

            {/* Display order items */}
            {items.length === 0 ? (
                <p>Ingenting å vise</p>
            ) : (
                <div>
                    <ul className="list-none p-0">
                        {items.map(item => (
                            <li key={item.menuItemId} className="flex justify-between py-2 border-b">
                                <span className="font-medium">{item.title}</span> {/* Display item title */}
                                <span>{item.quantity} x {item.price} kr</span>
                                <span>{item.quantity * item.price} kr</span>
                            </li>
                        ))}
                    </ul>

                    {/* Display subtotal */}
                    <div className="flex justify-between mt-4 font-bold">
                        <span>Subtotal:</span>
                        <span>{subtotal} kr</span>
                    </div>

                    {/* Button to clear order */}
                    <button
                        onClick={handleClearOrder}
                        className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
                    >
                        Tøm ordrelisten
                    </button>
                </div>
            )}
        </div>
    );
};

export default OrderSummary;

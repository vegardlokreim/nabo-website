import { useSelector } from 'react-redux';
import Logo from '../assets/nabo_logo.png';
import { RootState } from '../redux/store/store';
import { selectTotalItems, selectSubtotal } from '../redux/features/order/orderSlice';

export default function Header() {
    // Retrieve the total items and subtotal from the Redux store
    const totalItems = useSelector((state: RootState) => selectTotalItems(state.order));
    const subtotal = useSelector((state: RootState) => selectSubtotal(state.order));

    return (
        <header className="flex items-center justify-between bg-white p-4 sticky top-0 z-10">
            <img src={Logo} className="h-8" />

            {/* Order item count and subtotal display */}
            <div className="flex items-center gap-4 ml-auto">
                <a href="/bestill">
                    <span className="text-gray-800 text-sm font-medium">
                        Items: {totalItems}
                    </span>
                    <span className="text-gray-800 text-sm font-medium">
                        Subtotal: {subtotal} kr
                    </span>
                </a>
            </div>
        </header>
    );
}

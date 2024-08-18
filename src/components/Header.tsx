import { useSelector } from 'react-redux';
import Logo from '../assets/nabo_logo.png';
import { RootState } from '../redux/store/store';
import { selectTotalItems, selectSubtotal } from '../redux/features/order/orderSlice';

export default function Header() {
    // Retrieve the total items and subtotal from the Redux store
    const totalItems = useSelector((state: RootState) => selectTotalItems(state.order));
    const subtotal = useSelector((state: RootState) => selectSubtotal(state.order));

    return (
        <header
            className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4f2f0] px-10 py-3">
            <div className="flex items-center gap-4 text-[#181411]">
                <img src={Logo} className="w-[130px]" />
            </div>
            <div className="flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                    <a className="text-[#181411] text-sm font-medium leading-normal" href="/">Home</a>
                    <a className="text-[#181411] text-sm font-medium leading-normal" href="/meny">Meny</a>
                    <a className="text-[#181411] text-sm font-medium leading-normal" href="/om-oss">Om oss</a>
                    <a className="text-[#181411] text-sm font-medium leading-normal" href="/kontakt">Kontakt</a>
                </div>

                {/* Order item count and subtotal display */}
                <div className="flex items-center gap-4">
                    <a href="/bestill">
                        <span className="text-[#181411] text-sm font-medium">
                            Items: {totalItems}
                        </span>
                        <span className="text-[#181411] text-sm font-medium">
                            Subtotal: {subtotal} kr
                        </span>
                    </a>
                </div>
            </div>
        </header>
    )
}

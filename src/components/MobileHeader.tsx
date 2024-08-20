import { useSelector } from 'react-redux';
import Logo from '../assets/nabo_logo.png';
import { RootState } from '../redux/store/store';
import { selectTotalItems } from '../redux/features/order/orderSlice';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    const totalItems = useSelector((state: RootState) => selectTotalItems(state.order));
    const navigate = useNavigate();

    const handleOrderNow = () => {
        navigate('/bestill'); // Navigate to the order page
    };

    return (
        <header className="flex items-center justify-between bg-white p-4 sticky top-0 z-10 shadow-md">
            <Link to="/">
                <img src={Logo} className="h-8" alt="Nabo Logo" />
            </Link>

            {totalItems > 0 && (
                <div className="flex items-center gap-4 ml-auto">
                    <button
                        onClick={handleOrderNow}
                        className="bg-[#B2212B] text-white py-2 px-4 rounded-lg font-medium hover:bg-red-600 transition"
                    >
                        Fullfør bestilling
                    </button>
                    <Link to="bestill">
                        <div className="relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-9 h-9 text-gray-800"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m15.6 0H21m-4 12a2 2 0 11-4 0 2 2 0 014 0zm-10 0a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            <span className="absolute -top-2 -right-2 bg-[#B2212B] text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                                {totalItems}
                            </span>
                        </div>
                    </Link>


                </div>
            )}
        </header>
    );
}

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageContainer from '../components/PageContainer';
import { clearOrder, selectOrderItems, selectSubtotal, updateItemQuantity } from '../redux/features/order/orderSlice';
import { RootState } from '../redux/store/store';

const OrderSummary: React.FC = () => {
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => selectOrderItems(state.order));
    const subtotal = useSelector((state: RootState) => selectSubtotal(state.order));

    // Retrieve orderType from localStorage or default to null
    const [orderType, setOrderType] = useState<'home' | 'table' | null>(() => {
        const savedOrderType = localStorage.getItem('orderType');
        return savedOrderType ? (savedOrderType as 'home' | 'table') : null;
    });
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [note, setNote] = useState('');
    const [pickupTime, setPickupTime] = useState('');
    const [tableNumber, setTableNumber] = useState('');

    // Save orderType to localStorage whenever it changes
    useEffect(() => {
        if (orderType) {
            localStorage.setItem('orderType', orderType);
        } else {
            localStorage.removeItem('orderType');
        }
    }, [orderType]);

    const handleClearOrder = () => {
        const confirmed = window.confirm('Er du sikker på at du vil slette alt?');
        if (confirmed) {
            dispatch(clearOrder());
            localStorage.removeItem('orderType'); // Clear orderType from localStorage
            setOrderType(null); // Reset orderType in state
        }
    };

    const handleIncrementQuantity = (menuItemId: string) => {
        dispatch(updateItemQuantity({ menuItemId, quantity: 1 }));
    };

    const handleDecrementQuantity = (menuItemId: string) => {
        dispatch(updateItemQuantity({ menuItemId, quantity: -1 }));
    };

    const handleOrderSubmit = () => {
        const confirmed = window.confirm('Vil du utføre bestilling?');
        if (confirmed) {
            if (orderType === 'home') {
                console.log({ name, phone, note, pickupTime });
                // Here you would dispatch or handle the information for a pickup order.
            } else if (orderType === 'table') {
                console.log({ tableNumber });
                // Here you would dispatch or handle the information for a table order.
            }
            localStorage.removeItem('orderType'); // Clear orderType from localStorage
            setOrderType(null); // Reset orderType in state
            dispatch(clearOrder());
        }


    };

    return (
        <PageContainer>
            <h1 className="text-2xl font-bold mb-4">Send bestilling</h1>

            {items.length === 0 ? (
                <p>Ingenting å vise</p>
            ) : (
                <div>
                    {items.map(item => (
                        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between" key={item.menuItemId}>
                            <div className="flex flex-col justify-center">
                                <p className="text-[#181211] text-base font-medium leading-normal line-clamp-1">{item.title}</p>
                                <p className="text-[#886963] text-sm font-normal leading-normal line-clamp-2">
                                    {item.description}
                                </p>
                            </div>
                            <div className="shrink-0">
                                <div className="flex items-center gap-2 text-[#181211]">
                                    <button
                                        className="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-[#f4f1f0] cursor-pointer"
                                        onClick={() => handleDecrementQuantity(item.menuItemId)}
                                    >
                                        -
                                    </button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <button
                                        className="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-[#f4f1f0] cursor-pointer"
                                        onClick={() => handleIncrementQuantity(item.menuItemId)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
                        <p className="text-[#181211] text-base font-normal leading-normal flex-1 truncate">Sum</p>
                        <div className="shrink-0"><p className="text-[#181211] text-base font-normal leading-normal">{subtotal} kr</p></div>
                    </div>

                    <div className="flex justify-center gap-4 mb-4">
                        <button
                            onClick={() => setOrderType('home')}
                            className={`flex-1 py-2 px-4 rounded-full text-sm font-medium ${orderType === 'home' ? 'bg-red-500 text-white' : 'bg-[#EEEEEE] text-black'}`}
                        >
                            Bestill for henting
                        </button>
                        <button
                            onClick={() => setOrderType('table')}
                            className={`flex-1 py-2 px-4 rounded-full text-sm font-medium ${orderType === 'table' ? 'bg-red-500 text-white' : 'bg-[#EEEEEE] text-black'}`}
                        >
                            Bestill til bordet
                        </button>
                    </div>

                    {orderType === 'home' && (
                        <div className="flex flex-col gap-4 mt-4">
                            <input
                                placeholder="Navn"
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-black focus:outline-0 focus:ring-0 border border-[#E0E0E0] bg-[#FFFFFF] focus:border-[#E0E0E0] h-14 placeholder:text-neutral-500 p-[15px] text-base font-normal leading-normal"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <input
                                placeholder="Telefon"
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-black focus:outline-0 focus:ring-0 border border-[#E0E0E0] bg-[#FFFFFF] focus:border-[#E0E0E0] h-14 placeholder:text-neutral-500 p-[15px] text-base font-normal leading-normal"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />

                            <textarea
                                placeholder="Merknad til restauranten"
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-black focus:outline-0 focus:ring-0 border border-[#E0E0E0] bg-[#FFFFFF] focus:border-[#E0E0E0] min-h-36 placeholder:text-neutral-500 p-[15px] text-base font-normal leading-normal"
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                            ></textarea>
                            <input
                                placeholder="Ønsket hentetidspunkt"
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-black focus:outline-0 focus:ring-0 border border-[#E0E0E0] bg-[#FFFFFF] focus:border-[#E0E0E0] h-14 placeholder:text-neutral-500 p-[15px] text-base font-normal leading-normal"
                                value={pickupTime}
                                onChange={(e) => setPickupTime(e.target.value)}
                            />
                        </div>
                    )}

                    {orderType === 'table' && (
                        <div className="flex flex-col gap-4 mt-4">
                            <label>
                                <input
                                    placeholder="Bordnummer"
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-black focus:outline-0 focus:ring-0 border border-[#E0E0E0] bg-[#FFFFFF] focus:border-[#E0E0E0] h-14 placeholder:text-neutral-500 p-[15px] text-base font-normal leading-normal"
                                    value={tableNumber}
                                    onChange={(e) => setTableNumber(e.target.value)}
                                />
                            </label>
                        </div>
                    )}

                    {orderType !== null && (
                        <div className="flex justify-stretch">
                            <div className="flex flex-1 gap-3 flex-wrap justify-between">
                                <button
                                    onClick={handleOrderSubmit}
                                    className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
                                >
                                    <span className="truncate">Send bestilling</span>
                                </button>
                                <button
                                    onClick={handleClearOrder}
                                    className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
                                >
                                    Slett alt
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </PageContainer>
    );
};

export default OrderSummary;

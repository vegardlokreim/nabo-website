import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageContainer from '../components/PageContainer';
import { clearOrder, selectOrderItems, selectSubtotal, updateItemQuantity } from '../redux/features/order/orderSlice';
import { RootState } from '../redux/store/store';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "dayjs/locale/nb";  // Norwegian locale import

import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

type RequestBody = {
    type: 'home' | 'table' | null,
    items: Array<MenuItem>
    user?: {
        name: string,
        phone: string,
        message: string,
        pickuptime: string
    },
    tableNumber?: number | string
}

export interface MenuItem {
    menuItemId: string;
    price: number;
    quantity: number;
    title: string;
    description: string;
}

const OrderSummary: React.FC = () => {
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => selectOrderItems(state.order));
    const subtotal = useSelector((state: RootState) => selectSubtotal(state.order));

    const navigate = useNavigate();


    // Retrieve orderType from localStorage or default to null
    const [orderType, setOrderType] = useState<'home' | 'table' | null>(() => {
        const savedOrderType = localStorage.getItem('orderType');
        return savedOrderType ? (savedOrderType as 'home' | 'table') : 'home';
    });
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [note, setNote] = useState('');
    const [tableNumber, setTableNumber] = useState('');

    const today = dayjs().format('DD-MM-YYYY');
    const hourNow = new Date().getHours()
    const minuteNow = new Date().getMinutes()
    const [time, setTime] = useState<Dayjs | null>(dayjs().hour(hourNow >= 14 ? (minuteNow > 40 ? hourNow + 1 : hourNow) : 14).minute(hourNow >= 14 ? (minuteNow > 40 ? (minuteNow - 40) : minuteNow + 20) : 20));

 
    const [errors, setErrors] = useState({
        name: "",
        phone: "",
        note: "",
        date: "",
        time: ""
    });


    const [isLoading, setIsLoading] = useState(false);

    const handleTimeChange = (newValue: Dayjs | null) => {
        setTime(newValue)

    }


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

    const validateForm = () => {
        const newErrors = { name: "", phone: "", note: "", date: "", time: "" };
        let isValid = true;

        // Remove all whitespace from the phone number
        const trimmedPhoneNumber = phone.replace(/\s+/g, "");

        if (!name.trim()) {
            newErrors.name = "Navn er påkrevd";
            isValid = false;
        }

        if (
            !trimmedPhoneNumber ||
            !/^\d{8}$/.test(trimmedPhoneNumber) ||    // Check if it is 8 digits long
            /^(.)\1{7}$/.test(trimmedPhoneNumber) ||  // Avoid repetitive numbers like 11111111
            !/^[49]\d{7}$/.test(trimmedPhoneNumber)   // Ensure it starts with 4 or 9
        ) {
            newErrors.phone = "Telefonnummer må være et gyldig norsk mobilnummer, 8 siffer";
            isValid = false;
        }


        if (!time) {
            newErrors.time = "Klokkeslett er påkrevd";
            isValid = false;
        }



        setErrors(newErrors);
        return isValid;
    };

    const handleOrderSubmit = async () => {
        if (!validateForm()) {
            return;
        }
        const confirmed = window.confirm('Vil du utføre bestilling?');
        if (confirmed) {
            setIsLoading(true)
            try {
                const requestBody: RequestBody = {
                    type: orderType,
                    items,
                    ...(orderType === 'home' && {
                        user: {
                            name,
                            phone: phone.replace(/\s+/g, ""),
                            pickuptime: today + ' - kl: ' + time?.hour() + ":" + time?.minute(),
                            message: note,
                        }
                    }),
                    ...(orderType === 'table' && {
                        tableNumber: tableNumber
                    })
                };

                const order = await axios.post('https://us-central1-naborestaurant-d4228.cloudfunctions.net/createOrder', requestBody)

                // Clear localStorage and state after successful submission
                localStorage.removeItem('orderType');
                setOrderType(null);
                dispatch(clearOrder());
                setIsLoading(false)
                navigate(`/received-order/${order.data.id}`)


            } catch (error) {
                console.error('Error placing order:', error);
                alert('There was an error placing your order. Please try again.');
            }
        }
    };


    return (
        <PageContainer>
            <h1 className="text-2xl font-bold mb-4">Send bestilling</h1>

            {isLoading && (
                <div className="flex justify-center items-center min-h-[200px]">
                    <h2>Sender ordre, vennligst vent</h2>
                </div>
            )}

            {!isLoading && (
                <div>
                    {items.length === 0 ? (
                        <p>Handlekurven er tom</p>
                    ) : (
                        <div className="mb-16">
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

                            <div className="flex items-center gap- bg-white px-4 min-h-14 justify-between">
                                <p className="text-[#181211] text-base font-normal leading-normal flex-1 truncate">Sum</p>
                                <div className="shrink-0"><p className="text-[#181211] text-base font-normal leading-normal">{subtotal} kr</p></div>
                            </div>

                            {orderType === 'home' && (
                                <div className="flex flex-col mt-4">
                                    <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                                        <label className="flex flex-col min-w-40 flex-1">
                                            <p className="text-[#181211] text-base font-medium leading-normal pb-2">Navn</p>
                                            <input
                                                name="name"
                                                placeholder="Navn"
                                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181211] focus:outline-0 focus:ring-0 border-none bg-[#f4f1f0] focus:border-none h-14 placeholder:text-[#886963] p-4 text-base font-normal leading-normal"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                        </label>
                                    </div>
                                    <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                                        <label className="flex flex-col min-w-40 flex-1">
                                            <p className="text-[#181211] text-base font-medium leading-normal pb-2">Telefon</p>
                                            <input
                                                name="phone"
                                                placeholder="Telefonnummer"
                                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181211] focus:outline-0 focus:ring-0 border-none bg-[#f4f1f0] focus:border-none h-14 placeholder:text-[#886963] p-4 text-base font-normal leading-normal"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                                        </label>
                                    </div>
                                    <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                                        <label className="flex flex-col min-w-40 flex-1">
                                            <p className="text-[#181211] text-base font-medium leading-normal pb-2">Dato</p>
                                            <p className="text-[#181211] text-base font-medium leading-normal pb-2">Hente en annen dato? <span className="underline"><a href="/kontakt">Kontakt oss</a></span> eller ring oss.</p>

                                            <input
                                                name="phone"
                                                placeholder="Dato"
                                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181211] focus:outline-0 focus:ring-0 border-none bg-[#f4f1f0] focus:border-none h-14 placeholder:text-[#886963] p-4 text-base font-normal leading-normal"
                                                value={today}

                                            />
                                        </label>

                                    </div>
                                    <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                                        <label className="flex flex-col min-w-40 flex-1">
                                            <p className="text-[#181211] text-base font-medium leading-normal pb-2">Melding til restauranten</p>
                                            <textarea
                                                name="note"
                                                placeholder="Melding til restauranten"
                                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181211] focus:outline-0 focus:ring-0 border-none bg-[#f4f1f0] focus:border-none h-14 placeholder:text-[#886963] p-4 text-base font-normal leading-normal"
                                                value={note}
                                                onChange={(e) => setNote(e.target.value)}
                                            ></textarea>

                                        </label>
                                    </div>
                                    <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                                        <label className="flex flex-col min-w-40 flex-1">
                                            <p className="text-[#181211] text-base font-medium leading-normal pb-2">Ønsket hentetidspunkt</p>
                                            <p className="text-[#181211] text-base font-medium leading-normal pb-2">PS: Vi trenger minimum 20 minutter fra bestillingen mottas. Når vi har bekreftet ordren vil du motta en sms med tilgjengelig hentetidspunkt</p>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <TimePicker
                                                    value={time}
                                                    onChange={handleTimeChange}
                                                    ampm={false}
                                                    minTime={dayjs().hour(hourNow >= 14 ? (minuteNow > 40 ? hourNow + 1 : hourNow) : 14).minute(hourNow >= 14 ? (minuteNow  > 40 ? (minuteNow - 40) : minuteNow + 20) : 20)}
                                                    maxTime={dayjs().hour(21).minute(50)}
                                                    timeSteps={{ hours: 1, minutes: 1 }}
                                                />
                                                {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
                                            </LocalizationProvider>

                                        </label>
                                    </div>
                                </div>
                            )}

                            {orderType === 'table' && (
                                <div className="flex flex-col gap-4 mt-4">
                                    <label>
                                        <input
                                            placeholder="Bordnummer"
                                            type='number'
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-black focus:outline-0 focus:ring-0 border border-[#E0E0E0] bg-[#FFFFFF] focus:border-[#E0E0E0] h-14 placeholder:text-neutral-500 p-[15px] text-base font-normal leading-normal"
                                            value={tableNumber}
                                            onChange={(e) => setTableNumber(e.target.value)}
                                        />
                                    </label>
                                </div>
                            )}

                            {orderType !== null && (
                                <div className="flex justify-stretch mt-4">
                                    <div className="flex flex-1 gap-3 flex-wrap justify-between">
                                        <button
                                            onClick={handleOrderSubmit}
                                            className={'flex-1 py-2 px-4 rounded-full text-sm font-medium bg-[#B2212B] text-white'}
                                        >
                                            <span className="truncate">Send bestilling</span>
                                        </button>
                                        <button
                                            onClick={handleClearOrder}
                                            className={'flex-1 py-2 px-4 rounded-full text-sm font-medium bg-[#B2212B] text-white'}
                                        >
                                            Slett alt
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )
            }
        </PageContainer >
    );




};

export default OrderSummary
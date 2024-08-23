import { useParams } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import { MenuItem } from "./OrderSummary";
import { useEffect, useState } from "react";
import axios from "axios";

export type CreateOrderRequestBody = {
    type: 'home' | 'table',
    items: Array<MenuItem>,
    user?: {
        name: string,
        phone: string,
        message: string,
        pickuptime: string
    },
    tableNumber?: number | string
}

export type FirestoreOrder = CreateOrderRequestBody & {
    id: string,
    isConfirmed: boolean,
}

function ConfirmOrderPage() {
    const { id } = useParams();

    // State to manage loading, order data, and errors
    const [loading, setLoading] = useState<boolean>(true);
    const [order, setOrder] = useState<FirestoreOrder | null>(null);
    const [error, setError] = useState<string | null>(null);

    // State to manage message selection and custom message
    const [selectedMessage, setSelectedMessage] = useState<string>('Din levering er klar for henting om 20 minutter');
    const [customMessage, setCustomMessage] = useState<string>('');

    async function handleConfirm() {
        setLoading(true); // Start loading when confirm button is clicked
        setError(null); // Reset any previous error

        // Determine the message to send
        const messageToSend = selectedMessage === 'custom' ? customMessage : selectedMessage;

        try {
            await axios.post('https://us-central1-naborestaurant-d4228.cloudfunctions.net/confirmOrder', { id, message: messageToSend });
            setOrder(prev => prev ? { ...prev, isConfirmed: true } : null);
        } catch (error) {
            setError("Failed to confirm the order. Please try again.");
        } finally {
            setLoading(false); // Stop loading after the request is complete
        }
    }

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await axios.post('https://us-central1-naborestaurant-d4228.cloudfunctions.net/getOneOrder', { id });
                setOrder(response.data.data);
            } catch (error) {
                setError("Feil med lasting av ordre... prøv igjen senere");
            } finally {
                setLoading(false); // Stop loading after the order is fetched
            }
        };

        fetchOrder();
    }, [id]);

    if (loading) return <h1>Laster, vennligst vent...</h1>;
    if (error) return <h1>{error}</h1>;
    if (order?.isConfirmed) return <h1>Ordren er bekreftet</h1>;

    return (
        <PageContainer>
            <div className="flex flex-col gap-4">
                <h1 className="text-xl font-bold">Bekreft reservasjon</h1>
                <p>
                    Navn: {order?.user?.name}
                </p>
                <p>
                    telefon: {order?.user?.phone}
                </p>
                <h3 className="font-bold">Bestilling:</h3>
                <ul>
                    {
                        order?.items.map(item => <p key={item.title}>{item.title} x {item.quantity}</p>)
                    }
                </ul>
                <p>
                    Melding fra kunde:<br /> {order?.user?.message}
                </p>
                <p>
                    Ønsket hentetidspunkt:<br /> {order?.user?.pickuptime}
                </p>
            </div>



            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-[#181211] text-base font-medium leading-normal pb-2">Melding</p>
                    <select
                        value={selectedMessage}
                        onChange={(e) => setSelectedMessage(e.target.value)}
                        className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181211] focus:outline-0 focus:ring-0 border-none bg-[#f4f1f0] focus:border-none h-14 placeholder:text-[#886963] p-4 text-base font-normal leading-normal"
                    >
                        <option value="Din levering er klar for henting om 20 minutter">Din levering er klar for henting om 20 minutter</option>
                        <option value="Din levering er klar for henting om 30 minutter">Din levering er klar for henting om 30 minutter</option>
                        <option value={`Din levering er klar for henting kl ${order?.user?.pickuptime?.split('-')[1].trim()}`}>Din levering er klar for henting kl {order?.user?.pickuptime?.split('-')[1].trim()} </option>
                        <option value="custom">Skriv en melding til kunden</option>
                    </select>
                </label>
            </div>

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">


                <label className="flex flex-col min-w-40 flex-1">
                    {selectedMessage === 'custom' && (

                        <textarea
                            placeholder="Skriv en melding til kunden"
                            value={customMessage}
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181211] focus:outline-0 focus:ring-0 border-none bg-[#f4f1f0] focus:border-none min-h-36 placeholder:text-[#886963] p-4 text-base font-normal leading-normal"

                            onChange={(e) => setCustomMessage(e.target.value)}
                        />
                    )}
                </label>
            </div>
            <a className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 py-4 flex-1 bg-[#B2212B] text-white text-base font-bold leading-normal tracking-[0.015em]" href={`tel:${order?.user?.phone}`}>

                <span className="truncate">
                    Ring kunde på nr {order?.user?.phone}
                </span>

            </a>
            <br />
            <br />





            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 py-4 flex-1 bg-[#B2212B] text-white text-base font-bold leading-normal tracking-[0.015em]" onClick={handleConfirm} disabled={loading}>
                {loading ? "Bekrefter..." : "Bekreft ordre"}
            </button>
        </PageContainer >
    );
}

export default ConfirmOrderPage;

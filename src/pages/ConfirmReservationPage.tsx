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

export type FirestoreReservation = {
    id: string,
    name: string,
    phone: string,
    guests: string,
    date: string,
    isConfirmed: boolean,
    text?: string
}

function ConfirmReservationpage() {
    const { id } = useParams();

    // State to manage loading, order data, and errors
    const [loading, setLoading] = useState<boolean>(true);
    const [reservation, setReservation] = useState<FirestoreReservation | null>(null);
    const [error, setError] = useState<string | null>(null);

    async function handleConfirm() {
        setLoading(true); // Start loading when confirm button is clicked
        setError(null); // Reset any previous error

        // Determine the message to send

        const messageToSend = `\nDin bordreservasjon for:\n${reservation?.guests} personer\nDato:${reservation?.date}\n\ner nå bekreftet.\nVi ønsker dere hjertlig velkommen.`

        try {
            await axios.post('https://us-central1-naborestaurant-d4228.cloudfunctions.net/confirmReservation', { id, message: messageToSend });
            setReservation(prev => prev ? { ...prev, isConfirmed: true } : null);
        } catch (error) {
            setError("Failed to confirm the reservation. Please try again.");
        } finally {
            setLoading(false); // Stop loading after the request is complete
        }
    }

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await axios.post('https://us-central1-naborestaurant-d4228.cloudfunctions.net/getOneReservation', { id });
                setReservation(response.data);
            } catch (error) {
                setError("Feil med lasting av reservasjon... prøv igjen senere");
            } finally {
                setLoading(false); // Stop loading after the order is fetched
            }
        };

        fetchOrder();
    }, [id]);

    if (loading) return <h1>Laster, vennligst vent...</h1>;
    if (error) return <h1>{error}</h1>;
    if (reservation?.isConfirmed) return <h1>Reservasjonen er bekreftet</h1>;

    return (
        <PageContainer>
            <div className="flex flex-col gap-4">
                <h1 className="text-xl font-bold">Bekreft reservasjon</h1>
                <p>
                    Navn: {reservation?.name}
                </p>
                <p>
                    Antall gjester: {reservation?.guests}
                </p>
                <p>
                    Dato / klokkeslett: {reservation?.date}
                </p>
                {
                    reservation?.text && <p>Melding fra kunde: {reservation.text}</p>
                }

                <a className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 py-4 flex-1 bg-[#B2212B] text-white text-base font-bold leading-normal tracking-[0.015em]" href={`tel:${reservation?.phone}`}>

                    <span className="truncate">
                        Ring kunde på nr {reservation?.phone}
                    </span>

                </a>


                <button
                    onClick={handleConfirm} disabled={loading}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 py-4 flex-1 bg-[#B2212B] text-white text-base font-bold leading-normal tracking-[0.015em]"
                >
                    <span className="truncate">
                        {loading ? "Bekrefter..." : "Bekreft reservasjon"}
                    </span>
                </button>

            </div>

        </PageContainer >
    );
}

export default ConfirmReservationpage;

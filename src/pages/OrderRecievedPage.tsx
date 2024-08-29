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

function OrderReceivedPage() {
    const { id } = useParams();

    // State to manage loading, order data, and errors
    const [loading, setLoading] = useState<boolean>(true);
    const [order, setOrder] = useState<FirestoreOrder | null>(null);
    const [error, setError] = useState<string | null>(null);

    // async function handleConfirm(message: string) {
    //     setLoading(true); // Start loading when confirm button is clicked
    //     setError(null); // Reset any previous error

    //     try {
    //         await axios.post('https://us-central1-naborestaurant-d4228.cloudfunctions.net/confirmOrder', { id, message });
    //         setOrder(prev => prev ? { ...prev, isConfirmed: true } : null); // Update the order as confirmed
    //     } catch (error) {
    //         setError("Failed to confirm the order. Please try again.");
    //     } finally {
    //         setLoading(false); // Stop loading after the request is complete
    //     }
    // }

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

    return (
        <PageContainer>
            <h1 className="text-3xl">Din bestilling er sendt</h1>
            {
                order?.type === 'table' && (
                    <p>Vi kommer med bestillingen til bordet innen kort tid</p>
                )
            }

            {/* <p>{order?.items.map(item => item.title).join(', ')}</p> */}

            {
                order?.type === 'home' && (
                    <p>Du vil motta en SMS på nr: {order.user?.phone} med en bekreftelse av din bestilling innen kort tid. For spørsmål: Ring oss på nr <a href="tel:23202833">23 20 28 33</a></p>
                )
            }
        </PageContainer>
    );
}

export default OrderReceivedPage;

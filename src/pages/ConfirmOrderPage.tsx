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


    async function handleConfirm(message: string) {
        await axios.post('https://us-central1-naborestaurant-d4228.cloudfunctions.net/confirmOrder', { id, message })
    }


    const [order, setOrder] = useState<FirestoreOrder | null>(null)

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await fetch('https://us-central1-naborestaurant-d4228.cloudfunctions.net/getOrder', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id }),
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch the order');
                }

                const order: FirestoreOrder = await response.json();
                setOrder(order);
            } catch (error) {
                console.error('Error fetching the order:', error);
                // Handle the error appropriately here
            }
        };

        fetchOrder()
    })

    if (order?.isConfirmed) return <h1>Ordren er allerede bekreftet</h1>

    return (
        <PageContainer>
            <h1>Confirm order {id} {order?.isConfirmed ?? 'failed fethcing'}</h1>
            <button onClick={() => handleConfirm('Dette er en test')}>Confirm order</button>

        </PageContainer>

    )
}

export default ConfirmOrderPage;
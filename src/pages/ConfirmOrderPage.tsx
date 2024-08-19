import { useParams } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import { MenuItem } from "./OrderSummary";
import { useState } from "react";

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

    const [order, setOrder] = useState<FirestoreOrder | null>

    return (
        <PageContainer>
            <h1>Confirm order {id}</h1>

        </PageContainer>

    )
}

export default ConfirmOrderPage;
import PageContainer from "../components/PageContainer";
import { MenuItem } from "./OrderSummary";

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

function ReservationReceivedPage() {
    return (
        <PageContainer>
            <h1 className="text-3xl">Din bestilling er sendt</h1>
            Din reservasjon er sendt. Du vil motta en SMS på nummeret du oppga når reservasjonen er bekreftet.
        </PageContainer>
    );
}

export default ReservationReceivedPage;

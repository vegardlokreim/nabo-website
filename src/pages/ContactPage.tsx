import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import PageContainer from "../components/PageContainer";
import { useState } from "react";
import Contact from "./Contact";
import TableReservationPage from "./TableReservationPage";

export default function ContactPage() {
    const [alignment, setAlignment] = useState('contact');

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        console.log(event)
        setAlignment(newAlignment);
    };

    return (
        <PageContainer>
            <div className="">
                <div className="flex flex-col justify-center items-center large:w-[60vw]">
                    <ToggleButtonGroup
                        color="standard"
                        size="large"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Contactpage"
                    >
                        <ToggleButton value="tablereservation">Reserver bord</ToggleButton>
                        <ToggleButton value="contact">Kontakt oss</ToggleButton>
                    </ToggleButtonGroup>
                    {
                        alignment == 'contact' ? <Contact /> : <TableReservationPage />
                    }
                </div>
            </div>
        </PageContainer>
    )
}
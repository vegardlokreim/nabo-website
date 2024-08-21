import { useState } from "react";
import axios from "axios";
import HeroSection from "../components/HeroSection";
import PageContainer from "../components/PageContainer";
import { useNavigate } from "react-router-dom";

export default function TableReservationPage() {
    const [error, setError] = useState<string | null>(null)
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        guests: "",
        date: ""
    });

    const navigate = useNavigate()

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            await axios.post("https://us-central1-naborestaurant-d4228.cloudfunctions.net/createTableReservation", formData);
            navigate("/sendt-reservasjon")
        } catch (error) {
            console.error("Error creating reservation:", error);
            setError("Feil med reservasjon. Ring oss for å reservere bord.")
        }
    };

    if (error) return <p>{error}</p>

    return (
        <PageContainer>
            <HeroSection
                backgroundImage="https://cdn.usegalileo.ai/stability/d7e3bdb5-0fed-4780-ab1f-5c3803a01c3b.png"
                heading="Reserver bord"
                text=""
                buttonText=""
            />

            <form onSubmit={handleSubmit}>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-[#181211] text-base font-medium leading-normal pb-2">Navn</p>
                        <input
                            name="name"
                            placeholder="Navn"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181211] focus:outline-0 focus:ring-0 border-none bg-[#f4f1f0] focus:border-none h-14 placeholder:text-[#886963] p-4 text-base font-normal leading-normal"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-[#181211] text-base font-medium leading-normal pb-2">Telefon</p>
                        <input
                            name="phone"
                            placeholder="Telefonnummer"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181211] focus:outline-0 focus:ring-0 border-none bg-[#f4f1f0] focus:border-none h-14 placeholder:text-[#886963] p-4 text-base font-normal leading-normal"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-[#181211] text-base font-medium leading-normal pb-2">Antall personer</p>
                        <input
                            name="guests"
                            placeholder="Antall personer"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181211] focus:outline-0 focus:ring-0 border-none bg-[#f4f1f0] focus:border-none h-14 placeholder:text-[#886963] p-4 text-base font-normal leading-normal"
                            value={formData.guests}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-[#181211] text-base font-medium leading-normal pb-2">Dato og klokkeslett</p>
                        <input
                            type="datetime-local"  // Added this line
                            name="date"
                            placeholder="Dato og klokkeslett"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181211] focus:outline-0 focus:ring-0 border-none bg-[#f4f1f0] focus:border-none h-14 placeholder:text-[#886963] p-4 text-base font-normal leading-normal"
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div className="flex px-4 py-3">
                    <button
                        type="submit"
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#B2212B] text-white text-base font-bold leading-normal tracking-[0.015em]"
                    >
                        <span className="truncate">Send</span>
                    </button>
                </div>
            </form>
        </PageContainer>
    );
}

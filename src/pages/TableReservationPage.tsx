import { useState } from "react";
import axios from "axios";
import HeroSection from "../components/HeroSection";
import PageContainer from "../components/PageContainer";
import { useNavigate } from "react-router-dom";

export default function TableReservationPage() {
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        guests: "",
        date: "",
        time: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        phone: "",
        guests: "",
        date: "",
        time: ""
    });

    const navigate = useNavigate();

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Reset error for the current field
        setErrors({
            ...errors,
            [name]: ""
        });
    };
    const validateForm = () => {
        const newErrors = { name: "", phone: "", guests: "", date: "", time: "" };
        let isValid = true;

        // Remove all whitespace from the phone number
        const trimmedPhoneNumber = formData.phone.replace(/\s+/g, "");

        if (!formData.name.trim()) {
            newErrors.name = "Navn er påkrevd";
            isValid = false;
        }

        if (!trimmedPhoneNumber || !/^\d{8}$/.test(trimmedPhoneNumber)) {
            newErrors.phone = "Telefonnummer må være 8 tall";
            isValid = false;
        }

        if (!formData.guests.trim() || isNaN(Number(formData.guests)) || Number(formData.guests) <= 0) {
            newErrors.guests = "Antall personer må være et gyldig nummer";
            isValid = false;
        }

        if (!formData.date.trim()) {
            newErrors.date = "Dato er påkrevd";
            isValid = false;
        }

        if (!formData.time.trim()) {
            newErrors.time = "Klokkeslett er påkrevd";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };



    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            await axios.post("https://us-central1-naborestaurant-d4228.cloudfunctions.net/createTableReservation", {
                name: formData.name,
                phone: formData.phone.replace(/\s+/g, ""),
                guests: formData.guests,
                date: formData.date + ' - ' + formData.time
            });
            navigate("/sendt-reservasjon");
        } catch (error) {
            console.error("Error creating reservation:", error);
            setError("Feil med reservasjon. Ring oss for å reservere bord.");
        }
    };

    if (error) return <p>{error}</p>;

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
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
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
                            type="number"
                        />
                        {errors.guests && <p className="text-red-500 text-sm">{errors.guests}</p>}
                    </label>
                </div>

                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-[#181211] text-base font-medium leading-normal pb-2">Dato</p>
                        <input
                            name="date"
                            placeholder="Dato"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181211] focus:outline-0 focus:ring-0 border-none bg-[#f4f1f0] focus:border-none h-14 placeholder:text-[#886963] p-4 text-base font-normal leading-normal"
                            value={formData.date}
                            onChange={handleChange}
                        />
                        {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
                    </label>
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-[#181211] text-base font-medium leading-normal pb-2">Klokkeslett</p>
                        <input
                            name="time"
                            placeholder="Klokkeslett"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181211] focus:outline-0 focus:ring-0 border-none bg-[#f4f1f0] focus:border-none h-14 placeholder:text-[#886963] p-4 text-base font-normal leading-normal"
                            value={formData.time}
                            onChange={handleChange}
                        />
                        {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
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

import { useState } from "react";
import axios from "axios";
import HeroSection from "../components/HeroSection";
import PageContainer from "../components/PageContainer";
import { useNavigate } from "react-router-dom";

import "dayjs/locale/nb";  // Norwegian locale import
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

export default function TableReservationPage() {
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        guests: "",
        date: "",
        time: ""
    })

    const [errors, setErrors] = useState({
        name: "",
        phone: "",
        guests: "",
        date: "",
        time: ""
    });

    const today = dayjs().format('YYYY-MM-DD');
    const [date, setDate] = useState<Dayjs | null>(dayjs(today));
    const hourNow = new Date().getHours()
    const minuteNow = new Date().getMinutes()
    const [time, setTime] = useState<Dayjs | null>(dayjs().hour(hourNow >= 14 ? hourNow : 14).minute(hourNow >= 14 ? minuteNow : 5));


    const [isLoading, setIsLoading] = useState(false)

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

        if (
            !trimmedPhoneNumber ||
            !/^\d{8}$/.test(trimmedPhoneNumber) ||    // Check if it is 8 digits long
            /^(.)\1{7}$/.test(trimmedPhoneNumber) ||  // Avoid repetitive numbers like 11111111
            !/^[49]\d{7}$/.test(trimmedPhoneNumber)   // Ensure it starts with 4 or 9
        ) {
            newErrors.phone = "Telefonnummer må være et gyldig norsk mobilnummer, 8 siffer";
            isValid = false;
        }

        if (!formData.guests.trim() || isNaN(Number(formData.guests)) || Number(formData.guests) <= 0) {
            newErrors.guests = "Antall personer må være et gyldig nummer";
            isValid = false;
        }

        if (!date) {
            newErrors.date = "Dato er påkrevd";
            isValid = false;
        }

        if (!time) {
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
            setIsLoading(true)
            await axios.post("https://us-central1-naborestaurant-d4228.cloudfunctions.net/createTableReservation", {
                name: formData.name,
                phone: formData.phone.replace(/\s+/g, ""),
                guests: formData.guests,
                date: date + ' - kl: ' + time?.hour() + ":" + time?.minute()
            });
            navigate("/sendt-reservasjon");
            setIsLoading(false)
        } catch (error) {
            console.error("Error creating reservation:", error);
            setError("Feil med reservasjon. Ring oss for å reservere bord.");
        }
    };

    if (error) return <p>{error}</p>;
    if (isLoading) return <p>Sender reservasjon, venligst vent...</p>

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

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                        <label className="flex flex-col min-w-40 flex-1">
                            <p className="text-[#181211] text-base font-medium leading-normal pb-2">Dato</p>
                            <DatePicker
                                onChange={(newDate: Dayjs | null) => setDate(newDate)}
                                value={date}
                                format="DD.MM.YYYY"
                                disablePast
                            />
                            {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
                        </label>
                    </div>

                    <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                        <label className="flex flex-col min-w-40 flex-1">
                            <p className="text-[#181211] text-base font-medium leading-normal pb-2">Klokkeslett</p>
                            <TimePicker
                                value={time}
                                onChange={(newValue: Dayjs | null) => setTime(newValue)}
                                ampm={false}
                                minTime={dayjs().hour(14).minute(0)}
                                maxTime={dayjs().hour(21).minute(0)}
                                timeSteps={{ hours: 1, minutes: 1 }}
                            />
                            {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
                        </label>
                    </div>
                </LocalizationProvider>

                <div className="flex px-4 py-3">
                    <button
                        type="submit"
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#B2212B] text-white text-base font-bold leading-normal tracking-[0.015em]"
                    >
                        <span className="truncate">{isLoading ? 'Sender...' : 'Send'}</span>
                    </button>
                </div>
            </form >
        </PageContainer >
    );
}

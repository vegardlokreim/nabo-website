import HeroSection from "../components/HeroSection";
import PageContainer from "../components/PageContainer";

export default function ContactPage() {
    return (
        <PageContainer>


            <HeroSection backgroundImage="https://cdn.usegalileo.ai/stability/d7e3bdb5-0fed-4780-ab1f-5c3803a01c3b.png" heading="Kontakt oss" text="Send oss en melding" buttonText={""} />

            <h1 className="text-[#181211] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">Our Location</h1>
            <p className="text-[#181211] text-base font-normal leading-normal pb-3 pt-1 px-4">
                Book a table by calling us or send inquiries to our email address. We will get back to you as soon as possible.
            </p>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
                <div className="text-[#181211] flex items-center justify-center rounded-lg bg-[#f4f1f0] shrink-0 size-12" data-icon="Clock" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"
                        ></path>
                    </svg>
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-[#181211] text-base font-medium leading-normal line-clamp-1">Åpningstider</p>
                    <p className="text-[#886963] text-sm font-normal leading-normal line-clamp-2">Mandag - Sændag: 14:00 - 22:00</p>
                </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-14">
                <div className="text-[#181211] flex items-center justify-center rounded-lg bg-[#f4f1f0] shrink-0 size-10" data-icon="MapPin" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"
                        ></path>
                    </svg>
                </div>
                <p className="text-[#181211] text-base font-normal leading-normal flex-1 truncate">Essendrops gate 9, 0368 Oslo </p>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-14">
                <div className="text-[#181211] flex items-center justify-center rounded-lg bg-[#f4f1f0] shrink-0 size-10" data-icon="Phone" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"
                        ></path>
                    </svg>
                </div>
                <p className="text-[#181211] text-base font-normal leading-normal flex-1 truncate">23 20 28 33</p>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-14">
                <div className="text-[#181211] flex items-center justify-center rounded-lg bg-[#f4f1f0] shrink-0 size-10" data-icon="Envelope" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"
                        ></path>
                    </svg>
                </div>
                <p className="text-[#181211] text-base font-normal leading-normal flex-1 truncate">post@naborestaurant.no</p>
            </div>
            <h3 className="text-[#181211] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Sosiale Medier</h3>
            <div className="flex items-center gap-4 bg-white px-4 min-h-14">
                <div
                    className="text-[#181211] flex items-center justify-center rounded-lg bg-[#f4f1f0] shrink-0 size-10"
                    data-icon="InstagramLogo"
                    data-size="24px"
                    data-weight="regular"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"
                        ></path>
                    </svg>
                </div>
                <p className="text-[#181211] text-base font-normal leading-normal flex-1 truncate">@naborestaruant</p>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-14">
                <div className="text-[#181211] flex items-center justify-center rounded-lg bg-[#f4f1f0] shrink-0 size-10" data-icon="FacebookLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"
                        ></path>
                    </svg>
                </div>
                <p className="text-[#181211] text-base font-normal leading-normal flex-1 truncate">/naborestaurant</p>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-[#181211] text-base font-medium leading-normal pb-2">Navn</p>
                    <input
                        placeholder="Navn"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181211] focus:outline-0 focus:ring-0 border-none bg-[#f4f1f0] focus:border-none h-14 placeholder:text-[#886963] p-4 text-base font-normal leading-normal"
                        value=""
                    />
                </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-[#181211] text-base font-medium leading-normal pb-2">Telefon</p>
                    <input
                        placeholder="Telefonnummer"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181211] focus:outline-0 focus:ring-0 border-none bg-[#f4f1f0] focus:border-none h-14 placeholder:text-[#886963] p-4 text-base font-normal leading-normal"
                        value=""
                    />
                </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-[#181211] text-base font-medium leading-normal pb-2">Melding</p>
                    <textarea
                        placeholder="Skriv en melding til oss"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181211] focus:outline-0 focus:ring-0 border-none bg-[#f4f1f0] focus:border-none min-h-36 placeholder:text-[#886963] p-4 text-base font-normal leading-normal"
                    ></textarea>
                </label>
            </div>
            <div className="flex px-4 py-3">
                <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#e63b19] text-white text-base font-bold leading-normal tracking-[0.015em]"
                >
                    <span className="truncate">Send</span>
                </button>
            </div>
        </PageContainer>
    )
}
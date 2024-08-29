import HeroSection from "../components/HeroSection";
import PageContainer from "../components/PageContainer";

export default function HomePage() {
    return (
        <PageContainer>

            <div className="@[480px]:p-4">
                <HeroSection backgroundImage={'https://cdn.usegalileo.ai/sdxl10/7aee91c2-b484-43ed-bd4f-e244cb72a736.png'} heading={"Nabo Kitchen & Bar"} text={"sushirestaurant med uteservering ved siden av colosseum kino på majorstuen"} buttonText={"Bestill Nå"} buttonLink="/meny" buttonText2="Reserver bord" buttonLink2="/kontakt" />
            </div>




            <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Suhsirestaurant på Majorstuen</h2>
            <p className="text-[#181411] text-base font-normal leading-normal pb-3 pt-1 px-4">
                Nabo Kitchen & Bar har servert Oslos befolkning det beste innen japansk og kinesisk mat i siden år 2000. Vi ligger midt plassert midt i hjertet av Majorstuen, ved siden av Colosseum Kino. Vi er det perfekte stedet for et måltid før eller etter en kino. Restauranten vår er kjent for sin elegante innredning og vennlige personale, og tilbyr en rolig flukt fra byens travle liv.
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                <div className="flex flex-col gap-3">
                    <img src="https://cdn.usegalileo.ai/sdxl10/267a431b-c587-4dfd-b02c-3e67442440a9.png" className="w-full first-line:ounded-xl" />
                </div>
                <div className="flex flex-col gap-3">
                    <img src="https://cdn.usegalileo.ai/sdxl10/12539873-c188-41f1-b7aa-c6b43a158e8d.png" className="w-full first-line:ounded-xl" />
                </div>
                <div className="flex flex-col gap-3">

                    <img src="https://cdn.usegalileo.ai/sdxl10/181e4285-f8fc-4dcb-ba1d-cc6a6faab7a3.png" className="w-full first-line:ounded-xl" />

                </div>
                <div className="flex flex-col gap-3">

                    <img src="https://cdn.usegalileo.ai/sdxl10/50e0c153-9b7e-47b2-8792-da6199130bc2.png" className="w-full first-line:ounded-xl" />

                </div>
            </div>

            {/* <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                What our guests are saying
                </h2>
            <div className="flex flex-col gap-8 overflow-x-hidden bg-white p-4">
                <div className="flex flex-col gap-3 bg-white">
                    <p className="text-[#181411] text-base font-normal leading-normal">
                        Absolutely amazing experience. The food was delicious and the service was top notch.
                        Highly recommend the sashimi and the nigiri. We will definitely be back!
                    </p>

                </div>
                <div className="flex flex-col gap-3 bg-white">


                    <p className="text-[#181411] text-base font-normal leading-normal">
                        The atmosphere is great and the food is even better. The service was fantastic. I would
                        highly recommend the maki rolls and the tempura. It's a bit on the pricey
                        side, but worth every penny.
                    </p>

                </div>
                <div className="flex flex-col gap-3 bg-white">


                    <p className="text-[#181411] text-base font-normal leading-normal">
                        I had an incredible dinner at Sushi Delight. The food was excellent and the staff were
                        very attentive. I particularly enjoyed the sashimi and the tempura. I will
                        definitely be returning soon!
                    </p>

                </div>
            </div> */}

        </PageContainer >
    )
}
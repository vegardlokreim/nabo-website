import HeroSection from "../compontents/HeroSection"
import FrontHero from '../assets/FrontHero.png'
import Restaurant from '../assets/MainHero1.png'

export default function HomePage() {
    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] justify-between group/design-root overflow-x-hidden mb-12"
        >
            {/* <HeroSection backgroundImage={FrontHero} heading="nabo restaurant" text={""} buttonText={"Bestill"} /> */}
            <div>
                <div className="flex w-full grow bg-[#FFFFFF] @container p-4">
                    <div className="w-full gap-1 overflow-hidden bg-[#FFFFFF] @[480px]:gap-2 aspect-[3/2] rounded-xl flex">
                        <img src={Restaurant} />
                    </div>
                </div>
                <p className="text-black text-base font-normal leading-normal pb-3 pt-1 px-4">
                    Nabo Kitchen & Bar har servert Oslos befolkning det beste innen japansk og kinesisk mat i over et tiår. Vi ligger midt plassert midt i hjertet av Majorstuen, ved siden av Colosseum Kino. Vi er det perfekte stedet for et måltid før eller etter en film. Restauranten vår er kjent for sin elegante innredning og vennlige personale, og tilbyr en rolig flukt fra byens travle liv.
                </p>
                <div className="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-14 justify-between">
                    <p className="text-black text-base font-normal leading-normal flex-1 truncate">Bestill mat i restauranten</p>
                    <div className="shrink-0">
                        <div className="text-black flex size-7 items-center justify-center" data-icon="CaretRight" data-size="24px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-14 justify-between">
                    <p className="text-black text-base font-normal leading-normal flex-1 truncate">Bestill takeaway</p>
                    <div className="shrink-0">
                        <div className="text-black flex size-7 items-center justify-center" data-icon="CaretRight" data-size="24px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-14 justify-between">
                    <p className="text-black text-base font-normal leading-normal flex-1 truncate">Kontakt oss for bordreservering</p>
                    <div className="shrink-0">
                        <div className="text-black flex size-7 items-center justify-center" data-icon="CaretRight" data-size="24px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div>

                <div className="h-5 bg-[#FFFFFF]"></div>
            </div>
        </div>
    )
}
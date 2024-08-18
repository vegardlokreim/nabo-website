import Restaurant from '../../assets/nabo_restaurant.jpg'
import Collage from '../../assets/aboutCollage.png'

export default function AboutPage() {

    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] justify-between group/design-root overflow-x-hidden mb-16"
        >
            <div>

                <div className="flex p-4 @container">
                    <div className="flex w-full flex-col gap-4 items-center">
                        <div className="flex gap-4 flex-col items-center">
                            <img
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                                src={Restaurant}
                            />

                            <div className="flex flex-col items-center justify-center">
                                <p className="text-black text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">Nabo Kitchen &amp; Bar</p>
                                <p className="text-neutral-500 text-base font-normal leading-normal text-center">Sushi & Wok</p>
                                <p className="text-neutral-500 text-base font-normal leading-normal text-center">Åpent i dag, 14:00 - 22:00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full grow bg-[#FFFFFF] @container py-3">
                    <img src={Collage} />
                </div>
                <p className="text-black text-base font-normal leading-normal pb-3 pt-1 px-4">
                    På Sushi & Wok tilbyr vi måltider av utmerket kvalitet, og inviterer deg til å prøve vår deilige mat. Nøkkelen til vår suksess er enkel: å tilby mat av konsekvent høy kvalitet som alltid smaker fantastisk. Vi er stolte av å servere våre kunder deilige, autentiske retter som japansk, sushi og asiatisk.
                </p>
                <h2 className="text-black text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Vår visjon</h2>
                <p className="text-black text-base font-normal leading-normal pb-3 pt-1 px-4">
                    Vi streber kontinuerlig etter å forbedre vår service og kvalitet for å gi kundene våre den aller beste opplevelsen. Vi tror at mat er et universelt språk som forbinder mennesker fra alle samfunnslag. Vår visjon er å være førstevalget for alle som ønsker et godt måltid.
                </p>
                <h2 className="text-black text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Våre verdier</h2>
                <p className="text-black text-base font-normal leading-normal pb-3 pt-1 px-4">Kvalitet, Konsistens, Lidenskap, Eksellens, Teamwork, Takknemlighet, Respekt

                </p>
            </div>
            <div>
                <div className="flex px-4 py-3">
                    <button
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#B2212B] text-[#FFFFFF] text-base font-bold leading-normal tracking-[0.015em]"
                    >
                        <span className="truncate">Bestill nå</span>
                    </button>
                </div>
                <div className="h-5 bg-[#FFFFFF]"></div>
            </div>
        </div >


    )
}
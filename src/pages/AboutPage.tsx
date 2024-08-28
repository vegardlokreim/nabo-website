import Restaurant from '../assets/nabo_restaurant.jpg'
import HeroSection from '../components/HeroSection';
import PageContainer from '../components/PageContainer';

export default function AboutPage() {
    return (
        <PageContainer>
            <div className="@container">
                <div className="@[480px]:p-4">
                    <HeroSection
                        backgroundImage={Restaurant}
                        heading={""}
                        text={""}
                    />
                </div>
            </div>

            <section className="px-4 py-6">
                <h2 className="text-[#181411] text-[24px] font-bold leading-tight tracking-[-0.015em] pb-4">Hvem er vi?</h2>
                <p className="text-[#181411] text-base font-normal leading-normal pb-4">
                    NABO Kitchen Bar åpnet dørene for første gang i 2019, etter å ha vært kjent som Sushi & Wok i over 18 år. Vi ønsket å skille oss ut og bli et naturlig valg for gjestene våre i området, og derfor ble det nye navnet NABO Kitchen Bar valgt.

                    Til tross for navneendringen, er vi fortsatt de samme menneskene med den samme menyen. Restauranten har blitt oppusset og sitteplassene omorganisert. Vi ser frem til å gjensyn med mange kjente ansikter og til å få muligheten til å bli kjent med enda flere.

                    Med vår omfattende erfaring i bransjen er vi dedikert til å levere mat av høyeste kvalitet.
                </p>
            </section>

            <section className="bg-gray-100 px-4 py-6">
                <h2 className="text-[#181411] text-[24px] font-bold leading-tight tracking-[-0.015em] pb-4">Maten vår</h2>
                <p className="text-[#181411] text-base font-normal leading-normal pb-4">
                    Menyen vår byr på et bredt utvalg av asiatiske retter. Vi tilbyr et variert utvalg av sushi laget med fisk av beste kvalitet, samt wokretter laget med ferske grønnsaker.
                </p>
            </section>

            <section className="px-4 py-6">
                <h2 className="text-[#181411] text-[24px] font-bold leading-tight tracking-[-0.015em] pb-4">Vår historie</h2>
                <p className="text-[#181411] text-base font-normal leading-normal pb-4">
                    Vår historie begynte i 2001 under navnet Sushi & Wok, og etter 18 år med suksess har vi nå endret navnet til NABO Kitchen Bar.

                    Restauranten ligger sentralt på Majorstuen, rett ved Colosseum Kino. I forbindelse med navneendringen har vi også pusset opp lokalene. Vi ønsker deg velkommen innom, enten før eller etter ditt kinobesøk.

                    Menyen vår er stort sett den samme som før, med noen små forbedringer. Vi serverer et variert utvalg fra det asiatiske kjøkken, inkludert ris- og wokretter samt sushi.

                    Våre kokker har over 30 års erfaring i bransjen og setter kvalitet i høysetet. Vi er stolte av å ha klart oss gjennom COVID-19-pandemien og å ha vært en pålitelig restaurant i Oslo gjennom mange år.
                </p>
            </section>
        </PageContainer>
    )
}

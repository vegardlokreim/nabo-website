import HeroImage from '../assets/MainHero1.png';
export default function HomePage() {
    return (
        <div className="p-4">
            {/* <HeroSection backgroundImage={HeroImage} heading={"Nabo restaurant"} text={"Lorem ipsum dolor sit amet"} buttonText={"Bestill"} /> */}
            <img src={HeroImage} className="rounded-[35px] mt-8 mb-4" />

            <h2>Velkommen til Nabo Kitchen Bar</h2>


        </div >
    )
}
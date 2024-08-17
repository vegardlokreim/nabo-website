import HeroSection from "../compontents/HeroSection";
import HeroImage from '../assets/nabo_restaurant.jpg';
export default function HomePage() {
    return (
        <div>
            <HeroSection backgroundImage={HeroImage} heading={"Nabo restaurant"} text={"Lorem ipsum dolor sit amet"} buttonText={"Bestill"} />
        </div >
    )
}
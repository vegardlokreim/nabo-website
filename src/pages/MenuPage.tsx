import HeroSection from "../compontents/HeroSection";
import HeroImage from '../assets/nabo_restaurant.jpg'
import { dimsum, startersAndSoups } from "../assets/menuItems";
import Menu from "../compontents/Menu/Menu";

function MenuPage() {
    return (
        <div>
            <HeroSection
                backgroundImage={HeroImage}
                heading={"Meny"}
                text={"Dette er en tekst"}
                buttonText={"Kjøp nå"}
            />
            <div className="flex flex-col p-6 gap-12">
                <Menu menuData={dimsum} menuTitle="Dim Sum" />
                <Menu menuData={startersAndSoups} menuTitle="Starters and Soups" />
            </div>

        </div>
    )
}

export default MenuPage;
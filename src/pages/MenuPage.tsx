import HeroSection from "../compontents/HeroSection";
import HeroImage from '../assets/MainHero1.png'
import { dimsum } from "../assets/menuItems";
import Menu from "../compontents/Menu/Menu";


import Nigiri from '../assets/nigiriHero.png'
import Dimsum from '../assets/dimsum.png'
import Wok from '../assets/wok.png'
import Maki from '../assets/maki.png'

function MenuPage() {
    return (
        <div>
            <HeroSection
                backgroundImage={HeroImage}
                heading={"Meny"}
                text={"Dette er en tekst"}
                buttonText={"Kjøp nå"}
            />
            <div className="flex flex-col p-2 gap-12 mt-4">
                <Menu menuData={dimsum} title="Dim Sum" description={"mmmm"} backgroundImage={Dimsum} />
                <Menu menuData={dimsum} title="Nigiri" description={"mmmm"} backgroundImage={Nigiri} />
                <Menu menuData={dimsum} title="Main courses" description={"mmmm"} backgroundImage={Wok} />
                <Menu menuData={dimsum} title="Maki rolls" description={"mmmm"} backgroundImage={Maki} />
            </div>

        </div>
    )
}

export default MenuPage;
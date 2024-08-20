import Menu from "../components/Menu/Menu";
import PageContainer from "../components/PageContainer";
import Nigiri from '../assets/nigiriHero.png'

function MenuPage() {
    return (
        <PageContainer>
            <Menu title="Dim Sum" description="Dette er vår sushimeny" backgroundImg="https://cdn.usegalileo.ai/sdxl10/69f9ae9a-d2c1-4a31-b2be-051b10bf0b46.png" category="dimsum" />
            <Menu title="Asian tapas / Side orders" description="Dette er vår sushimeny" backgroundImg="https://cdn.usegalileo.ai/sdxl10/69f9ae9a-d2c1-4a31-b2be-051b10bf0b46.png" category="asianTapasSideOrder" />
            <Menu title="Starters and soups" description="Dette er vår sushimeny" backgroundImg={Nigiri} category="startersAndSoups" />
        </PageContainer>

    )
}

export default MenuPage;
import { dimsum } from "../assets/menuItems";
import Menu from "../components/Menu/Menu";
import PageContainer from "../components/PageContainer";

function MenuPage() {
    return (
        <PageContainer>
            <Menu title="Dim Sum" description="Dette er vår sushimeny" backgroundImg="https://cdn.usegalileo.ai/sdxl10/69f9ae9a-d2c1-4a31-b2be-051b10bf0b46.png" data={dimsum} />
            <Menu title="Dim Sum" description="Dette er vår sushimeny" backgroundImg="https://cdn.usegalileo.ai/sdxl10/69f9ae9a-d2c1-4a31-b2be-051b10bf0b46.png" data={dimsum} />
        </PageContainer>

    )
}

export default MenuPage;
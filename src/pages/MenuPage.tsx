import { dimsum } from "../assets/menuItems";
import Menu from "../components/Menu/Menu";

function MenuPage() {
    return (
        <div className="layout-container flex h-full grow flex-col">

            <div className="lg:px-80 flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col flex-1">
                    <div className="@container">
                        <div className="@[480px]:p-4">
                            <Menu title="Dim Sum" description="Dette er vår sushimeny" backgroundImg="https://cdn.usegalileo.ai/sdxl10/69f9ae9a-d2c1-4a31-b2be-051b10bf0b46.png" data={dimsum} />
                            <Menu title="Dim Sum" description="Dette er vår sushimeny" backgroundImg="https://cdn.usegalileo.ai/sdxl10/69f9ae9a-d2c1-4a31-b2be-051b10bf0b46.png" data={dimsum} />
                        </div>
                    </div>
                </div>
            </div >
        </div >

    )
}

export default MenuPage;
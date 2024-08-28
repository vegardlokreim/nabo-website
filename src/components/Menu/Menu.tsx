import { menuItems } from "../../assets/menuItems"
import MenuHero from "../MenuHero"
import MenuItem from "./MenuItem"

interface MenuProps {
    backgroundImg: string
    title: string
    description: string
    category: string
}
export default function Menu({ backgroundImg, title, description, category }: MenuProps) {
    return (
        <div className="mb-2">
            <MenuHero title={title} text={description} backgroundImg={backgroundImg} />
            {
                menuItems.map(item => {
                    if (item.category === category) return <MenuItem key={item.menuItemId} menuItemId={item.menuItemId} name={item.name} description={item.description} price={item.price} allergens={item.allergens} category={item.category} />
                })
            }
        </div>
    )
}
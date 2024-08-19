import MenuHero from "../MenuHero"
import MenuItem from "./MenuItem"

interface MenuProps {
    backgroundImg: string
    title: string
    description: string
    data: Array<any>
}
export default function Menu({ backgroundImg, title, description, data }: MenuProps) {
    return (
        <div className="mb-40">
            <MenuHero title={title} text={description} backgroundImg={backgroundImg} />
            {
                data.map(item => <MenuItem key={item.menuItemId} menuItemId={item.menuItemId} name={item.name} description={item.description} price={item.price} allergens={item.allergens} />)
            }
        </div>
    )
}
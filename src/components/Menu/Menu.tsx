import MenuHero from "../MenuHero"
import MenuItem from "./MenuItem"

interface MenuProps {
    backgroundImg: string
    title: string
    description: string
    category: string
    items: any[]
}
export default function Menu({ backgroundImg, title, description, items, category }: MenuProps) {
    return (
        <div className="mb-2">
            <MenuHero title={title} text={description} backgroundImg={backgroundImg} />
            {
                items.filter(item => item.active).map(item => {

                    return <MenuItem key={item.id} menuItemId={item.id} name={item.title} description={item.description} price={item.price} allergens={item.allergens} category={category} />
                })
            }
        </div>
    )
}
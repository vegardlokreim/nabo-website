import WeeklyMenuItem from "./WeeklyMenuItem"

interface MenuProps {
    day: string
    items: any[]
    title: string
    prefix: string
    description: string
    backgroundImg: string

}
export default function WeeklyMenu({ title, description, items, day, }: MenuProps) {
    return (
        <div className="mb-16 text-center">
            <h1 className="text-[38px] font-bold text-[#B2212B] uppercase">{day}</h1>

            {
                items.map(item => <WeeklyMenuItem key={item.id} id={item.id} title={item.title} description={item.description} price={item.price} allergens={item.allergens} prefix={item.prefix} />)
            }
        </div>
    )
}
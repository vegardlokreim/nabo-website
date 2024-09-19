interface WeeklyMenuItemProps {
    title: string
    price: number
    description: string
    prefix: string
    allergens: string[]
    id: string

}

export default function WeeklyMenuItem({ title, price, description, prefix, allergens, id }: WeeklyMenuItemProps) {

    return (
        <div className="text-center uppercase mb-4">
            <p className="text-[30px] font-extrabold">{prefix}. {title}</p>
            <p className="text-[20px] font-semibold">{description}</p>
            <p className="text-xl">kr {price},-</p>
            <p className="text-xs lowercase">{allergens.join(', ')}</p>
        </div>
    )



}
import MenuItem from "./MenuItem";

export default function Menu({ menuData, menuTitle }: { menuData: Array<any>, menuTitle: string }) {
    return (
        <div className="flex flex-col w-[100%]">
            <h2 className="text-4xl mb-6">{menuTitle}</h2>
            <div className="flex flex-col gap-12">
                {
                    menuData.map(item => (
                        <MenuItem
                            key={item.menuItemId} // Add a key for each item
                            menuItemId={item.menuItemId}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            allergens={item.allergens}
                        />
                    ))
                }
            </div>
        </div>
    )
}
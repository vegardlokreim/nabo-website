type MenuHeroProps = {
    backgroundImg: string,
    title: string,
    text: string
}

/**
 * Takes backgroundImg as a image url, title as menu title and text as a menu description
 * @returns HTML representing e Hero section
 */
function MenuHero({ backgroundImg, title, text }: MenuHeroProps) {
    return (
        <div className="rounded-lg relative bg-cover bg-center bg-no-repeat h-[20vh] mb-4">
            <img src={backgroundImg} alt="Hero Background" className="rounded-lg absolute inset-0 w-full h-full object-cover" />
            <div className="rounded-lg absolute inset-0 bg-black opacity-65"></div>
            <div className="rounded-lg absolute inset-0 flex flex-col items-start justify-end z-9 p-8">
                <h2 className="text-3xl font-bold text-white">
                    {title}
                </h2>
                <p className="mt-4 text-lg text-white">
                    {text}
                </p>
            </div>
        </div>
    )
}


export default MenuHero
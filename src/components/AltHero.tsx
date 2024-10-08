type AltHeroProps = {
    backgroundImg: string,
    title: string,
    text: string
}

function AltHero({ backgroundImg, title, text }: AltHeroProps) {
    return (
        <div className="rounded-lg relative bg-cover bg-center bg-no-repeat h-[40vh] mb-4">
            <img src={backgroundImg} alt="Hero Background" className="rounded-lg absolute inset-0 w-full h-full object-cover" />
            <div className="rounded-lg absolute inset-0 bg-black opacity-50"></div>
            <div className="rounded-lg absolute inset-0 flex flex-col items-start justify-end text-center z-9 p-8">
                <h2 className="text-4xl font-bold text-white">
                    {title}
                </h2>
                <p className="mt-4 text-lg text-white">
                    {text}
                </p>
            </div>
        </div>
    )
}


export default AltHero
import Logo from '../../assets/nabo_logo.png'
export default function Header() {
    return (
        <header
            className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4f2f0] px-10 py-3">
            <div className="flex items-center gap-4 text-[#181411]">
                <img src={Logo} className="w-[130px]" />
            </div>
            <div className="flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                    <a className="text-[#181411] text-sm font-medium leading-normal" href="/">Home</a>
                    <a className="text-[#181411] text-sm font-medium leading-normal" href="/meny">Meny</a>
                    <a className="text-[#181411] text-sm font-medium leading-normal" href="/om-oss">Om oss</a>
                    <a className="text-[#181411] text-sm font-medium leading-normal" href="/kontakt">Kontakt</a>
                </div>
                <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e66e19] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                >
                    <span className="truncate">Order Now</span>
                </button>
            </div>
        </header>
    )
}
import Logo from '../../assets/nabo_logo.png'

export default function Header() {
    return (
        <header className="flex items-center justify-start bg-white p-4 sticky top-0 z-10">
            <img src={Logo} className="h-8" />
        </header>
    )
}
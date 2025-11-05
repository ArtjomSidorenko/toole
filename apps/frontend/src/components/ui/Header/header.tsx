import HeaderDesktop from "./HeaderDesktop"
import HeaderMobile from "./HeaderMobile"


export default function Header() {
    return (
        <header className="bg-white h-[70px] shadow-md fixed left-0 right-0 z-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="hidden sm:flex w-full justify-between">
                    <HeaderDesktop />
                </div>

                <div className="flex sm:hidden w-full justify-between items-center">
                    <HeaderMobile />
                </div>
            </div>
        </header>
    )
}
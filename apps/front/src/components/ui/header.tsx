import Image from "next/image"
import logo from "../../../public/logo.png"
import uk_flag from "../../../public/uk_lang.svg"
import { Button } from "./button"

export default function Header() {
    return (
        <header className="h-[70px] shadow-md flex justify-between items-center px-4 fixed left-0 right-0 z-10">
            <div className="flex items-center gap-4">
                <Image width={75} height={75} src={logo} alt="logo"></Image>
                <Button variant="ghost">Build Your CV</Button>
            </div>

            <div className="flex items-center gap-4">
                <Button variant="ghost">Post a job</Button>
                <Button variant="lightBlue">Login</Button>
                <Image className="cursor-pointer" src={uk_flag} alt="language"></Image>
            </div>
        </header>
    )
}
import Image from "next/image"
import logo from "../../../../public/logo.png"

import { Button } from "../button"
import SelectLanguage from "./SelectLanguage"

export default function HeaderDesktop() {
    return (
        <>
            <div className="flex items-center gap-4">
                <Image width={75} height={75} src={logo} alt="logo"></Image>
                <Button variant="ghost">Build Your CV</Button>
            </div>

            <div className="flex items-center gap-4">
                <Button variant="ghost">Post a job</Button>
                <Button variant="lightBlue">Login</Button>
                <SelectLanguage/>
            </div>
        </> 
    )
}
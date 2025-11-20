'use client'

import Image from "next/image"
import logo from "../../../../public/logo.png"

import { Button } from "../button"
import SelectLanguage from "./SelectLanguage"
import { useState } from "react"


import SignInForm from "../Modal/SignInForm"
import SignUpForm from "../Modal/SignUpForm"

export default function HeaderDesktop() {
    const [showLogin, setShowLogin] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)
    return (
        <>
            <div className="flex items-center gap-4">
                <Image width={75} height={75} src={logo} alt="logo"></Image>
                <Button variant="ghost">Build Your CV</Button>
            </div>

            <div className="flex items-center gap-4">
                <Button variant="ghost">Post a job</Button>
                <Button variant="lightBlue" onClick={() => setShowLogin(true)}>Login</Button>
                <SelectLanguage/>
            </div>

            <SignInForm
            isOpen={showLogin}
            onClose={()=>setShowLogin(false)}
            onOpenSignUp={()=>{
                setShowLogin(false)
                setShowSignUp(true)
            }}
            />

            <SignUpForm
            isOpen={showSignUp}
            onClose={()=>setShowSignUp(false)}
            onOpenSignIn={()=>{
                setShowSignUp(false)
                setShowLogin(true)
            }
            }
            />

        </> 
    )
}
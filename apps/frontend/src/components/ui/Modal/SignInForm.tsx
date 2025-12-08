import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import google from "../../../../public/google.png"
import PasswordInput from "../password-input"


interface SignInFormProps {
    isOpen: boolean,
    onClose: () => void
    onOpenSignUp: () => void
}

export default function SignInForm({ isOpen, onClose, onOpenSignUp }: SignInFormProps) {
    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${isOpen
                    ? 'bg-black/50 backdrop-blur-sm'
                    : 'bg-black/0 backdrop-blur-none pointer-events-none'
                }`}
            onClick={onClose}>
            <Card
                variant="auth"
                onClick={(e) => e.stopPropagation()}
                className={`transform transition-all duration-500 ${isOpen
                        ? 'scale-100 opacity-100 translate-y-0'
                        : 'scale-90 opacity-0 -translate-y-8'
                    }`}
                style={{
                    transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
            >
                <CardHeader variant="auth">
                    <CardTitle variant="auth">Sign in to your account</CardTitle>
                    <CardDescription variant="auth">Welcome back! We're happy to see you again.</CardDescription>
                </CardHeader>
                <CardContent variant="auth">
                    <form className="flex flex-col gap-[20px]">
                        <div className="flex flex-col gap-1 items-start">
                            <Label htmlFor="email" className="text-[#4B5563] text-[14px]">
                                Email
                            </Label>
                            <Input className="text-[14px] text-gray-500"
                                type="email"
                                id="email"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-1 items-start">
                            <Label htmlFor="password" className="text-[#4B5563] text-[14px]">Password</Label>
                            <PasswordInput />
                            <div className="flex py-[10px] justify-between w-full">
                                <Label className="flex items-center gap-2 cursor-pointer">
                                    <Checkbox
                                        id="toggle-2"
                                        defaultChecked
                                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white "
                                    />
                                    <p className="text-[10px]">
                                        Keep me signed in
                                    </p>
                                </Label>
                                <a className="text-[10px] text-[#2563EB]" href="#">Forgot your password?</a>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter variant="auth">
                    <Button variant="auth">Sign in</Button>
                    <Button variant="google"> <Image
                        src={google}
                        alt="Google"
                        width={20}
                        height={20}
                    />Continue with google</Button>
                    <button className="font-semibold text-[12px] text-[#2563EB] text-center" onClick={onOpenSignUp}>Don't have an account? Sign up</button>
                </CardFooter>
            </Card>
        </div>
    )
}
"use client"

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function PasswordInput() {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="relative w-full">
            <Input className="text-[14px] text-gray-500"
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="••••••••"
                required
            />
            <Button variant="ghost"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}>
                {
                    showPassword ? (
                        <EyeSlashIcon />
                    ) : (
                        <EyeIcon />
                    )
                }
            </Button>

        </div>

    )
}
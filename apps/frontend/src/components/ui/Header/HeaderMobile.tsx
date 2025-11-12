"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import logo from "../../../../public/logo.png"
import Image from "next/image"
import SelectLanguage from "./SelectLanguage"

export default function HeaderMobile() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex items-center gap-2">
                <Image width={75} height={75} src={logo} alt="logo" />
            </div>

            <div className="relative">
                {/* Animated Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden w-8 h-8 pr-2 flex flex-col items-center justify-center space-y-1 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                            isOpen ? 'rotate-45 translate-y-1.5' : ''
                        }`}
                    ></span>
                    <span
                        className={`w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                            isOpen ? 'opacity-0' : ''
                        }`}
                    ></span>
                    <span
                        className={`w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                            isOpen ? '-rotate-45 -translate-y-1.5' : ''
                        }`}
                    ></span>
                </button>

                {/* Message Cloud Menu */}
                <div
                    className={`absolute top-full mt-3 right-0 z-40 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 transform transition-all duration-300 origin-top-right ${
                        isOpen
                            ? 'opacity-100 scale-100 translate-y-0'
                            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Speech bubble tail/pointer */}
                    <div className="absolute -top-2 right-3 w-4 h-4 bg-white border-l border-t border-gray-100 transform rotate-45"></div>

                    {/* Menu Content */}
                    <div className="p-4 pt-6">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 rounded-xl font-medium"
                        >
                            Build Your CV
                        </button>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 rounded-xl font-medium"
                        >
                            Post a Job
                        </button>

                        {/* Separator */}
                        <div className="my-3 border-t border-gray-100"></div>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-full text-left px-4 py-3 bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-200 rounded-xl font-medium"
                        >
                            Login
                        </button>

                        {/* Separator */}
                        <div className="my-3 border-t border-gray-100"></div>

                        {/* Language Selector */}
                        <div className="px-2 py-1">
                            <SelectLanguage />
                        </div>
                    </div>
                </div>

                {/* Click outside to close */}
                {isOpen && (
                    <div
                        className="fixed inset-0 z-30"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </div>
        </>
    )
}

"use client";

import Link from "next/link";
import { navbarConfig } from "@/lib/config/navbar";
import { generalConfig } from "@/lib/config/general";
import { Satisfy } from "next/font/google";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full bg-primary fixed z-50">
            <div className="max-w-400 mx-auto px-6 md:px-32 h-16 flex flex-row justify-between items-center">
                <Link href="/" className="text-[1.75rem] font-semibold" style={{ fontFamily: satisfy.style.fontFamily }}>
                    {generalConfig.name}
                </Link>

                {/* Desktop */}
                <div className="hidden md:flex flex-row items-center space-x-5">
                    {navbarConfig.navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="mx-6 hover:underline underline-offset-[2.5px]">
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile hamburger */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-primary border-t border-black/10 px-6 py-4 flex flex-col gap-4">
                    {navbarConfig.navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm hover:underline underline-offset-[2.5px]"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
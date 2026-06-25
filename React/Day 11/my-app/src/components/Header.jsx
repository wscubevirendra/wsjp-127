"use client"

import React, { useEffect } from 'react'
import Link from "next/link";


export default function Header() {
    return (
        <header className="w-full py-10 bg-amber-300">
            <ol className="flex gap-10">
                <Link href="/">
                    <li>Home</li>
                </Link>
                <Link href="/about">
                    <li>About</li>
                </Link>
                <Link href="/contact">
                    <li>Contact</li>
                </Link>
            </ol>
        </header>
    )
}

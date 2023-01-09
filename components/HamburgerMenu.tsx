'use client'

import Link from "next/link"
import fetchJson from "../handlers/fetchUser";
import useUser from "../hook/useUser";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";


export default function HamburgerManu({
    className,
} : {className: string}) {
    const [isOpen, setOpen] = useState(false) 
    const {user, mutateUser} = useUser()
    const router = useRouter()
    const menu = React.createRef<HTMLDivElement>()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    useEffect(() => {
        const url = pathname + searchParams.toString()
        console.log(url);
        if(isOpen) setOpen(false)
    }, [pathname, searchParams])
    useEffect(() =>  {      
        const handler = (e:any) => {
            if(!menu.current?.contains(e.target) && (e.target.id != "menu-btn")) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })
    return (
        <div className={className}>
            <button
                id="menu-btn"
                className={`${isOpen ? "open" : ""} block hamburger`}
                onClick={() => {
                    setOpen(!isOpen) 
                }}
            >
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
            </button>
            <div
                ref={menu} 
                id='menu' 
                className={`transition-opacity ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} absolute flex flex-col items-center self-end mt-10 font-bold bg-cafeClaro sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
            >
                <Link href={'/acerca-de'} className="px-10 py-2 active:bg-cafeTransparente2">Acerca de</Link>
                <Link href={'https://www.unicef.es/causas/derechos-ninos'} className="px-10 py-2 active:bg-cafeTransparente2" target='_blank'>
                    Unicef
                </Link>
                <Link href={'https://www.unicef.org/mexico/media/1256/file/Caja%20de%20Herramientas.pdf'} className="px-10 py-2 active:bg-cafeTransparente2" target='_blank'>
                    Caja de herramientas
                </Link>
                {user?.isLoggedIn === false && (
                    <Link href={'/login'} 
                        className="py-2 px-5 bg-cafeClaro text-naranjaOpaco text-center transition-colors active:bg-cafeTransparente2"
                    >
                        Login
                    </Link>
                )}
                {user?.isLoggedIn === true && (
                    <Link 
                    href={'/api/logout'} 
                    className="py-2 px-5 bg-cafeClaro text-naranjaOpaco text-center transition-colors active:bg-cafeTransparente2"
                    onClick={async (event) => {
                        event.preventDefault()
                        mutateUser (
                            await fetchJson('api/logout', {method: 'POST'}),
                                false
                            )
                            router.push('login')
                        }}
                    >
                        Logout
                    </Link>
                )}
            </div>
        </div>
    )
}
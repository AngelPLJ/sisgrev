'use client'

import Image from "next/image";
import Link from "next/link";
import fetchJson from "../handlers/fetchUser";
import useUser from "../hook/useUser";
import { useRouter } from "next/navigation";

const HomeNav = () => {
    const { user, mutateUser } = useUser()
    const router = useRouter()
    console.log(`Hay usuario?: ${user?.isLoggedIn}`)
    
    return (
        <nav className="relative mt-5 mx-auto px-5 font-serif font-bold">
            <div className="flex items-center justify-between">
                <div>
                    <Link href={'/'}>
                        <div className="flex text-[#FFFFFF] items-center">
                            <Image 
                                className="object-contain"
                                src={'/images/LogoSisgrev.png'}
                                alt="Logo"
                                width={30}
                                height={30}
                            />
                            <p>SISGREV</p>
                        </div>
                    </Link>
                </div>
                <div>
                    <ul className="hidden md:flex text-white">
                        <li className="px-3">
                            <Link href={'/acerca-de'}>
                                Acerca de
                            </Link>
                        </li>
                        <li className="px-3">
                            <Link href={'https://www.unicef.es/causas/derechos-ninos'} target='_blank'>
                                Unicef
                            </Link>
                        </li>
                        <li className="px-3">
                            <Link href={'https://www.unicef.org/mexico/media/1256/file/Caja%20de%20Herramientas.pdf'} target='_blank'>
                                Caja de herramientas
                            </Link>
                        </li>
                    </ul>
                </div>
                {user?.isLoggedIn === false && (
                    <div className="hidden md:flex">
                        <Link href={'/login'} className="py-1 px-5 bg-cafeClaro text-naranjaOpaco text-center rounded-full">
                            Login
                        </Link>
                    </div>
                )}
                {user?.isLoggedIn === true && (
                    <div className="hidden md:flex">
                        <Link 
                            href={'/api/logout'} 
                            className="py-1 px-5 bg-cafeClaro text-naranjaOpaco text-center rounded-full"
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
                    </div>
                )}
            </div>
        </nav>
    )
}

export default HomeNav;
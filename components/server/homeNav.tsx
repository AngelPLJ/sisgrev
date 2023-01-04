import Link from "next/link"
import Image from "next/image"
import styles from '../../styles/HomeHeader.module.css'

export default function NavBar() {
    return (
    <nav className={styles.header}>
        <div className={styles.logoGob}>
            <Link href="/">
                <Image 
                    className={styles.imagen}
                    src="/images/LogoGob.png"
                    alt="Logo Gobierno Mx"
                    fill
                />
            </Link>
        </div>
        <div className={styles.logoEdoMex}>
            <Link href="/">
                <Image 
                    className={styles.imagen}
                    src="/images/LogoEdoMex.png"
                    alt="Logo Gobierno Mx"
                    fill
                />
            </Link>
        </div>
        <div className={styles.menuBar}>
            <ul className={styles.headerUl}>
                <li>
                    <Link href="/acerca-de" legacyBehavior>
                        <a>Acerca de</a>
                    </Link>
                </li>
                <li>
                    <Link 
                        href="https://www.unicef.org/mexico/media/1256/file/Caja%20de%20Herramientas.pdf"
                        legacyBehavior
                    >
                        <a>Consulte la caja de Herramientas</a>
                    </Link>
                </li>
                <li>
                    <Link href={'/login'}>
                        <a>Login</a>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    )
    
}
'use client';

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
export default function HomePage() {
    return (
    <>
        <main className={styles.main}>
        <div className={styles.description}>
            
            <Link href={'/gestion'}>
                Siguiente pagina{' '}
                <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
                />
            </Link>
        </div>

        <div className={styles.center}>
            <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
            />
            <div className={styles.thirteen}>
            <Image
                src="/thirteen.svg"
                alt="13"
                width={40}
                height={31}
                priority
            />
            </div>
        </div>
        </main>
    </>
    )
}

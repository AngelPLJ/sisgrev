'use client';

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
export default function HomePage() {
    return (
    <>
        <main className={styles.main}>
            <div className={styles.seccion}>
                <div className={styles.texto}>
                    <p> 
                        La caja de herramientas complementa el procedimiento para la determinación, 
                        coordinación y seguimiento de medidas de protección especial por parte de 
                        la Procuraduría de Protección. Contiene ejemplos prácticos, herramientas o lineamientos 
                        específicos que se sugiere utilizar por parte de la Procuraduría de Protección 
                        al aplicar el procedimiento que marca la Ley General de los Derechos de Niñas, 
                        Niños y Adolescentes (LGDNNA) en su artículo 123 para la determinación, 
                        coordinación y seguimiento de medidas de protección especial.
                    </p>
                </div>
                <div>
                    <Image 
                        className={utilStyles.imagen}
                        src={'/images/Niños.JPG'}
                        alt="Niños"
                        width={465}
                        height={235}
                    />
                </div>
            </div>
            <div className={styles.seccion}>
                <div>
                    <Image 
                        className={utilStyles.imagen}
                        src={'/images/ListaDerechos.webp'}
                        alt="Imagen Derechos"
                        width={500}
                        height={300}
                    />
                </div>
                <div className={styles.texto2}>
                    <p>
                        Los Derechos Humanos de niñas, niños y adolescentes están previstos en 
                        la Constitución Política de los Estados Unidos Mexicanos, en los tratados 
                        internacionales y en las demás leyes aplicables, esencialmente en la Convención 
                        sobre los Derechos del Niño y en la Ley General de los Derechos de Niñas, 
                        Niños y Adolescentes (publicada el 4 de diciembre de 2014), la cual reconoce 
                        a niñas, niños y adolescentes como titulares de derechos y, en su artículo 13, 
                        de manera enunciativa y no limitativa señala los siguientes:
                    </p>
                </div>
            </div>
            <div className={styles.seccion}>
                <ul>
                    <li>Derecho a la vida, a la supervivencia y al desarrollo;</li>
                    <li>Derecho de prioridad;</li>
                    <li>Derecho a la identidad;</li>
                    <li>Derecho a vivir en familia;</li>
                    <li>Derecho a la igualdad sustantiva;</li>
                    <li>Derecho a no ser discriminado;</li>
                    <li>Derecho a vivir en condiciones de bienestar y a un sano desarrollo integral;</li>
                    <li>Derecho a una vida libre de violencia y a la integridad personal;</li>
                    <li>Derecho a la protección de la salud y a la seguridad social;</li>
                    <li>Derecho a la inclusión de niñas, niños y adolescentes con discapacidad;</li>
                    <li>Derecho a la educación;</li>
                    <li>Derecho al descanso y al esparcimiento;</li>
                    <li>Derecho a la libertad de convicciones éticas, pensamiento, conciencia, religión y cultura;</li>
                    <li>Derecho a la libertad de expresión y de acceso a la información;</li>
                    <li>Derecho de participación;</li>
                    <li>Derecho de asociación y reunión;</li>
                    <li>Derecho a la intimidad;</li>
                    <li>Derecho a la seguridad jurídica y al debido proceso;</li>
                    <li>Derechos de niñas, niños y adolescentes migrantes, y</li>
                    <li>Derecho de acceso a las tecnologías de la información y comunicación, así como a los servicios de radiodifusión y telecomunicaciones, incluido el de banda ancha e Internet.</li>
                </ul>
            </div>
        </main>
    </>
    )
}

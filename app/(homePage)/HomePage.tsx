'use client';

import Image from 'next/image'

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
export default function HomePage() {
    return (
    <>
        <div className='my-4 flex flex-col px-4 items-center bg-articulo md:flex-row '>
            <div>
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
            <div className='px-6 mt-5 md:mt-0'>
                <Image 
                    className='object-contain'
                    src={'/images/Niños.JPG'}
                    alt="Niños"
                    width={1565}
                    height={235}
                />
            </div>
        </div>
        <div className='my-4 flex flex-col px-4 items-center bg-articulo md:flex-row'>
            <div className='px-6 mb-5 md:mb-0'>
                <Image
                    className='object-contain' 
                    src={'/images/ListaDerechos.webp'}
                    alt="Imagen Derechos"
                    width={1900}
                    height={300}
                />
            </div>
            <div>
                <p className='text-grisRojizo font-semibold'>
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
        <div className='my-6 md:px-16 items-center'>
            <ol className='bg-gradient-to-b from-cafeTransparente1 to-cafeTransparente2 px-10 list-decimal'>
                <li className='py-2'>Derecho a la vida, a la supervivencia y al desarrollo;</li>
                <li className='py-2'>Derecho de prioridad;</li>
                <li className='py-2'>Derecho a la identidad;</li>
                <li className='py-2'>Derecho a vivir en familia;</li>
                <li className='py-2'>Derecho a la igualdad sustantiva;</li>
                <li className='py-2'>Derecho a no ser discriminado;</li>
                <li className='py-2'>Derecho a vivir en condiciones de bienestar y a un sano desarrollo integral;</li>
                <li className='py-2'>Derecho a una vida libre de violencia y a la integridad personal;</li>
                <li className='py-2'>Derecho a la protección de la salud y a la seguridad social;</li>
                <li className='py-2'>Derecho a la inclusión de niñas, niños y adolescentes con discapacidad;</li>
                <li className='py-2'>Derecho a la educación;</li>
                <li className='py-2'>Derecho al descanso y al esparcimiento;</li>
                <li className='py-2'>Derecho a la libertad de convicciones éticas, pensamiento, conciencia, religión y cultura;</li>
                <li className='py-2'>Derecho a la libertad de expresión y de acceso a la información;</li>
                <li className='py-2'>Derecho de participación;</li>
                <li className='py-2'>Derecho de asociación y reunión;</li>
                <li className='py-2'>Derecho a la intimidad;</li>
                <li className='py-2'>Derecho a la seguridad jurídica y al debido proceso;</li>
                <li className='py-2'>Derechos de niñas, niños y adolescentes migrantes, y</li>
                <li className='py-2'>Derecho de acceso a las tecnologías de la información y comunicación, así como a los servicios de radiodifusión y telecomunicaciones, incluido el de banda ancha e Internet.</li>
            </ol>
        </div>
    </>
    )
}

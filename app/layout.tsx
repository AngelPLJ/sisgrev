'use client'
import '../styles/globals.css'
import Navbar from '../components/HomeNav'
import { SWRConfig } from 'swr';
import fetchJson from '../handlers/fetchUser';

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="es">
        <SWRConfig value={{
          fetcher: fetchJson,
          onError: (err) => {
            console.error(err)
          },
        }}>
          <body className='bg-gradient-to-r from-naranjaOpaco to-naranjaClaro'>
            <Navbar/>
            <main className='mt-10 mx-10'>
              {children}
            </main>
          </body>
        </SWRConfig>
      </html>
    );
  }
  
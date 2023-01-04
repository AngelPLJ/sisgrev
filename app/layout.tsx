import '../styles/globals.css'
import Navbar from '../components/server/homeNav'

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="es">
        <body>
          <Navbar/>
          <main className='container'>
            {children}
          </main>
        </body>
      </html>
    );
  }
  
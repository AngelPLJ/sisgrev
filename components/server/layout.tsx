import Link from "next/link";

// Layout is a Server Component by default
export default function Layout({ 
    children, 
    home, } : {
        children: React.ReactNode
        home: boolean
    }) {
  return (
    <>
        <nav>
            <header>
            {home ? (
                    <>
                        <h1>Home</h1>
                    </>
                ) : (
                    <>
                        <h2>
                        <Link href="/">
                            Volver al inicio
                        </Link>
                        </h2>
                    </>
                    )}
            </header>
        </nav>
        <main>{children}</main>
    </>
  );
}

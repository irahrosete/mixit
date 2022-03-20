import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Link href='/'>
                    <a><Image src='/logo.svg' width={100} height={50} /></a>
                </Link>
            </div>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/cocktails'><a>Drinks</a></Link>
        </nav>
    )
}

export default Navbar
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src='/logo.svg' width={128} height={77} />
            </div>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/cocktails'><a>Cocktails</a></Link>
        </nav>
    )
}

export default Navbar
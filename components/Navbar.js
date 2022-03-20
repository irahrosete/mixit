import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return ( 
        <nav>
            <div>
                <Image />
            </div>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/cocktails'><a>Concktails</a></Link>
        </nav>
     )
}

export default Navbar
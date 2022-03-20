import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])
    return (
        <div className="not-found">
            <h1>Oooops...</h1>
            <h3>That page cannot be found</h3>
            <p>Go back to the <Link href='/'><a>Homepage</a></Link></p>
        </div>
    )
}

export default NotFound
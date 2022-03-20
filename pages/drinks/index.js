import Link from "next/link"
import { apiDrinkByLetter } from "../../util/apis"
import styles from '../../styles/Drinks.module.css'

export const getStaticProps = async () => {
    const letter = Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 1) || 'g'
    const res = await fetch(apiDrinkByLetter + letter)
    const data = await res.json()
    return {
        props: { drinks: data.drinks }
    }
}

const Drinks = ({ drinks }) => {
    return (
        <div>
            <h1 className="title">Drinks</h1>
            <div className={styles.letters}>
                <Link href={apiDrinkByLetter}><a>A</a></Link>
                <Link href={apiDrinkByLetter}><a>B</a></Link>
                <Link href={apiDrinkByLetter}><a>C</a></Link>
                <Link href={apiDrinkByLetter}><a>D</a></Link>
                <Link href={apiDrinkByLetter}><a>E</a></Link>
                <Link href={apiDrinkByLetter}><a>F</a></Link>
                <Link href={apiDrinkByLetter}><a>G</a></Link>
                <Link href={apiDrinkByLetter}><a>H</a></Link>
                <Link href={apiDrinkByLetter}><a>I</a></Link>
                <Link href={apiDrinkByLetter}><a>J</a></Link>
                <Link href={apiDrinkByLetter}><a>K</a></Link>
                <Link href={apiDrinkByLetter}><a>L</a></Link>
                <Link href={apiDrinkByLetter}><a>M</a></Link>
                <Link href={apiDrinkByLetter}><a>N</a></Link>
                <Link href={apiDrinkByLetter}><a>O</a></Link>
                <Link href={apiDrinkByLetter}><a>P</a></Link>
                <Link href={apiDrinkByLetter}><a>Q</a></Link>
                <Link href={apiDrinkByLetter}><a>R</a></Link>
                <Link href={apiDrinkByLetter}><a>S</a></Link>
                <Link href={apiDrinkByLetter}><a>T</a></Link>
                <Link href={apiDrinkByLetter}><a>U</a></Link>
                <Link href={apiDrinkByLetter}><a>V</a></Link>
                <Link href={apiDrinkByLetter}><a>W</a></Link>
                <Link href={apiDrinkByLetter}><a>X</a></Link>
                <Link href={apiDrinkByLetter}><a>Y</a></Link>
                <Link href={apiDrinkByLetter}><a>Z</a></Link>
            </div>

            {drinks.map(drink => (
                <Link href={'/drinks/' + drink.idDrink} key={drink.idDrink}>
                    <a className={styles.single}>
                        <h4 >{drink.strDrink}</h4>
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default Drinks
import Link from "next/link"
import { apiDrinkByLetter } from "../../util/apis"
import styles from '../../styles/Drinks.module.css'
import Letters from "../../components/Letters"

export const getStaticProps = async () => {
    const letter = Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 1) || 'g'
    const res = await fetch(apiDrinkByLetter + 'm')
    const data = await res.json()
    return {
        props: { drinks: data.drinks }
    }
}

const Drinks = ({ drinks }) => {
    return (
        <div>
            <h1 className="title">Drinks</h1>
            <Letters />
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
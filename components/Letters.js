import styles from '../styles/Drinks.module.css'
import Link from 'next/link'
import { apiDrinkByLetter } from '../util/apis'

const Letters = () => {
    return ( 
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
     )
}

export default Letters
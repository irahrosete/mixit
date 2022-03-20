import { apiRandomDrink } from '../util/apis'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Random.module.css'

export const getStaticProps = async () => {
    const res = await fetch(apiRandomDrink)
    const data = await res.json()
    console.log(data.drinks[0])
    return {
        props: { randomCocktail: data.drinks[0] }
    }
}

const Random = ({ randomCocktail }) => {
    return (<>
        <h1 className='title'>Enjoy your drink!</h1>
        <div className={styles.single}>
            {console.log(randomCocktail)}
            <h2 className='title'>{randomCocktail.strDrink}</h2>
            <div className={styles.center}>
            <Image className={styles.image} src={randomCocktail.strDrinkThumb} alt='cocktail' width={500} height={500} />
            </div>
            <h4>Ingredients</h4>
            <p className='text'>{randomCocktail.strMeasure1} {randomCocktail.strIngredient1}</p>
            <p className='text'>{randomCocktail.strMeasure2} {randomCocktail.strIngredient2}</p>
            <p className='text'>{randomCocktail.strMeasure3} {randomCocktail.strIngredient3}</p>
            <p className='text'>{randomCocktail.strMeasure4} {randomCocktail.strIngredient4}</p>
            <p className='text'>{randomCocktail.strMeasure5} {randomCocktail.strIngredient5}</p>
            <p className='text'>{randomCocktail.strMeasure6} {randomCocktail.strIngredient6}</p>
            <p className='text'>{randomCocktail.strMeasure7} {randomCocktail.strIngredient7}</p>
            <p className='text'>{randomCocktail.strMeasure8} {randomCocktail.strIngredient8}</p>
            <p className='text'>{randomCocktail.strMeasure9} {randomCocktail.strIngredient9}</p>
            <p className='text'>{randomCocktail.strMeasure10} {randomCocktail.strIngredient10}</p>
            <p className='text'>{randomCocktail.strMeasure11} {randomCocktail.strIngredient11}</p>
            <p className='text'>{randomCocktail.strMeasure12} {randomCocktail.strIngredient12}</p>
            <p className='text'>{randomCocktail.strMeasure13} {randomCocktail.strIngredient13}</p>
            <p className='text'>{randomCocktail.strMeasure14} {randomCocktail.strIngredient14}</p>
            <p className='text'>{randomCocktail.strMeasure15} {randomCocktail.strIngredient15}</p>
            <h4>Instructions</h4>
            <p className='text'>{randomCocktail.strInstructions}</p>
        </div>
            <Link href='/random'>
                <a className='btn'>Random Drink</a>
            </Link>
    </>
    )
}

export default Random
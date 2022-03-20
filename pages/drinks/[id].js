import { apiDrinkById, apiDrinkByLetter } from "../../util/apis"
import styles from '../../styles/Random.module.css'
import Image from "next/image"

export const getStaticPaths = async () => {
    const letter = Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 1) || 'g'
    const res = await fetch(apiDrinkByLetter + 'm')

    const data = await res.json()

    const paths = data.drinks.map(drink => {
        return {
            params: {id: drink.idDrink.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(apiDrinkById + id)
    const data = await res.json()

    return {
        props: {drink: data.drinks[0]}
    }
}

const DrinkDetail = ({ drink }) => {
    return ( 
        <>
        <h1 className='title'>Enjoy your drink!</h1>
        <div className={styles.single}>
            <h2 className='title'>{drink.strDrink}</h2>
            <div className={styles.center}>
            <Image className={styles.image} src={drink.strDrinkThumb} alt='cocktail' width={500} height={500} />
            </div>
            <h4>Ingredients</h4>
            <p className='text'>{drink.strMeasure1} {drink.strIngredient1}</p>
            <p className='text'>{drink.strMeasure2} {drink.strIngredient2}</p>
            <p className='text'>{drink.strMeasure3} {drink.strIngredient3}</p>
            <p className='text'>{drink.strMeasure4} {drink.strIngredient4}</p>
            <p className='text'>{drink.strMeasure5} {drink.strIngredient5}</p>
            <p className='text'>{drink.strMeasure6} {drink.strIngredient6}</p>
            <p className='text'>{drink.strMeasure7} {drink.strIngredient7}</p>
            <p className='text'>{drink.strMeasure8} {drink.strIngredient8}</p>
            <p className='text'>{drink.strMeasure9} {drink.strIngredient9}</p>
            <p className='text'>{drink.strMeasure10} {drink.strIngredient10}</p>
            <p className='text'>{drink.strMeasure11} {drink.strIngredient11}</p>
            <p className='text'>{drink.strMeasure12} {drink.strIngredient12}</p>
            <p className='text'>{drink.strMeasure13} {drink.strIngredient13}</p>
            <p className='text'>{drink.strMeasure14} {drink.strIngredient14}</p>
            <p className='text'>{drink.strMeasure15} {drink.strIngredient15}</p>
            <h4>Instructions</h4>
            <p className='text'>{drink.strInstructions}</p>
        </div></>
     );
}
 
export default DrinkDetail;
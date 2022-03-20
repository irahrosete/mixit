import { apiRandomDrink } from '../util/apis'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Random.module.css'
import { useState, useEffect } from 'react'

export const getServerSideProps = async () => {
    const res = await fetch(apiRandomDrink)
    const data = await res.json()
    return {
        props: { randomDrink: data.drinks[0] }
    }
}

const Random = ({ randomDrink }) => {
    // const [randomDrink, setRandomDrink] = useState()
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch(apiRandomDrink)
    //         const data = await res.json()
    //         console.log(data.drinks[0]);
    //         setRandomDrink(data.drinks[0])
    //     }
    //     fetchData()
    // }, [])

    return (<>
        <h1 className='title'>Enjoy your drink!</h1>
        <div className={styles.single}>
            {/* {console.log(data.drinks[0])} */}
            <h2 className='title'>{randomDrink.strDrink}</h2>
            <div className={styles.center}>
                <Image className={styles.image} src={randomDrink.strDrinkThumb} alt='cocktail' width={500} height={500} />
            </div>
            <h4>Ingredients</h4>
            <p className='text'>{randomDrink.strMeasure1} {randomDrink.strIngredient1}</p>
            <p className='text'>{randomDrink.strMeasure2} {randomDrink.strIngredient2}</p>
            <p className='text'>{randomDrink.strMeasure3} {randomDrink.strIngredient3}</p>
            <p className='text'>{randomDrink.strMeasure4} {randomDrink.strIngredient4}</p>
            <p className='text'>{randomDrink.strMeasure5} {randomDrink.strIngredient5}</p>
            <p className='text'>{randomDrink.strMeasure6} {randomDrink.strIngredient6}</p>
            <p className='text'>{randomDrink.strMeasure7} {randomDrink.strIngredient7}</p>
            <p className='text'>{randomDrink.strMeasure8} {randomDrink.strIngredient8}</p>
            <p className='text'>{randomDrink.strMeasure9} {randomDrink.strIngredient9}</p>
            <p className='text'>{randomDrink.strMeasure10} {randomDrink.strIngredient10}</p>
            <p className='text'>{randomDrink.strMeasure11} {randomDrink.strIngredient11}</p>
            <p className='text'>{randomDrink.strMeasure12} {randomDrink.strIngredient12}</p>
            <p className='text'>{randomDrink.strMeasure13} {randomDrink.strIngredient13}</p>
            <p className='text'>{randomDrink.strMeasure14} {randomDrink.strIngredient14}</p>
            <p className='text'>{randomDrink.strMeasure15} {randomDrink.strIngredient15}</p>
            <h4>Instructions</h4>
            <p className='text'>{randomDrink.strInstructions}</p>
        </div>
        <Link href='/random'>
            <a className='btn'>Random Drink</a>
        </Link>
    </>
    )
}

export default Random
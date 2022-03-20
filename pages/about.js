import Head from "next/head"
import styles from '../styles/Home.module.css'

const About = () => {
    return ( <>
        <Head>
            <title>Mix It | About</title>
            <meta name='keywords' content='cocktails' />
        </Head>
        <div>
            <h1 className={styles.title}>About</h1>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fuga, nihil obcaecati rem magnam asperiores possimus nemo dolorum! Rem tempora vel quas quo ipsam quae vero repellat ea nostrum! Quis!</p>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni amet in debitis, porro inventore obcaecati enim officiis praesentium ex eius nisi laborum placeat ut doloremque voluptatibus ratione quam, et natus!</p>
        </div>
        </>
     );
}
 
export default About;
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mix It | Home</title>
        <meta name='keywords' content='cocktails' />
      </Head>
      <div>
        <h1 className='title'>Mix It</h1>
        <p className='text'>
          Check a random drink to try. Find out what a drink is made of. Learn how to mix it and what glass to serve it with.
          Learn more about a specific ingredient. Discover other drinks using the same ingredient. Be the star of the party!
        </p>
        <Link href='/random'>
          <a className='btn'>Random Drink</a>
        </Link>
      </div>
    </>
  )
}

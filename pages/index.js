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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
          recusandae libero debitis nemo voluptate cumque rem omnis nobis
          cupiditate unde, odio reiciendis molestias velit, aspernatur atque id
          corporis ab optio.
        </p>
        <p className='text'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
          accusantium possimus voluptate harum, illum labore modi nihil quia
          nostrum dolore perferendis mollitia assumenda recusandae aut? In
          incidunt optio nostrum saepe.
        </p>
        <Link href='/random'>
          <a className='btn'>Random Drink</a>
        </Link>
      </div>
    </>
  )
}

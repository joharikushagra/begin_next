import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div className={styles.container}>
      {/* <Navbar/> */}
      <h1 className={styles.title}>Home Page</h1>
      <p>lorem2ajfbalbolanlfnalijnfljiwjpqjfijoewvbkwjsnvolnwsevjowsjoivjwpjgpwj0</p>
      <p>lorem2ajfbalbolanlfnalijnfljiwjpqjfijoewvbkwjsnvolnwsevjowsjoivjwpjgpwj0</p>
      <p></p>
      <Link href='/ninjas'>
      <a className={styles.btn}>See Ninjas List</a>
      </Link>
      {/* <Footer/> */}
    </div>
    </>
  )
}

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const App = () => {
  return (
    <div className="App">
      <Head>
        <title>Augustine Li</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/AddArticle">Add Article</Link>
      <br></br>
      <Link href="/EditArticles">Edit Articles</Link>
    </div>
  )
}

export default App;
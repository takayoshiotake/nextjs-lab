import { useState } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import styles from '../styles/Home.module.css'
import { destroyCookie } from 'nookies'

export async function getServerSideProps(context) {
  destroyCookie(context, 'accessToken')
  return { props: {} }
}

export default function SignIn() {
  const [username, setUsername] = useState('')
  const [hasError, setHasError] = useState(false)
  const signIn = async (e) => {
    e.preventDefault()
    const response = await fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    })
    if (response.ok) {
      Router.replace('/')
    } else {
      setHasError(true)
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Sign In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sign In
        </h1>
        <form onSubmit={signIn}>
          Name:<br />
          <input
            name="name"
            type="text"
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          /><br />
          <br />
          <button type="submit">Sign In</button>
        </form>
        <div style={
          {
            color: 'red',
            display: hasError ? 'block' : 'none',
            padding: '16px',
          }}>Enter `taro` in the name field.</div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

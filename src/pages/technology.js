import * as React from 'react'
import { technology as api, technologyBg } from '../api/mock'
import Tech from '../blocks/Tech/Tech'
import Picture from '../components/Picture'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Picture api={technologyBg} />
        <Tech api={api} />
      </main>
    </div>
  )
}

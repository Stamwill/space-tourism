import * as React from 'react'
import { technology as api, technologyBg } from '../api/mock'
import Picture from '../components/Picture'
import PageTracker from '../blocks/PageTracker'
import Tech from '../blocks/Tech/Tech'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Picture api={technologyBg} />
        <PageTracker pageNum={`03`} pageLabel={`SPACE LAUNCH 101`} />
        <Tech api={api} />
      </main>
    </div>
  )
}

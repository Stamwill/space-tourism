import * as React from 'react'
import { crew as api, crewBg } from '../api/mock'
import Picture from '../components/Picture'
import PageTracker from '../blocks/PageTracker'
import styles from '../styles/Home.module.css'

export default function Home() {
  console.log('api: ', api)
  console.log('crewbg: ', crewBg)

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Picture api={crewBg} />
        <PageTracker />
      </main>
    </div>
  )
}

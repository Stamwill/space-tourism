import * as React from 'react'
import { destinations as api, destinationBg } from '../api/mock'
import Picture from '../components/Picture'
import PageTracker from '../blocks/PageTracker'
import Planets from '../blocks/Planets'
import Destination from '../blocks/Destination/Destination'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Picture api={destinationBg} />
        <PageTracker />
        <Planets api={api} />
      </main>
    </div>
  )
}

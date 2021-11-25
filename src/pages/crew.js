import * as React from 'react'
import { crew as api, crewBg } from '../api/mock'
import Picture from '../components/Picture'
import PageTracker from '../blocks/PageTracker'
import CrewMember from '../blocks/CrewMember/CrewMember'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Picture api={crewBg} />
        <PageTracker />
        <CrewMember api={api} />
      </main>
    </div>
  )
}

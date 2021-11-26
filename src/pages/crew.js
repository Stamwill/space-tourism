import * as React from 'react'
import { crew as api, crewBg } from '../api/mock'
import Picture from '../components/Picture'
import CrewMember from '../blocks/CrewMember/CrewMember'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Picture api={crewBg} />
        <CrewMember api={api} />
      </main>
    </div>
  )
}

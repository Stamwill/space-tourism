import * as React from 'react'
import { crew as api, crewBg } from '../api/mock'
import Picture from '../components/Picture'
import PageTracker from '../blocks/PageTracker'
import CrewMember from '../blocks/CrewMember/CrewMember'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.container}>
      {/* <main className={styles.main}> */}
      <Picture api={crewBg} />
      <PageTracker pageNum={`02`} pageLabel={`MEET YOUR CREW`} />
      <CrewMember api={api} />
      {/* </main> */}
    </main>
  )
}

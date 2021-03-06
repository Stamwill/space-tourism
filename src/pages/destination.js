import * as React from 'react'
import { destinations as api, destinationBg } from '../api/mock'
import Picture from '../components/Picture'
import PageTracker from '../blocks/PageTracker/PageTracker'
import Planets from '../blocks/Planets'
import styles from '../styles/Home.module.css'
import classes from '../styles/destination.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={classes.main}>
        <Picture api={destinationBg} />
        <PageTracker pageNum={`01`} pageLabel={`PICK YOUR DESTINATION`} />
        <Planets api={api} />
      </main>
    </div>
  )
}

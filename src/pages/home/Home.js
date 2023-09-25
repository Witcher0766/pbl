import React from 'react'
import styles from './Home.module.css';
import { Routes, Route } from 'react-router-dom';
import { ConnectedDB1, ConnectedDB2, ConnectedDB3, IntegratedView, Navbar } from '../../components/home';



const Home = () => {
  return (
    <>
    <div className={styles.home}>
        <div className={styles.navbar}>
        <Navbar/>
        </div>
        <div className={styles.content}>
        <Routes>
        <Route path="integratedview" element={ <IntegratedView/> } />
        <Route path="connecteddb1" element={ <ConnectedDB1/> } />
        <Route path="connecteddb2" element={ <ConnectedDB2/> } />
        <Route path="connecteddb3" element={ <ConnectedDB3/> } />
        </Routes>
        </div>
        </div>
    </>
  )
}

export default Home;
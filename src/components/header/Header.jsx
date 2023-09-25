import React from 'react'
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className={styles["nav-container"]}>
      <li> <NavLink to="/"> Database Monitoring Dashboard </NavLink></li>
      <div className={styles["nav-list"]}>
        <ul>
          <li> <a href="/">Logout</a></li>
          <li> <a href="/">UserName</a></li>
          <li> <NavLink to="/profile">Profile</NavLink></li>
        </ul>
      </div>
      </div>
    </>
  )
}

export default Header;
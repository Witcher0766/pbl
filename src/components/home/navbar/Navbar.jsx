import React from 'react'
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className={styles.navbar}>
    <nav>
    <ul>
      <li>
        <NavLink to="/integratedview" >
          Home
        </NavLink>
        </li>
     <li>
     <NavLink to="/connecteddb1" >
          View Products
        </NavLink>
     </li>
       <li>
       <NavLink to="/connecteddb2" >
        Add Product
        </NavLink>
       </li>
       <li>
       <NavLink to="/connecteddb3">
        Orders
        </NavLink>
       </li>
     
    </ul>
    </nav>
    </div>
  </>
  )
}

export default Navbar
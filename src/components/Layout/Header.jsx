import {Link} from 'react-router-dom'
import { useState } from 'react'
import styles from './Header.module.css'

import logo from '/PAULO.svg'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  function specMenuMobile(){
    setMenuOpen(!menuOpen)

    console.log(menuOpen)
  }

  function backToTop(){
    window.scroll({
      top: 0,
    })
  }

  return(
    <header className={styles.header}>
      <div className={styles.headerDesktop}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.logo}/>
        </Link>
        <nav>
          <ul>
            <li>
              <Link className={styles.link} to="/">Home</Link>
            </li>
            <li>
              <Link className={styles.link} to="/Projetos">Projetos</Link>
            </li>
            <li>
              <Link className={styles.link} to="/Sobre">Sobre</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.headerMobile}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.logo}/>
        </Link>
        <div className={styles.menuMobile} onClick={specMenuMobile}>
          <div className={menuOpen === true ? 'rowActive1' : 'rowDesactive1'}></div>
          <div className={menuOpen === true ? 'rowActive2' : 'rowDesactive2'}></div>
          <div className={menuOpen === true ? 'rowActive3' : 'rowDesactive3'}></div>
        </div>
      </div>
      <div className={menuOpen === true ? 'MenuMobileOpen' : 'MenuMobileClose'}>
          <nav>
            <ul>
              <li onClick={specMenuMobile}>
                <Link className={styles.link} onClick={backToTop} to="/">Home</Link>
              </li>
              <li onClick={specMenuMobile}>
                <Link className={styles.link} onClick={backToTop} to="/Projetos">Projetos</Link>
              </li>
              <li onClick={specMenuMobile}>
                <Link className={styles.link} onClick={backToTop} to="/Sobre">Sobre</Link>
              </li>
            </ul>
          </nav>
        </div>
    </header>
  )
}

export default Header
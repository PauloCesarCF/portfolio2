import {Link} from 'react-router-dom'
import { useState } from 'react'
import styles from './Header.module.css'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  function specMenuMobile(){
    setMenuOpen(!menuOpen)

    console.log(menuOpen)
  }

  return(
    <header className={styles.header}>
      <div className={styles.headerDesktop}>
        Logo
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
        Logo
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
                <Link className={styles.link} to="/">Home</Link>
              </li>
              <li onClick={specMenuMobile}>
                <Link className={styles.link} to="/Projetos">Projetos</Link>
              </li>
              <li onClick={specMenuMobile}>
                <Link className={styles.link} to="/Sobre">Sobre</Link>
              </li>
            </ul>
          </nav>
        </div>
    </header>
  )
}

export default Header
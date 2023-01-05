import styles from './Sobre.module.css'

import JavaScriptLogo from '/logo-javascript.svg'
import reactLogo from '/react-2.svg'
import htmlLogo from '/html-1.svg'
import cssLogo from '/css-3.svg'
import viteLogo from '/vitejs.svg'
import typeScriptLogo from '/typeScript.svg'

const Sobre = () => {
  return(
    <main className={styles.main}>
      <h1>Sobre Paulo César</h1>
      <p>Meu primeiro contato com programação foi em 2021 e de lá pra cá eu vi o que poderia ser feito com programação e eu acabei me apaixonando por tecnologia, agora o meu objetivo é consegui minha primeira vaga como developer front-end e quero evoluir cada vez mais nessa área.</p>
      <div>
        <p>Tenho bastante contato com HTML semântico. No JavaScript sei programação funcional e orientada a objetos, sempre tendo mantém um codigo legivel para uso futuro. No React Js sei usar a estrutuação de componentes. Utilizo Vite e utilizo também o Axios no react caso seja necessario fazer uma conexão API.</p>
        <div className={styles.containerTecnologias}>
          <p> Tecnologias</p>
          <div><img src={JavaScriptLogo} alt="javaScript logo" className={styles.logoSVG}/> <p>JavaScript</p></div>
          <div><img src={htmlLogo} alt="html logo" className={styles.logoSVG}/> <p>HTML</p></div>
          <div><img src={cssLogo} alt="css logo" className={styles.logoSVG}/> <p>CSS</p></div>
          <div><img src={typeScriptLogo} alt="typeScript logo" className={styles.logoSVG}/> <p>TypeScript</p></div>
          <div><img src={reactLogo} alt="react logo" className={styles.logoSVG}/> <p>React JS</p></div>
          <div><img src={viteLogo} alt="vite logo" className={styles.logoSVG}/> <p>Vite</p></div>
        </div>
      </div>
    </main>
  )
}

export default Sobre
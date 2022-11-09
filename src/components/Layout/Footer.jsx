import PauloCesarFoto from '/Paulo-Cesar.jpg'
import githubIcon from '/github-icon.svg'
import linkedinIcon from '/linkedin-icon.svg'

import styles from './Footer.module.css'

const Footer = () => {
  return(
    <footer className={styles.Footer}>
      <div>
        <div>
          <img src={PauloCesarFoto} alt="Foto de Paulo César"/>
          <p>Estudo há mais de 1 ano no front-end e agora estou em busca da minha primeira experiência no mercado de trabalho</p>
        </div>
        <p>Front-end</p>
        <div>
          <a href="https://github.com/PauloCesarCF" target="_blank">
            <img src={githubIcon} alt="github icon" />
            <p>GITHUB</p>
          </a>
          <a href="https://www.linkedin.com/in/paulo-c%C3%A9sar-184836225/" target="_blank">
            <img src={linkedinIcon} alt="github icon" />
            <p>LINKEDIN</p>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
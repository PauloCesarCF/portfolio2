import projectPokemons from '/pokedex.jpeg'
import projectPokemonMobile from '/pokedex-mobile.jpeg'
import photoProjectCard from '/project.png'
import photoProjectCardMobile from '/project-card-mobile.jpeg'
import projectAnimes from '/listAnimes.jpeg'
import projectAnimesMobile from '/listAnimes-mobile.jpeg'

const Projects = () =>{
  return(
    <main>
        <h1>Projetos</h1>
        
        <section>
          <div className="containerProject">
            <div>
              <a href="https://explorer-lab-card.vercel.app/">
                <img src={photoProjectCard} alt="foto"/>
              </a>
              <a href="https://explorer-lab-card.vercel.app/">
                <h2>Gerador de cartão</h2>
              </a>
              <p>Nesse projeto o objetivo é simular um gerador de cartão na qual tem masterCard, visa e discover como opção e cada um começa com um numero inicial diferente, então por exemplo, se você colocar 4 e outros digitos vai aparecer o cartão da visa, se colocar um digito que começa com 5 e o proximo digito for entre 1 a 5 vai aparecer o cartão do mastercard e o cartão discover começa com 0611.</p>
            </div>
            <div>
              <a href="https://explorer-lab-card.vercel.app/">
                <img src={photoProjectCardMobile} alt="foto" className="photoProjectMobile"/>
              </a>
            </div>
          </div>

          <div className="containerProject">
            <div>
              <a href="https://api-pokemon-two-gold.vercel.app/">
                <img src={projectPokemons} alt="foto"/>
              </a>
              <a href="https://api-pokemon-two-gold.vercel.app/">
                <h2>Lista Pokémon</h2>
              </a>
              <p>Nesse projeto tem uma lista de 150 pokemons, e pra cada pokemon temos um card na qual mostrar o nome do pokemon, o id e o tipo do pokemon. Tem também mua barra de pesquisar na qual você pode procurar o pokemon pelo id ou pelo nome.</p>
            </div>
            <div>
              <a href="https://api-pokemon-two-gold.vercel.app/">
                <img src={projectPokemonMobile} alt="foto" className="photoProjectMobile"/>
              </a>
            </div>
          </div>

          <div className="containerProject">
            <div>
              <a href="https://list-anime-five.vercel.app/">
                <img src={projectAnimes} alt="foto"/>
              </a>
              <a href="https://list-anime-five.vercel.app/">
                <h2>Lista de animes</h2>
              </a>
              <p>O projeto consiste em apresentar animes, sejam o animes mais importantes do momento ou até mesmo mostrar animes pela categoria, e se você clicar em uma anime específico, você obtem mais informações sobre o anime que são as synopsis e um trailer, há também uma barra de pesquisa</p>
            </div>
            <div>
              <a href="https://list-animes-eight.vercel.app/">
                <img src={projectAnimesMobile} alt="foto" className="photoProjectMobile"/>
              </a>
            </div>
          </div>
        </section>
      </main>
  )
}

export default Projects
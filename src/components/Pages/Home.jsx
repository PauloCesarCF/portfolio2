import projectPokemons from '/pokedex.jpeg'
import projectPokemonMobile from '/pokedex-mobile.jpeg'
import photoProjectCard from '/project.png'
import photoProjectCardMobile from '/project-card-mobile.jpeg'

const Home = () => {
  return(
    <div className="App">
      <div className="smallInfo">
        <h1>Olá, meu nome é Paulo César</h1>
        <small>Programador front-end</small>
        <small>Em busca da primeira experciencia</small>
      </div>

      <main>
        <h1>Principais projetos</h1>
        
        <section>
          <div className="containerProject">
            <div>
              <img src={photoProjectCard} alt="foto"/>
              <h2>Gerador de cartão</h2>
              <p>Nesse projeto o objetivo é simular um gerador de cartão na qual tem masterCard, visa e discover como opção e cada um começa com um numero inicial diferente, então por exemplo, se você colocar 4 e outros digitos vai aparecer o cartão da visa, se colocar um digito que começa com 5 e o proximo digito for entre 1 a 5 vai aparecer o cartão do mastercard e o cartão discover começa com 0611.</p>
            </div>
            <div>
              <img src={photoProjectCardMobile} alt="foto" className="photoProjectMobile"/>
            </div>
          </div>

          <div className="containerProject">
            <div>
              <img src={projectPokemons} alt="foto"/>
              <h2>Lista Pokémon</h2>
              <p>Nesse projeto tem uma lista de 150 pokemons, e pra cada pokemon temos um card na qual mostrar o nome do pokemon, o id e o tipo do pokemon. Tem também mua barra de pesquisar na qual você pode procurar o pokemon pelo id ou pelo nome.</p>
            </div>
            <div>
              <img src={projectPokemonMobile} alt="foto" className="photoProjectMobile"/>
            </div>
          <div>

            </div>
          </div>
        </section>

      </main>
    </div>
  )
}

export default Home
/* eslint-disable react/jsx-no-comment-textnodes */
import{ livros } from'./DadosUltimosLancamentos'
import { Titulo}  from '../Titulo'
import Recomenda from '../../Recomenda'
import imagemLivro from '../../imagens/livro2.png'
import styled from 'styled-components'


const UltimosLancamentosContainer = styled.section`

`
const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`
//o props pode ser usado para alinhamento, tamanho da fonte e etc.
function UltimosLancamentos(){
        return(
            <UltimosLancamentosContainer>
            <Titulo cor = "EB9B00" >ULTIMOS LANCAMENTOS</Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                    <img src={livro.src} alt="" />
                ) ) }
            </NovosLivrosContainer>
            <Recomenda
            titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>

        )
}

export default UltimosLancamentos
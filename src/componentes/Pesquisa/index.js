import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
//pesquisar porque usar os livros dentro de chaves
import {livros} from './dadosPesquisa'

const PesquisaContainer = styled.section`
 background-image: linear-gradient(90deg, #FFDAB9 35%, #FDF5E6 65%);
        color: #4F4F4F;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`

const Titulo = styled.h2 `
        color:#1C1C1C;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`
const Resultado = styled.div`
    justify-content: center;
    margin-bottom: 20px;
    cursor: pointer;
   p {
        font-size: 16px;
        color:#4B0082;
    }
`


// conceito de estado: Dados mutaveis
function Pesquisa() {
    const [ livrosPesquisados, setLivrosPesquisados ] = useState([])
   // console.log(livrosPesquisados) apenas validar

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={evento => {
                const textoDigitado = evento.target.value
                const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado) )
                setLivrosPesquisados(resultadoPesquisa)
        }}
/>
        {livrosPesquisados.map(livro=>(
         <Resultado>
            <p><b>{livro.nome}</b></p>
            <img src={livro.src} alt="imagem do livro escolhido" />
         </Resultado>
          
        ) ) }
        </PesquisaContainer>
    )
}

export default Pesquisa;
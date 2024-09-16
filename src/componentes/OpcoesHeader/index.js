//import './estilo.css'
import styled from 'styled-components'

const textoOpcoes = [' CATEGORIAS ',' FAVORITOS ',' MINHA ESTANTE '];
const Opcoes = styled.ul`
 display:flex
`
const Opcao = styled.li`
    font-size: 16px;
        justify-content: center;
        align-items:center;
        text-align: center;
        height: 100%;
        padding: 0 5px;
        cursor: pointer;
        min-width: 120px;
        font-weight: bold;
        list-style: none;
`


function OpcoesHeader () {
return(
    <Opcoes>
    { textoOpcoes.map ( (texto) => (
    <Opcao><p>{texto}</p></Opcao>
      ) ) }
</Opcoes>
)

}

export default OpcoesHeader
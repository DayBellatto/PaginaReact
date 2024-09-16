import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icones = styled.ul`
    display: flex;
    align-items: center;
    font-weight: bold;
`
const Icone = styled.li`
      margin-right: 50px;
      width: 40px;
      list-style: none;
`

const icones= [perfil,sacola];

function IconesHeader (){
return (
    <Icones>
    { icones.map( (icone) => (
     <Icone><img src={icone}alt="imagens de icones"></img></Icone>
    )) }
</Icones>
)
}
export default IconesHeader
//import './estilo.css'
import logo from '../../imagens/icons8-livros-100.png';
import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`
const LogoImage = styled.img`
  margin-right: 5px;
`

function Logo(){
    return(
        <LogoContainer>
            <LogoImage 
                src={logo} 
                alt = 'logo' 
            />
                <p><strong>Bella Books</strong></p>
        </LogoContainer>
    )
}


export default Logo


import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../iconesHeader'
import styled from 'styled-components'


const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
    return(
        <HeaderContainer >
            <OpcoesHeader/>
            <IconesHeader/>
      </HeaderContainer>
    )
}

export default Header
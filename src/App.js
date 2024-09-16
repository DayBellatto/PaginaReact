
import Logo from './componentes/logo'
import Header from './componentes/Header'
import styled from 'styled-components'
import Pesquisa from './componentes/Pesquisa'
//import Input from './componentes/Input'
//import UltimosLancamentos from './componentes/UltimosLancamentos'

const Appcontainer = styled.div `

          background-color: #F8F8FF	;
          display: flex;
          justify-content: center;
          color:#808080;

        li{
          list-style: none;
        }
`

function App() {
  return (
    <div className='App' >
  <Logo/>
  <Header></Header>
  <Pesquisa></Pesquisa>
  <Appcontainer></Appcontainer>
    </div>
  );
}

export default App

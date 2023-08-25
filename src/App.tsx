import { Flex } from "@chakra-ui/react";
import { Global, css } from '@emotion/react'
import Title from "./Title";
import Game from "./Game";

const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    background-color: #430E0E;
  }

  @media (max-width: 600px) {
    p {
      font-size:12px;
    }
  }
`

function App() {

  return (
    <Flex flexDirection="column">
      <Global styles={globalStyles} />

      <Flex height="10%" flexDirection="column" justifyContent="center">
          <Title />
      </Flex>

      <Flex height="90%" flexDirection="column" justifyContent="center">
        <Game />
      </Flex>
      
    </Flex>
  )
}

export default App;

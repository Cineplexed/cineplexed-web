import { Flex } from "@chakra-ui/react";
import Title from "./Title";
import Game from "./Game";

function App() {

  return (
    <Flex flexDirection="column" height="100vh" bg="darkRed">
      <Flex display={{ xl: 'flex'}} width="100vw" alignItems="center" justifyContent="center">
        <Flex flex="1" height="7rem" alignItems="center">
          <Title />
        </Flex>
      </Flex>

      <Game />
      
    </Flex>
  )
}

export default App;

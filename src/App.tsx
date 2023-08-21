import { Flex } from "@chakra-ui/react";
import Title from "./Title";
import Game from "./Game";

function App() {

  return (
    <Flex flexDirection="column" height="100vh" bg="darkRed">

      <Flex width="100%" height="10%" marginY="1rem" alignItems="center" justifyContent="center">
          <Title />
      </Flex>

      <Flex width="100%" height="90%" alignItems="baseline" justifyContent="center">
        <Game />
      </Flex>
      
    </Flex>
  )
}

export default App;

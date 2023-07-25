import { Flex } from "@chakra-ui/react";
import Title from "./Title";
import SearchBar from "./SearchBar";
import GuessHistory from "./GuessHistory";
import GuessedMovie from "./GuessedMovie";

function App() {

  return (
    <Flex flexDirection="column" height="100vh" bg="darkRed">
      <Flex display={{ xl: 'flex'}} width="100vw" alignItems="center" justifyContent="center">
        <Flex flex="1" height="7rem" alignItems="center">
          <Title />
        </Flex>
        <Flex flex="1" alignItems="center">
          <SearchBar />
        </Flex>
      </Flex>

      <Flex overflowX="auto" borderY="0.5rem solid black" bg="darkGrey" height="15rem">
        <GuessHistory />
      </Flex>

      <Flex display={{ xl: 'flex'}} flex="1" alignItems="stretch" justifyContent="center" maxHeight="50rem">
        <GuessedMovie />
        {/* Second GuessedMovie is a PLACEHOLDER for MysteryMovie card */}
        <GuessedMovie />
      </Flex>
    </Flex>
  )
}

export default App;

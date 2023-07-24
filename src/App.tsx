import { Box, Flex } from "@chakra-ui/react";
import Title from "./Title";
import SearchBar from "./SearchBar";
import GuessHistory from "./GuessHistory";
import GuessedMovie from "./GuessedMovie";

function App() {
  return (
    <Flex flexDirection="column" height="100vh" width="100vw" bg="darkRed">
      <Flex height="7rem" width="100vw" alignItems="center" justifyContent="center">
        <Box width="40rem">
          <Title />
        </Box>
        <Box flex="1">
          <SearchBar />
        </Box>
      </Flex>
      <Flex borderY="0.5rem solid black" bg="darkGrey" height="15rem" width="100vw" alignItems="center" justifyContent="center">
        <GuessHistory />
      </Flex>
      <Flex flex="1" alignItems="stretch" justifyContent="center">
        <GuessedMovie />
        {/* Second GuessedMovie is a PLACEHOLDER for MysteryMovie card */}
        <GuessedMovie />
      </Flex>
    </Flex>
  )
}

export default App;

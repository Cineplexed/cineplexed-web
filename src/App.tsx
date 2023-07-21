import { Box, Flex } from "@chakra-ui/react";
import Title from "./Title";
import SearchBar from "./SearchBar";

function App() {
  return (
    <Flex height="100vh" width="100vw" bg="darkRed">
      <Flex height="7rem" width="100vw" alignItems="center">
        <Box width="40rem">
          <Title />
        </Box>
        <Box flex="1">
          <SearchBar />
        </Box>
      </Flex>
    </Flex>
  )
}

export default App;

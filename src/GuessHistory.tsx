import { Button, Flex, Text } from "@chakra-ui/react";

export default function GuessHistory() {
    return (
        <Flex flex="1" overflowX="auto" justifyContent="space-between">
            <Button bg="lightGrey" border="3px solid black" width="8rem" height="12rem" margin="1rem" justifyContent="center" alignItems="center"><Text fontFamily="Epilouge" fontSize="3rem">1</Text></Button>
            <Button bg="lightGrey" border="3px solid black" width="8rem" height="12rem" margin="1rem" justifyContent="center" alignItems="center"><Text fontFamily="Epilouge" fontSize="3rem">2</Text></Button>
            <Button bg="lightGrey" border="3px solid black" width="8rem" height="12rem" margin="1rem" justifyContent="center" alignItems="center"><Text fontFamily="Epilouge" fontSize="3rem">3</Text></Button>
            <Button bg="lightGrey" border="3px solid black" width="8rem" height="12rem" margin="1rem" justifyContent="center" alignItems="center"><Text fontFamily="Epilouge" fontSize="3rem">4</Text></Button>
            <Button bg="lightGrey" border="3px solid black" width="8rem" height="12rem" margin="1rem" justifyContent="center" alignItems="center"><Text fontFamily="Epilouge" fontSize="3rem">5</Text></Button>
            <Button bg="lightGrey" border="3px solid black" width="8rem" height="12rem" margin="1rem" justifyContent="center" alignItems="center"><Text fontFamily="Epilouge" fontSize="3rem">6</Text></Button>
            <Button bg="lightGrey" border="3px solid black" width="8rem" height="12rem" margin="1rem" justifyContent="center" alignItems="center"><Text fontFamily="Epilouge" fontSize="3rem">7</Text></Button>
            <Button bg="lightGrey" border="3px solid black" width="8rem" height="12rem" margin="1rem" justifyContent="center" alignItems="center"><Text fontFamily="Epilouge" fontSize="3rem">8</Text></Button>
            <Button bg="lightGrey" border="3px solid black" width="8rem" height="12rem" margin="1rem" justifyContent="center" alignItems="center"><Text fontFamily="Epilouge" fontSize="3rem">9</Text></Button>
            <Button bg="lightGrey" border="3px solid black" width="8rem" height="12rem" margin="1rem" justifyContent="center" alignItems="center"><Text fontFamily="Epilouge" fontSize="3rem">10</Text></Button>
        </Flex>
    )
}
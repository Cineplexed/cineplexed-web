import { Button, Flex, Input, Spacer } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

export default function SearchBar() {
    const [searchInput, setSearchInput] = useState<String>("")
    
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value)
    }

    function searchByInput() {
        alert(searchInput)
    }
    
    return (
        <Flex margin="1rem">
            <Spacer flex="0.2"></Spacer>
            <Input 
                flex="5"
                bg="white"
                border="3px solid"
                borderColor="lightRed"
                _hover={{borderColor:"white"}}
                focusBorderColor="white"
                onChange={handleInputChange}
                placeholder="Search for a movie..."
                ></Input>
            <Spacer flex="0.2"></Spacer>
            <Button
            flex="1"
            bg="lightYellow"
            border="3px solid"
            borderColor="lightRed"
            _hover={{borderColor:"white"}}
            _active={{bg:"yellow.500"}}
            onClick={() => searchByInput()}
            >
                Guess
            </Button>
            <Spacer flex="0.2"></Spacer>            
        </Flex>
    )
}
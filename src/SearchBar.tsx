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
            <Input 
                flex="5"
                bg="white"
                border="3px solid"
                borderColor="#9A5757"
                _hover={{borderColor:"#FFBEBE"}}
                focusBorderColor="#FFBEBE"
                onChange={handleInputChange}
                placeholder="Search for a movie..."
                ></Input>
            <Spacer flex="0.2"></Spacer>
            <Button
            flex="1"
            bg="#FFE2E2"
            border="2px"
            borderColor="#9A5757"
            _hover={{bg:"#FFBEBE"}}
            onClick={() => searchByInput()}
            >Guess</Button>
        </Flex>
    )
}
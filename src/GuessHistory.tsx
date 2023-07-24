import { Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function GuessHistory() {
    const [guessHistory, setGuessHistory] = useState<string[]>([])

    useEffect(() => {
        getPosterButtons()
    }, [])

    function getPosterButtons() {
        let blankPosterList: JSX.Element[] = [];

        for (let i = guessHistory.length + 1; i < 11; i++) {
            let blankPoster: JSX.Element = 
            <Button
            flexBasis="100%"
            bg="lightGrey"
            border="3px solid black"
            width="8rem"
            height="12rem"
            margin="1rem"
            justifyContent="center"
            alignItems="center">
            <Text fontFamily="Epilouge" fontSize="3rem">{i}</Text>
            </Button>
            
            blankPosterList.push(blankPoster)
        }

        return blankPosterList
    }
    
    return (
        <Flex marginLeft="auto" marginRight="auto">
            {getPosterButtons()}
        </Flex>
    )
}
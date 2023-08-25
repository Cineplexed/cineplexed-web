import { Card, CardHeader, Divider, Flex, Text } from "@chakra-ui/react";
import { ListItem, Movie } from "./Movie-Interface";

interface CurrentGuessCardProps {
    currentGuess: Movie
}

export default function CurrentGuessCard({ currentGuess }: CurrentGuessCardProps) {
    function formatGross() {
        if (currentGuess.gross === "") {
            return ""
        }
        return (Math.round(Number(currentGuess.gross) / 1000000) * 1000000).toLocaleString("en-US", {style:"currency", currency:"USD", maximumFractionDigits:0})
    }
    
    function formatList(list: ListItem[]) {
        let tempList: string = ""
        for (let i = 0; i < 3; i++) {
            if (list[i] !== undefined) {
                tempList = tempList.concat(list[i].name)
            }
            if (list[i+1] !== undefined && i + 1 < 3) {
                tempList = tempList.concat(" • ")
            }
        }
        return tempList
    }

    return (
        <Card flex="1" margin="2rem" paddingX="1rem" bg="darkGrey" border="5px solid" borderColor="black">
            <CardHeader margin="-1rem" textAlign="center" fontSize="2rem" fontWeight="bold" color="white"><Text>{currentGuess.title}</Text></CardHeader>
            <Divider />
            <Flex flex="1" marginY="1rem" direction="column" justifyContent="space-between" fontSize="1rem" color="white">
                <Flex flexWrap="wrap">
                    <Flex padding="0.2rem" flex="1">
                        <Text paddingRight="1rem" fontWeight="bold">Year:</Text>
                        <Text>{currentGuess.year}</Text>
                    </Flex>
                    <Flex padding="0.2rem" flex="1">
                        <Text paddingRight="1rem" fontWeight="bold">Gross:</Text>
                        <Text>{formatGross()}</Text>
                    </Flex>
                </Flex>
                <Flex flexWrap="wrap">
                    <Flex padding="0.2rem" flex="1">
                        <Text paddingRight="1rem" fontWeight="bold">Director:</Text>
                        <Text flexWrap="wrap">{currentGuess.director}</Text>
                    </Flex>
                    <Flex padding="0.2rem" flex="1">
                        <Text paddingRight="1rem" fontWeight="bold">Distributor:</Text>
                        <Text flexWrap="wrap">{currentGuess.distributor}</Text>
                    </Flex>
                </Flex>
                <Flex padding="0.2rem">
                    <Text paddingRight="1rem" fontWeight="bold">Genres:</Text>
                    <Text flexWrap="wrap">{formatList(currentGuess.genres)}</Text>
                </Flex>
                <Flex padding="0.2rem">
                    <Text paddingRight="1rem" fontWeight="bold">Starring:</Text>
                    <Text flexWrap="wrap">{formatList(currentGuess.actors)}</Text>
                </Flex>
            </Flex>
        </Card>
    )
}
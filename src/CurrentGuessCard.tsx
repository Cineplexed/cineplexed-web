import { Card, CardHeader, Divider, Flex, Text } from "@chakra-ui/react";
import { Movie } from "./Movie-Interface";

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
    
    function formatGenres() {
        let tempGenres: string = ""
        for (let i = 0; i < 3; i++) {
            if (currentGuess.genres[i] !== undefined) {
                tempGenres = tempGenres.concat(currentGuess.genres[i].name)
            }
            if (currentGuess.genres[i+1] !== undefined && i + 1 < 3) {
                tempGenres = tempGenres.concat(" • ")
            }
        }
        return tempGenres
    }

    function formatActors() {
        let tempActors: string = ""
        for (let i = 0; i < 3; i++) {
            if (currentGuess.actors[i] !== undefined) {
                tempActors = tempActors.concat(currentGuess.actors[i].name)
            }
            if (currentGuess.actors[i+1] !== undefined && i + 1 < 3) {
                tempActors = tempActors.concat(" • ")
            }
        }
        return tempActors
    }

    return (
        <Card flex="1" margin="2rem" paddingX="1rem" bg="darkGrey" border="5px solid" borderColor="lightRed">
            <CardHeader margin="-1rem" textAlign="center" fontSize="2rem" fontWeight="bold" color="white">{currentGuess.title}</CardHeader>
            <Divider />
            <Flex flex="1" marginY="1rem" direction="column" justifyContent="space-between" fontSize="2rem" color="white">
                <Flex>
                    <Flex flex="1">
                        <Text paddingRight="1rem" fontWeight="bold">Year:</Text><Text>{currentGuess.year}</Text>
                        <Text flex="1"></Text>
                    </Flex>
                    <Flex flex="1">
                        <Text paddingRight="1rem" fontWeight="bold">Gross:</Text><Text>{formatGross()}</Text>
                        <Text flex="1"></Text>
                    </Flex>
                </Flex>
                <Flex>
                    <Flex flex="1">
                        <Text paddingRight="1rem" fontWeight="bold">Director:</Text><Text>{currentGuess.director}</Text>
                        <Text flex="1"></Text>
                    </Flex>
                    <Flex flex="1">
                        <Text paddingRight="1rem" fontWeight="bold">Distributor:</Text><Text>{currentGuess.distributor}</Text>
                        <Text flex="1"></Text>
                    </Flex>
                </Flex>
                <Flex>
                    <Text paddingRight="1rem" fontWeight="bold">Genres:</Text><Text>{formatGenres()}</Text>
                    <Text flex="1"></Text>
                </Flex>
                <Flex>
                    <Text paddingRight="1rem" fontWeight="bold">Starring:</Text><Text>{formatActors()}</Text>
                    <Text flex="1"></Text>
                </Flex>
            </Flex>
        </Card>
    )
}
import { Card, CardHeader, Divider, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function GuessedMovie() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [guessedMovie, setGuessedMovie] = useState<string[]>(["Barbie", "2023", "$100,000,000", "Greta Gerwig", "Mattel", "Comedy", "Adventure", "Margot Robbie", "Ryan Gosling", "Will Ferrell"])

    return (
        <Card flex="1" margin="2rem" paddingX="1rem" bg="darkGrey" border="5px solid" borderColor="lightRed">
            <CardHeader margin="-1rem" textAlign="center" fontSize="2rem" font-fontFamily="Epilouge" fontWeight="bold" color="white">{guessedMovie[0]}</CardHeader>
            <Divider />
            <Flex flex="1" marginY="1rem" direction="column" justifyContent="space-between" fontSize="2rem" font-fontFamily="Epilouge" color="white">
                <Flex>
                    <Flex flex="1">
                        <Text paddingRight="1rem" fontWeight="bold">Year:</Text><Text>{guessedMovie[1]}</Text>
                        <Text flex="1"></Text>
                    </Flex>
                    <Flex flex="1">
                        <Text paddingRight="1rem" fontWeight="bold">Gross:</Text><Text>{guessedMovie[2]}</Text>
                        <Text flex="1"></Text>
                    </Flex>
                </Flex>
                <Flex>
                    <Flex flex="1">
                        <Text paddingRight="1rem" fontWeight="bold">Director:</Text><Text>{guessedMovie[3]}</Text>
                        <Text flex="1"></Text>
                    </Flex>
                    <Flex flex="1">
                        <Text paddingRight="1rem" fontWeight="bold">Distributor:</Text><Text>{guessedMovie[4]}</Text>
                        <Text flex="1"></Text>
                    </Flex>
                </Flex>
                <Flex>
                    <Text paddingRight="1rem" fontWeight="bold">Genres:</Text><Text>{guessedMovie[5]}</Text><Text paddingX="1rem">•</Text><Text>{guessedMovie[6]}</Text>
                    <Text flex="1"></Text>
                </Flex>
                <Flex>
                    <Text paddingRight="1rem" fontWeight="bold">Starring:</Text><Text>{guessedMovie[7]}</Text><Text paddingX="1rem">•</Text><Text>{guessedMovie[8]}</Text><Text paddingX="1rem">•</Text><Text>{guessedMovie[9]}</Text>
                    <Text flex="1"></Text>
                </Flex>
            </Flex>
        </Card>
    )
}
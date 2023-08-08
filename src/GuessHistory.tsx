import { Button, Flex, Text } from "@chakra-ui/react";
import { Movie } from "./Movie-Interface";

interface GuessHistoryProps {
    currentGuess: Movie
    setCurrentGuess: React.Dispatch<React.SetStateAction<Movie>>
    guessList: Movie[] 
}

export default function GuessHistory({ currentGuess, setCurrentGuess, guessList }: GuessHistoryProps) {
    function getBorder(movie: Movie) {
        if (movie === currentGuess) {
            return "lightYellow"
        }
        return "black"
    }

    function getBlankPosters() {
        let blankPosterList: JSX.Element[] = [];

        for (let i = guessList.length + 1; i < 11; i++) {
            let blankPoster: JSX.Element = 
            <Button
            key={i}
            flexBasis="100%"
            bg="lightGrey"
            border="3px solid black"
            width="8rem"
            height="12rem"
            margin="1rem"
            padding="0rem"
            justifyContent="center"
            alignItems="center">
            <Text fontSize="3rem">{i}</Text>
            </Button>

            blankPosterList.push(blankPoster)
        }

        return blankPosterList
    }
    
    return (
        <Flex marginLeft="auto" marginRight="auto">
            {guessList.map(guess => (
                <Button
                key={guess.id}
                backgroundImage={`url(${guess.poster})`}
                backgroundPosition="center"
                backgroundSize="cover"
                _hover={{}}
                _active={{}}
                flexBasis="100%"
                border= "3px solid"
                borderColor={getBorder(guess)}
                width="8rem"
                height="12rem"
                margin="1rem"
                padding="0rem"
                justifyContent="center"
                alignItems="center"
                onClick={() => setCurrentGuess(guess)}>
                </Button>
            ))}
            {getBlankPosters()}
        </Flex>
    )
}
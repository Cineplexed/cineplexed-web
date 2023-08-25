import { useEffect, useState } from "react";
import { Button, Card, Flex, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { Comparison, Movie, finishedGame } from "./Movie-Interface";

interface WinOverlayProps {
    finishedGame: finishedGame,
    setFinishedGame: React.Dispatch<React.SetStateAction<finishedGame>>,
    comparison: Comparison,
    guessList: Movie[]
}

export default function WinOverlay({ finishedGame, setFinishedGame, comparison, guessList }: WinOverlayProps) {
    const finishGameURL: string = process.env.REACT_APP_APIURL + "/finishGame?key=" + process.env.REACT_APP_APIKEY + "&won="
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        getFinishedGame()
    }, [comparison])

    function getFinishedGame() {
        if (!comparison.correct && guessList.length != 10) {
            return
        }

        const requestData = {won: comparison.correct}

        fetch(finishGameURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        })
        .then(response => response.json())
        .then(data => {
            let formattedFinishedGame: finishedGame = {
                date: data.Date,
                movie: data.Movie,
                numCorrect: data.NumCorrect,
                numIncorrect: data.NumIncorrect,
                tagline: data.Tagline,
                overview: data.Overview,
                genres: data.Genres,
                actors: data.Actors,
                revenue: data.Revenue,
                poster: data.Poster,
                releaseYear: data.ReleaseYear,
                director: data.Director,
                producer: data.Producer,
                imdb: data.IMDB,
                collection: data.Collection
            }
            setFinishedGame(formattedFinishedGame)
        })
        onOpen()
    }
    
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size="6xl">
            <ModalOverlay>
            <ModalContent bg="darkGrey" border="2px solid" marginX="1rem" borderColor="lightYellow">
                <ModalBody>
                    <Flex alignItems="center" justifyContent="center">
                        <Link
                        backgroundImage={`url(${"https://image.tmdb.org/t/p/w185" + finishedGame.poster})`}
                        backgroundPosition="center"
                        backgroundSize="cover"
                        _hover={{}}
                        _active={{}}
                        border= "3px solid"
                        borderColor="blue.500"
                        width="10rem"
                        height="15rem"
                        margin="0.5rem"
                        padding="0rem"
                        justifyContent="center"
                        alignItems="center"
                        href={"https://www.imdb.com/title/" + finishedGame.imdb}
                        target="_blank">
                        </Link>
                        <Flex flex="1" flexDirection="column" alignItems="center" justifyContent="space-between">
                            <Text color="white" fontSize="3rem" fontWeight="bold" textAlign="center">{finishedGame.movie}</Text>
                            <Text color="white" fontSize="2.5rem" textAlign="center">{finishedGame.releaseYear} • {finishedGame.revenue.toLocaleString("en-US", {style:"currency", currency:"USD", maximumFractionDigits:0})}</Text>
                            <Text color="white" fontSize="2rem" textAlign="center">Dir. {finishedGame.director} • {finishedGame.producer}</Text>
                            <Text color="white" fontSize="1.5rem" textAlign="center">{finishedGame.genres[0]} • {finishedGame.genres[1]} • {finishedGame.genres[2]} • {finishedGame.genres[3]} • {finishedGame.genres[4]}</Text>
                            <Text color="white" fontSize="1rem" textAlign="center">{finishedGame.actors[0]} • {finishedGame.actors[1]} • {finishedGame.actors[2]} • {finishedGame.actors[3]} • {finishedGame.actors[4]} • {finishedGame.actors[5]} • {finishedGame.actors[6]}</Text>
                        </Flex>
                    </Flex>
                </ModalBody>
            </ModalContent>
            </ModalOverlay>
            </Modal>
        </>
    )
}
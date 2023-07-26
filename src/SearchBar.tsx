import { Button, Flex, Input, Spacer, useToast } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { Movie } from "./Movie-Interface";

interface SearchBarProps {
    currentGuess: Movie
    setCurrentGuess: React.Dispatch<React.SetStateAction<Movie>>
    guessList: Movie[]
    setGuessList: React.Dispatch<React.SetStateAction<Movie[]>>
}

export default function SearchBar({ currentGuess, setCurrentGuess, guessList, setGuessList }: SearchBarProps) {
    const [searchInput, setSearchInput] = useState<String>("")
    const toast = useToast()
    
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value)
    }

    function searchByInput() {
        let optionsURL: string = "http://localhost:5050/getMovieOptions?title=" + searchInput
        fetch(optionsURL)
        .then(response => response.json())
        .then(data => {
            if (data.results.length === 0) {
                toast({
                    title: "Movie not found",
                    status: "error",
                    position: "top-right"
                })
                return
            }
            let detailsURL: string = "http://localhost:5050/getMovieDetails?id=" + data.results[0].id
            fetch(detailsURL)
            .then(response => response.json())
            .then(data => {
                let formattedData: Movie = {
                    title: data.title,
                    year: data.release_date,
                    gross: data.revenue,
                    director: data.director,
                    distributor: data.producer,
                    genres: data.genres,
                    actors: data.actors,
                    tagline: data.tagline,
                    plot: data.overview,
                    poster: "https://image.tmdb.org/t/p/w185" + data.poster_path
                }
                setCurrentGuess(formattedData)
    
                let tempGuessList: Movie[] = [...guessList]
                tempGuessList.push(formattedData)
                setGuessList(tempGuessList)
            })
        })
    }
    
    return (
        <Flex flex="1" margin="2rem">
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
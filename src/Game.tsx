import SearchBar from "./SearchBar";
import GuessHistory from "./GuessHistory";
import CurrentGuessCard from "./CurrentGuessCard";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Movie } from "./Movie-Interface";
import MysteryMovie from "./MysteryMovie";

export default function Game() {
    const initialGuess: Movie = {id: NaN, title: "Guessed Movie", year: "", gross: "", director: "", distributor: "", genres: [], actors: [], tagline: "", plot: "", poster: "",}
    const [currentGuess, setCurrentGuess] = useState<Movie>(initialGuess)
    const [guessList, setGuessList] = useState<Movie[]>([])

    return (
      <div>
        <Flex width="100vw" flex="1" alignItems="center">
          <SearchBar currentGuess={currentGuess} setCurrentGuess={setCurrentGuess} guessList={guessList} setGuessList={setGuessList}/>
        </Flex>

        <Flex overflowX="auto" borderY="0.5rem solid black" bg="darkGrey" height="11rem">
          <GuessHistory currentGuess={currentGuess} setCurrentGuess={setCurrentGuess} guessList={guessList} />
        </Flex>

        <Flex display={{ xl: 'flex'}} flex="1" alignItems="stretch" justifyContent="center" height="60%">
          <CurrentGuessCard currentGuess={currentGuess}/>
          <MysteryMovie/>
        </Flex>
      </div>
    )
}
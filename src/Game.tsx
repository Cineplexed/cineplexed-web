import SearchBar from "./SearchBar";
import GuessHistory from "./GuessHistory";
import CurrentGuessCard from "./CurrentGuessCard";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Movie, Comparison, finishedGame } from "./Movie-Interface";
import MysteryMovieCard from "./MysteryMovieCard";
import HintButtons from "./HintButtons";
import WinOverlay from "./WinOverlay";

export default function Game() {
    const initialGuess: Movie = {id: NaN, title: "Guessed Movie", year: "", gross: "", director: "", distributor: "", genres: [], actors: [], tagline: "", plot: "", poster: "",}
    const initialComparison: Comparison = {correct: false, yearLessThan: NaN, yearGreaterThan: NaN, revenueLessThan: NaN, revenueGreaterThan: NaN, directorComparison: "", distributorComparison: "", genres: [], actors: []}
    const initialFinishedGame: finishedGame = {date: "", movie: "", numCorrect: NaN, numIncorrect: NaN, tagline: "", overview: "", genres: [], actors: [], revenue: NaN, poster: "", releaseYear: "", director: "", producer: "", imdb: "", collection: ""}
    const [currentGuess, setCurrentGuess] = useState<Movie>(initialGuess)
    const [guessList, setGuessList] = useState<Movie[]>([])
    const [comparison, setComparison] = useState<Comparison>(initialComparison)
    const [finishedGame, setFinishedGame] = useState<finishedGame>(initialFinishedGame)

    return (
      <div>
        <Flex width="100vw" flex="1" alignItems="center">
          <SearchBar currentGuess={currentGuess} setCurrentGuess={setCurrentGuess} guessList={guessList} setGuessList={setGuessList} comparison={comparison} setComparison={setComparison}/>
        </Flex>

        <Flex overflowX="auto" borderY="0.5rem solid black" bg="darkGrey" height="11rem">
          <GuessHistory currentGuess={currentGuess} setCurrentGuess={setCurrentGuess} guessList={guessList}/>
        </Flex>

        <Flex display={{ xl: 'flex'}} flex="1" alignItems="stretch" justifyContent="center" height="60%">
          <CurrentGuessCard currentGuess={currentGuess}/>
          <HintButtons />
          <MysteryMovieCard comparison={comparison} finishedGame={finishedGame}/>
        </Flex>
        <WinOverlay finishedGame={finishedGame} setFinishedGame={setFinishedGame} comparison={comparison} guessList={guessList}/>
      </div>
    )
}
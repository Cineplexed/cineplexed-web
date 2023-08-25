import { useState, useEffect } from "react"
import { Button, Flex, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from "@chakra-ui/react";
import { Movie } from "./Movie-Interface";

interface HintButtonsProps {
    guessList: Movie[],
}

export default function HintButtons({ guessList }: HintButtonsProps) {    
    const hintURL: string = process.env.REACT_APP_APIURL + "/getHint?key=" + process.env.REACT_APP_APIKEY
    const [tagline, setTagline] = useState<string>("")
    const [overview, setOverview] = useState<string>("")


    useEffect(() => {
        getHints()
    })


    function getHints() {
        fetch(hintURL)
        .then(response => response.json())
        .then(data => {
            if (data.tagline === "") {
                setTagline("No Tagline Found.")
            } else {
                setTagline(data.tagline)
            }
            if (data.Overview === "") {
                setTagline("No Plot Found.")
            } else {
                setOverview(data.overview)
            }
        })
        return
    }

    function showTagline() {
        if (guessList.length >= 6) {
            return (
                <Popover placement="top">
                    <PopoverTrigger>
                        <Button height="25%" width="90%" padding="1rem" marginY="1rem" marginX="0rem" bg="lightYellow" border="3px solid" borderColor="black" borderRadius="7px" _hover={{borderColor:"white"}} _active={{bg:"yellow.500"}}>Hint: Tagline</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverBody>{tagline}</PopoverBody>
                    </PopoverContent>
                </Popover>
            )
        } else {
            return
        }
    }

    function showOverview() {
        if (guessList.length >= 8) {
            return (
                <Popover placement="top">
                    <PopoverTrigger>
                        <Button height="25%" width="90%" padding="1rem" marginY="1rem" marginX="0rem" bg="lightYellow" border="3px solid" borderColor="black" borderRadius="7px" _hover={{borderColor:"white"}} _active={{bg:"yellow.500"}}>Hint: Plot</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverBody>{overview}</PopoverBody>
                    </PopoverContent>
                </Popover>
            )
        } else {
            return
        }
    }
    
    return (
        <Flex flexDirection="column" marginY="2rem" justifyContent="space-around" alignItems="center">
            {showTagline()}
            {showOverview()}
        </Flex>
    )
}
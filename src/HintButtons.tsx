import { useState, useEffect } from "react"
import { Button, Flex, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from "@chakra-ui/react";

export default function HintButtons() {    
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
            setTagline(data.tagline)
            setOverview(data.overview)
        })
        return
    }
    
    return (
        <Flex flexDirection="column" marginY="2rem" justifyContent="space-evenly" alignItems="center">
            <Popover>
                <PopoverTrigger>
                    <Button height="25%" width="100%" marginY="1rem" bg="lightYellow" border="3px solid" borderColor="lightRed" borderRadius="7px" _hover={{borderColor:"white"}} _active={{bg:"yellow.500"}}>Tagline</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverBody>{tagline}</PopoverBody>
                </PopoverContent>
            </Popover>
            <Popover>
                <PopoverTrigger>
                    <Button height="25%" width="100%" marginY="1rem" bg="lightYellow" border="3px solid" borderColor="lightRed" borderRadius="7px" _hover={{borderColor:"white"}} _active={{bg:"yellow.500"}}>Plot</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverBody>{overview}</PopoverBody>
                </PopoverContent>
            </Popover>
        </Flex>
    )
}
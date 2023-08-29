import { Card, CardHeader, Divider, Flex, Skeleton, Text, UnorderedList } from "@chakra-ui/react";
import { ListItem, Comparison, finishedGame } from "./Movie-Interface";

interface MysteryMovieCardProps {
    comparison: Comparison,
    finishedGame: finishedGame,
}

export default function MysteryMovie({ comparison, finishedGame }: MysteryMovieCardProps) {
    function formatTitle() {
        if (comparison.correct) {
            return <Text color="green.400">{finishedGame.movie}</Text>
        } else {
            return <Text color="white">Mystery Movie</Text>
        }
    }
    
    function formatRelativeYear(lessThan: number, greaterThan: number) {
        if (lessThan === greaterThan) {
            return <Text color="green.400">{lessThan}</Text>
        }

        let leftSide
        let rightSide

        if (Number.isNaN(lessThan)) {
            leftSide = <Skeleton height="1rem" width="4rem"/>
        } else {
            leftSide = <Text>{lessThan}</Text>
        }

        if (Number.isNaN(greaterThan)) {
            rightSide = <Skeleton height="1rem" width="4rem"/>
        } else {
            rightSide = <Text>{greaterThan}</Text>
        }

        return (
            <>
                {leftSide}
                <Text marginX="1rem">{" ↔ "}</Text>
                {rightSide}
            </>
        )
    }

    function formatRelativeGross(lessThan: number, greaterThan: number) {
        lessThan = (Math.round(lessThan / 1000000) * 1000000)
        greaterThan = (Math.round(greaterThan / 1000000) * 1000000)

        if (lessThan === greaterThan) {
            return <Text color="green.400">{lessThan.toLocaleString("en-US", {style:"currency", currency:"USD", maximumFractionDigits:0})}</Text>
        }

        let leftSide
        let rightSide

        if (Number.isNaN(lessThan)) {
            leftSide = <Skeleton height="1rem" width="6rem"/>
        } else {
            leftSide = <Text>{lessThan.toLocaleString("en-US", {style:"currency", currency:"USD", maximumFractionDigits:0})}</Text>
        }

        if (Number.isNaN(greaterThan)) {
            rightSide = <Skeleton height="1rem" width="6rem"/>
        } else {
            rightSide = <Text>{greaterThan.toLocaleString("en-US", {style:"currency", currency:"USD", maximumFractionDigits:0})}</Text>
        }

        return (
            <>
                {leftSide}
                <Text marginX="1rem">{" ↔ "}</Text>
                {rightSide}
            </>
        )
    }

    function formatMysteryString(text: string) {
        if (text === "") {
            return <Skeleton height="1rem" width="60%"/>
        } else {
            return <Text color="green.400">{text}</Text>
        }
    }
    
    function formatList(list: ListItem[]) {
        let toReturn: JSX.Element[] = []

        if (list.some(item => {return item.name != ""})) {
            list.forEach(item => {
                toReturn.push(<Text color="green.400">{item.name}</Text>)
                toReturn.push(<Text marginX="0.5rem">{"•"}</Text>)
            })
            toReturn.pop()
    
            return (
                <Flex flexWrap="wrap" alignItems="center">
                    {toReturn}
                </Flex>
            )
        } else {
            return (
                <Flex flexWrap="wrap" alignItems="center">
                    <Skeleton height="1rem" width="6rem"/><Text marginX="0.5rem">{"•"}</Text><Skeleton height="1rem" width="6rem"/><Text marginX="0.5rem">{"•"}</Text><Skeleton height="1rem" width="6rem"/>
                </Flex>
            )
        }
    }
    
    return (
        <Card flex="1" margin="2rem" paddingX="1rem" bg="darkGrey" border="5px solid" borderColor="black">
            <CardHeader margin="-1rem" textAlign="center" fontSize="2rem" fontWeight="bold">
                {formatTitle()}
            </CardHeader>
            <Divider />
            <Flex flex="1" marginY="1rem" direction="column" justifyContent="space-between" fontSize="1rem" fontWeight="normal" color="white">
                <Flex flexWrap="wrap">
                    <Flex padding="0.2rem" flex="1" alignItems="center">
                        <Text paddingRight="1rem" fontWeight="bold">Year:</Text>
                        {formatRelativeYear(comparison.yearLessThan, comparison.yearGreaterThan)}
                    </Flex>
                    <Flex padding="0.2rem" flex="1" alignItems="center">
                        <Text paddingRight="1rem" fontWeight="bold">Gross:</Text>
                        {formatRelativeGross(comparison.revenueLessThan, comparison.revenueGreaterThan)}
                    </Flex>
                </Flex>
                <Flex flexWrap="wrap">
                    <Flex padding="0.2rem" flex="1" alignItems="center">
                        <Text paddingRight="1rem" fontWeight="bold">Director:</Text>
                        {formatMysteryString(comparison.directorComparison)}
                    </Flex>
                    <Flex padding="0.2rem" flex="1" alignItems="center">
                        <Text paddingRight="1rem" fontWeight="bold">Distributor:</Text>
                        {formatMysteryString(comparison.distributorComparison)}
                    </Flex>
                </Flex>
                <Flex padding="0.2rem" alignItems="center">
                    <Text paddingRight="1rem" fontWeight="bold">Genres:</Text>
                    {formatList(comparison.genres)}
                </Flex>
                <Flex padding="0.2rem" alignItems="center">
                    <Text paddingRight="1rem" fontWeight="bold">Actors:</Text>
                    {formatList(comparison.actors)}
                </Flex>
            </Flex>
        </Card>
    )
}
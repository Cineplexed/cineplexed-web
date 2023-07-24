import { Flex, Text } from "@chakra-ui/react"

export default function Title() {
    return (
        <Flex flex="1"
            margin="1rem"
            bg="black"
            border="3px solid"
            borderColor="lightRed"
            borderRadius="0.5rem"
            justifyContent="center"
        >
            <Text
                alignSelf="center"
                color="lightYellow"
                font-fontFamily="Epilogue"
                fontSize="3rem"
                fontWeight="200"
                textTransform="uppercase"
                letterSpacing="1.5rem"
                marginRight="-1.5rem"
            >
            cineplexed
            </Text>
        </Flex>
    )
}
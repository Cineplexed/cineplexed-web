import { Flex, Text } from "@chakra-ui/react"

export default function Title() {
    return (
        <Flex 
            margin="1rem"
            bg="black"
            border="3px solid"
            borderColor="#9A5757"
            justifyContent="center"
        >
            <Text
                alignSelf="center"
                color="#FFC700"
                font-fontFamily="Epilogue"
                fontSize="3rem"
                fontWeight="200"
                letterSpacing="0.5rem"
                marginRight="-0.5rem"
                transformOrigin=""
            >
            C I N E P L E X E D
            </Text>
        </Flex>
    )
}
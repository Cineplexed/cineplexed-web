import { Button, Flex, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"

export default function Title() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Flex flex="1"
            margin="1rem"
            bg="black"
            border="3px solid"
            borderColor="red.800"
            borderRadius="0.5rem"
            justifyContent="stretch"
            alignItems="center"
        >   
            <Button flex="1" margin="1rem" bg="darkGrey" color="lightYellow" fontWeight="200" _hover={{background: "red.800"}} _active={{background: "red.800"}} onClick={onOpen}><Text>How to Play</Text></Button>
            <Modal isOpen={isOpen} onClose={onClose} size="md">
                <ModalOverlay>
                <ModalContent marginX="1rem">
                    <ModalHeader textAlign="center">Welcome to Cineplexed!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex flexDirection="column">
                            <Text marginY="0.5rem">Cineplexed is a movie guessing game - you have 10 attempts to guess the Mystery Movie.</Text>
                            <Text marginY="0.5rem">After you guess, all information about your Guessed Movie will appear on the left card, and any information that correlates between your Guessed Movie and the Mystery Movie will appear on the right card.</Text>
                            <Text marginY="0.5rem">The Daily Mystery Movie refreshes every 24 hours, and after the Daily has been played you can switch to Unlimited Mode with a user account.</Text>
                            <Text marginY="0.5rem">Thanks for playing!</Text>
                            <Flex fontSize="18px">
                                <Text fontSize="18px" marginX="1rem">-</Text><Link color="blue.500" href="https://www.linkedin.com/in/peyton-boggs/" target="_blank">Peyton Boggs</Link><Text fontSize="18px" marginX="0.3rem">and</Text><Link color="blue.500" href="https://www.linkedin.com/in/jackdevitt/" target="_blank">Jack Devitt</Link>
                            </Flex>
                            <Link textAlign="right" marginY="1rem" color="blue.500" href="https://github.com/Cineplexed" target="_blank">Cineplexed Docs</Link>
                        </Flex>
                    </ModalBody>
                </ModalContent>
                </ModalOverlay>
            </Modal>
            <Flex flex="10" color="lightYellow" fontSize="3rem" fontWeight="hairline" textTransform="uppercase" textAlign="center">  
                <Text flex="1">c</Text><Text flex="1">i</Text><Text flex="1">n</Text><Text flex="1">e</Text><Text flex="1">p</Text><Text flex="1">l</Text><Text flex="1">e</Text><Text flex="1">x</Text><Text flex="1">e</Text><Text flex="1">d</Text>
            </Flex>
            <Button flex="1" margin="1rem" bg="darkGrey" color="lightYellow" fontWeight="200" _hover={{background: "red.800"}} _active={{background: "red.800"}}><Text>Log In</Text></Button>
        </Flex>
    )
}
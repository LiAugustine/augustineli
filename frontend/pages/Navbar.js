import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import {
    Avatar, Wrap, WrapItem,
    Popover, PopoverTrigger, Portal, PopoverContent, PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody,
    Box, Heading, Flex, Button, ButtonGroup, Spacer,
    Center, Divider
} from '@chakra-ui/react'
import { FcGoogle } from "react-icons/fc";

const Navbar = () => {
    const router = useRouter()
    const [loggedIn, setLoggedIn] = useState(undefined)

    useEffect(() => {
        fetch('/get_user', {
            method: "GET",
            headers: {
                "content_type": "application/json",
            },
        }).then(response => response.json())
            .then(data => {
                setLoggedIn(data);
            });
    }, []);


    return (
        <div className="Navbar">
            <Center>
                <Flex minWidth='max-content' alignItems='center' gap='2'>
                    <Box>
                        <Heading size='md' as='span'>Augustine Li</Heading>
                    </Box>
                    <ButtonGroup>

                        <Button variant='ghost' onClick={() => router.push('/')}>Home</Button>
                        <Button variant='ghost' onClick={() => router.push('/Blog')}>Blog</Button>
                        <Button variant='ghost' onClick={() => router.push('/Projects')}>Projects</Button>
                    </ButtonGroup>
                    <Spacer />

                    {loggedIn ? (
                        <Popover>
                            <PopoverTrigger>
                                <Button>
                                    <Wrap>
                                        <WrapItem>
                                            <Avatar size='sm' src={loggedIn.picture} />
                                        </WrapItem>
                                    </Wrap>
                                    {loggedIn.name}
                                </Button>
                            </PopoverTrigger>
                            <Portal>
                                <PopoverContent>
                                    <PopoverArrow />
                                    <PopoverHeader>Account Options</PopoverHeader>
                                    <PopoverCloseButton />
                                    <PopoverBody>
                                        <a href='/logout'>
                                            <Button colorScheme='red' size='md'>
                                                Sign-out
                                            </Button>
                                        </a>
                                    </PopoverBody>

                                </PopoverContent>
                            </Portal>
                        </Popover>
                    ) : (
                        <Popover>
                            <PopoverTrigger>
                                <Button colorScheme='green' size='md'>Sign-in</Button>
                            </PopoverTrigger>
                            <Portal>
                                <PopoverContent>
                                    <PopoverArrow />
                                    <PopoverHeader>Sign-in Options</PopoverHeader>
                                    <PopoverCloseButton />
                                    <PopoverBody>
                                        <a href='/login'>
                                            <Button colorScheme='gray' color='black' size='md'>
                                                <FcGoogle /> Sign-in with Google
                                            </Button>
                                        </a>
                                    </PopoverBody>

                                </PopoverContent>
                            </Portal>
                        </Popover>
                    )}
                </Flex>
            </Center>
            <Divider />
            <br></br>
        </div>
    )
}

export default Navbar;
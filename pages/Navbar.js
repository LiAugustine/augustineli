import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import {
    Avatar, Wrap, WrapItem,
    Popover, PopoverTrigger, Portal, PopoverContent, PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody,
    Box, Heading, Flex, Button, ButtonGroup, Spacer,
} from '@chakra-ui/react'

const Navbar = () => {
    const router = useRouter()
    const [loggedIn, setLoggedIn] = useState(false)

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
            <Flex minWidth='max-content' alignItems='center' gap='2'>
                <Box p='3'>
                    <Heading size='md'>Augustine Li</Heading>
                </Box>
                <ButtonGroup>
                    <Button variant='ghost' onClick={() => router.push('/')}>Home</Button>
                    <Button variant='ghost' onClick={() => router.push('/Blog')}>Blog</Button>
                    <a href="https://docs.google.com/document/d/1WuDqJs1mmAWxWuJoka2puwaelpOe7kVK7aL1_5aM8Y8/edit?usp=sharing" target="_blank">
                        <Button variant='ghost'>
                            Resume
                        </Button>
                    </a>
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
                                        <Button colorScheme='green' size='md'>
                                            Sign-in with Google
                                        </Button>
                                    </a>
                                </PopoverBody>

                            </PopoverContent>
                        </Portal>
                    </Popover>
                )}

            </Flex>
        </div>
    )
}

export default Navbar;
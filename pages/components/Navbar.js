import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import {
    Avatar, Wrap, WrapItem,
    Popover, PopoverTrigger, Portal, PopoverContent, PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody,
    Button, Tab, Tabs, TabList, TabPanel, TabPanels, Spacer, Link
} from '@chakra-ui/react'
import Blog from "./Blog";

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
            <Tabs>
                <TabList>
                    <Button variant='ghost' size='md'>
                        Augustine Li
                    </Button>
                    <Tab>Home</Tab>
                    <Tab>Blog</Tab>
                    <Tab>Contact</Tab>
                    <Spacer />

                    <div>
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
                                            <Button colorScheme='red' size='md' onClick={() => router.push('/logout')}>
                                                Sign-out
                                            </Button>
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
                                            <Button colorScheme='green' size='md' onClick={() => router.push('/login')}>
                                                Sign-in with Google
                                            </Button>
                                        </PopoverBody>

                                    </PopoverContent>
                                </Portal>
                            </Popover>
                        )}
                    </div>
                </TabList>

                <TabPanels>
                    <TabPanel>

                    </TabPanel>

                    <TabPanel>
                        <Blog />
                    </TabPanel>

                    <TabPanel>

                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default Navbar;
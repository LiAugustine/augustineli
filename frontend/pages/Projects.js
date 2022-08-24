import Head from 'next/head'
import { Box, Grid, Center, Heading, Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import Navbar from "./Navbar"


const Projects = () => {
    return (
        <div>
            <Navbar />
            <Head>
                <title>Projects - Augustine Li</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Center>
                <Box maxW='48rem'>
                    <Center>
                        <Heading as='h3' mb={3}>My projects</Heading>
                    </Center>
                    <Center>
                        <Text fontSize='xl' mb={6}>
                            Programming projects that I have done, including both personally and at school.
                        </Text>
                    </Center>

                    <Grid templateColumns='repeat(2, 1fr)' gap={6}>


                        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                            <Box p='6'>
                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h4'
                                    lineHeight='tight'
                                    noOfLines={1}
                                >
                                    <Link href="https://github.com/LiAugustine/augustineli">
                                        This website
                                    </Link>


                                </Box>
                                Flask backend with React frontend.
                                <Box>
                                </Box>
                            </Box>
                        </Box>



                        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                            <Box p='6'>
                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h4'
                                    lineHeight='tight'
                                    noOfLines={1}
                                >
                                    <Link href="https://drive.google.com/file/d/1337TEq8o2k6Y3OKab_SMf_RnLNM5YEZe/view">
                                        Java - Seed-based deanonymization
                                    </Link>

                                </Box>
                                Given two sets of nodes, match pairs with the highest similarity score.
                                Project done at Georgia State University in Fall 2021.
                                <Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                            <Box p='6'>
                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h4'
                                    lineHeight='tight'
                                    noOfLines={1}
                                >
                                    <Link href="https://github.com/motion28/meal-deck">
                                        MealDeck
                                    </Link>

                                </Box>
                                Group project done for software engineering class in Spring 2022 using the agile methodology.
                                Flask backend with HTML, CSS, and Bootstrap.
                                <Box>
                                </Box>
                            </Box>
                        </Box>

                    </Grid>
                </Box>
            </Center>
        </div>
    )
}

export default Projects;
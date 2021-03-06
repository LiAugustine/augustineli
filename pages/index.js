import { Box, Grid, Center, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Flask from '../public/flask.png'
import rctPic from '../public/react.png'
import Chakra from '../public/chakra.png'
import Heroku from '../public/heroku.png'

import Navbar from "./Navbar";

const flaskCard = {
  img: '/flask.png',
  title: 'Flask',
  text: 'Backend Flask with SQLAlchemy for handling database and feeding the frontend.',
}

const reactCard = {
  title: 'React',
  text: 'Frontend solution with static HTML export, NextJS framework.',
}

const chakraCard = {
  img: '/chakra.png',
  title: 'Chakra UI',
  text: 'Styling solution for React.',
}

const herokuCard = {
  img: '/heroku.png',
  title: 'Heroku',
  text: 'Website deployment and hosting.',
}


const Home = () => {
  return (
    <div>
      <Navbar />

      <Center>
        <Box maxW='48rem'>
          <Center>
            <Heading as='h3' mb={3}>Augustine Li</Heading>
          </Center>
          <Center>
            <Text fontSize='xl' mb={6}>
              Welcome to my website!
            </Text>
          </Center>

          <Center>
            <Heading as='h5' mb={3}>Website Technologies</Heading>
          </Center>

          <Grid templateColumns='repeat(2, 1fr)' gap={6}>

            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
              <Center>
                <Box w='sm' h='200px'>
                  <Image src={Flask} />
                </Box>
              </Center>

              <Box p='6'>
                <Box
                  mt='1'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'
                  noOfLines={1}
                >
                  {flaskCard.title}
                </Box>

                <Box>
                  {flaskCard.text}
                </Box>
              </Box>
            </Box>

            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
              <Center>
                <Box w='sm' h='200px'>
                  <Image src={rctPic} />
                </Box>
              </Center>

              <Box p='6'>
                <Box
                  mt='1'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'
                  noOfLines={1}
                >
                  {reactCard.title}
                </Box>

                <Box>
                  {reactCard.text}
                </Box>
              </Box>
            </Box>

            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
              <Center>
                <Box w='sm' h='200px'>
                  <Image src={Chakra} height={250} />
                </Box>
              </Center>

              <Box p='6'>
                <Box
                  mt='1'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'
                  noOfLines={1}
                >
                  {chakraCard.title}
                </Box>

                <Box>
                  {chakraCard.text}
                </Box>
              </Box>
            </Box>

            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
              <Center>
                <Box w='sm' h='200px'>
                  <Image src={Heroku} />
                </Box>
              </Center>


              <Box p='6'>
                <Box
                  mt='1'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'
                  noOfLines={1}
                >
                  {herokuCard.title}
                </Box>

                <Box>
                  {herokuCard.text}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Center>
    </div>
  )
}

export default Home;
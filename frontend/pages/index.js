import { Box, Grid, Center, Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Flask from '../public/flask.png'
import rctPic from '../public/react.png'
import Chakra from '../public/chakra.png'
import Heroku from '../public/heroku.png'

import Navbar from "./Navbar";

const flaskCard = {
  img: '/flask.png',
  title: 'Flask',
  text: 'Backend Flask with SQLAlchemy ORM.',
}

const reactCard = {
  title: 'React',
  text: 'React Frontend using the NextJS Framework.',
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
      <Head>
        <title>Home - Augustine Li</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
                  <Image src={Flask} alt="Flask" />
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
                  <Image src={rctPic} alt="React" />
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
                  <Image src={Chakra} alt="Chakra UI" height={250} />
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
                  <Image src={Heroku} alt="Heroku" />
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
import {
  Box, SimpleGrid,
  Grid, Center, Heading, Text, Divider,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import Head from 'next/head'
import Image from 'next/image'
import GSU from '../public/gsu.jpg'
import Flask from '../public/flask.png'
import rctPic from '../public/react.png'
import Java from '../public/java.png'
import PSQL from '../public/psql.png'
import Docker from '../public/docker.png'
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
        <Heading as='h3' size='2xl' mb={3}>Augustine Li</Heading>
      </Center>

      <Center>
        <Text fontSize='xl' mb={3}>
          Computer Science new graduate and aspiring software engineer.
        </Text>

      </Center>
      <Center>
        <Divider width="800px" />
      </Center>




      <br></br>

      <Center>
        <Heading as='h2' size='xl' mb={3}>Skills and Qualifications</Heading>
      </Center>

      <br></br>
      <Center maxW='100%'>
        <SimpleGrid columns={3} spacing={2}>

          <Box maxW='xs' borderWidth='2px' borderRadius='md'>
            <Center>
              <Box w='sm' h='180px'>
                <Image src={GSU} />
              </Box>
            </Center>

            <Box p='2'>
              <Center>
                <Heading as='h3' size='lg'>Bachelors Degree</Heading>
              </Center>
              <List spacing={2}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Completed B.S. in  Computer Science from Georgia State University
                  (Graduated August 2022).
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  3.85 cumulative GPA.
                </ListItem>
              </List>

            </Box>
          </Box>

          <Box maxW='xs' borderWidth='2px' borderRadius='md'>
            <Center>
              <Box w='sm' h='180px'>
                <Image src={Flask} />
              </Box>
            </Center>

            <Box p='2'>
              <Center>
                <Heading as='h3' size='lg'>Flask</Heading>
              </Center>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Created news aggregation website (NewsBox) with Flask backend.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Flask backend used for this website.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Worked on team project (MealDeck) with a Flask backend.
                </ListItem>
              </List>

            </Box>
          </Box>

          <Box maxW='xs' borderWidth='2px' borderRadius='md'>
            <Center>
              <Box w='sm' h='180px'>
                <Image src={rctPic} />
              </Box>
            </Center>

            <Box p='2'>
              <Center>
                <Heading as='h3' size='lg'>React</Heading>
              </Center>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Created news aggregation website (NewsBox) with React frontend.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  React (NextJS framework) used for this website.
                </ListItem>

              </List>

            </Box>
          </Box>

          <Box maxW='xs' borderWidth='2px' borderRadius='md'>
            <Center>
              <Box w='sm' h='180px'>
                <Image src={Java} />
              </Box>
            </Center>

            <Box p='2'>
              <Center>
                <Heading as='h3' size='lg'>Java</Heading>
              </Center>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Java Project - Seed-based Deanonymization.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Understanding of data structures and algorithms through relevant coursework.
                </ListItem>

              </List>

            </Box>
          </Box>

          <Box maxW='xs' borderWidth='2px' borderRadius='md'>
            <Center>
              <Box w='sm' h='180px'>
                <Image src={PSQL} />
              </Box>
            </Center>

            <Box p='2'>
              <Center>
                <Heading as='h3' size='lg'>PostgreSQL</Heading>
              </Center>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Cloud PostgreSQL database used on this website.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Cloud PostgreSQL database used for MealDeck team project.
                </ListItem>

              </List>

            </Box>
          </Box>

          <Box maxW='xs' borderWidth='2px' borderRadius='md'>
            <Center>
              <Box w='sm' h='180px'>
                <Image src={Docker} />
              </Box>
            </Center>

            <Box p='2'>
              <Center>
                <Heading as='h3' size='lg'>Docker</Heading>
              </Center>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  NewsBox web app docker container deployed.
                </ListItem>
              </List>

            </Box>
          </Box>

          <Box maxW='xs' borderWidth='2px' borderRadius='md'>
            <Center>
              <Box w='sm' h='180px'>
                <Image src={Chakra} height={250} />
              </Box>
            </Center>

            <Box p='2'>
              <Center>
                <Heading as='h3' size='lg'>Chakra UI</Heading>
              </Center>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  React UI library for styling. Used on NewsBox project and this page.
                </ListItem>
              </List>
            </Box>
          </Box>


        </SimpleGrid>
      </Center>


    </div >
  )
}

export default Home;
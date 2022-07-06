import {
  Box, Grid, Center, Heading, Text,
  Image
} from '@chakra-ui/react'
import Navbar from "./Navbar";

const flaskCard = {
  img: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/pocoo_flask_logo_icon_168045.png',
  title: 'Flask',
  text: 'Backend Flask with SQLAlchemy for handling database and feeding the frontend.',
}

const reactCard = {
  img: 'https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg',
  title: 'React',
  text: 'Frontend solution with static HTML export, NextJS framework.',
}

const chakraCard = {
  img: 'https://miro.medium.com/max/800/1*q0emKRBNI0Sv_NseTYRDwg.png',
  title: 'Chakra UI',
  text: 'Styling solution for React.',
}

const herokuCard = {
  img: 'https://seekvectorlogo.net/wp-content/uploads/2018/12/heroku-vector-logo.png',
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
                  <Image src={flaskCard.img} />
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
                  <Image src={reactCard.img} />
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
                  <Image src={chakraCard.img} />
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
                  <Image src={herokuCard.img} />
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
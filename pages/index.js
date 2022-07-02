import { Box, Center, Heading, Text } from '@chakra-ui/react'
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Center>
        <Box maxW='36rem'>
          <Heading as='h3' mb={3}>Augustine Li</Heading>
          <Text fontSize='xl'>
            Blogger, cybersecurity enthusiast, hobbyist web developer
          </Text>
        </Box>
      </Center>
    </div>
  )
}

export default Home;
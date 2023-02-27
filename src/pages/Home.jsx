import { Box, Button, Container, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import HeroText from './components/HeroText'


const Home = () => {

  const flexStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.12)",
        backdropFilter: "blur(2px)",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
        border: "2px solid rgba(10, 10, 10, 0.12)"
  }

  return (
    <VStack w="100%" h="100vh" overflowY="scroll" paddingLeft={{ base: "2px" , lg: "30px" , md: "20px" }} paddingRight={{ base: "2px" , lg: "30px" , md: "20px" }} borderRadius="20px" sx={{
      '&::-webkit-scrollbar': {
        width: '10px',
        borderRadius: '8px',
        backgroundColor: `rgba(0, 0, 0, 0.05)`,
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: `rgba(0, 0, 0, 0.05)`,
      },

      flexStyle
    }}>

      {/* Main Section  */}

      <Box as="section" height="100vh" >
        <HStack h="100vh" flexWrap={{ base: "wrap" , lg: "nowrap" , md: "nowrap"}} overflowY="scroll" borderRadius="20px" padding="10px" sx={{
      '&::-webkit-scrollbar': {
        width: '0px',
      }
    }} >
        
        <HeroText />
        <VStack>
          <Image src='main.png' ></Image>
        </VStack>
        
      </HStack>
      </Box>

      {/* SLider Section  */}

      <Box as='section' height="100vh" >
        <VStack>
          
        </VStack>
      </Box>
      
      
    </VStack>
  )
}

export default Home
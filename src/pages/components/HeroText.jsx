import React from 'react'
import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react'


const HeroText = () => {
  return (
    <>
        <VStack align="start" spacing={6}  >
          <Heading color="white"  >Digital Real Estate</Heading>
          <Text color="white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quod, quidem praesentium voluptas quam temporibus eius libero quia similique quasi necessitatibus, voluptatibus quibusdam eligendi odio repellat illum autem voluptate? Illo.</Text>
          <HStack spacing={3} >
          <Box
            as='button'
            p={3}
            color='white'
            fontWeight='bold'
            borderRadius='10px'
            bgGradient='linear(to-r, rgb(175,107,181),rgb(71,104,219))'
            _hover={{
              bgGradient: 'linear(to-r, red.500, yellow.500)',
            }}
          >
            Connect Wallet
          </Box>

          <Box
            as='button'
            p={3}
            color='white'
            fontWeight='bold'
            borderRadius='10px'
            bgColor='none'
            border="1px solid rgb(71,104,219)"
          >
            Sell Property
          </Box>
            
          </HStack>
        </VStack>
    </>
  )
}

export default HeroText
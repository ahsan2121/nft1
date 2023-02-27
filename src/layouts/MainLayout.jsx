import React from 'react'
import Slidebar from '../components/Slidebar'
import { Outlet } from 'react-router-dom'
import {HStack , Flex, Box } from '@chakra-ui/react'



const MainLayout = () => {
  return (
    <>
    <HStack
      spacing="0px"
      
      backgroundColor="rgb(34,34,34)"
    >
      <Flex >
        <Slidebar />
      </Flex>
      <Flex>
        <Outlet />
      </Flex>
    </HStack>
      
        
        
    </>
  )
}

export default MainLayout
import { Avatar,  Divider, Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Navitem from './Navitem';
import HomeIcon from '@mui/icons-material/Home';

const Slidebar = () => {
    const [navSize , setNavSize] = useState("large")
  return (
    <div>
        <Flex 
            pos="sticky"
            left="5"
            h="95vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            w={navSize === "small" ? "75px" : "200px"}
            borderRadius={navSize === "small" ? "15px" : "30px"}
            flexDir="column"
            justifyContent="space-between"
            backdropBlur={5}
        >
            <Flex
                p="5%"
                flexDir="column"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton 
                    background="none"
                    mt={5}
                    _hover={{background: "none"}}
                    icon={ <MenuIcon /> } 
                    onClick={()=>{
                        if(navSize === "small"){
                            setNavSize("large")
                        }else{
                            setNavSize("small")
                        }
                    }}
                >
                    
                </IconButton>

                <Navitem navSize={navSize} icon={HomeIcon} title="Home" active />

            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize === "small" ? "none" : "flex"} />
                <Flex mt={4} align="center" >
                    <Avatar size="sm" src="https://bit.ly/code-beast"  />
                    <Flex flexDir="column" ml={4} display={navSize === "small" ? "none" : "flex"} >
                        <Heading as="h3" size="sm" >
                            Ahsan Ansar
                        </Heading>
                        <Text>
                            Admin
                        </Text>
                    </Flex>
                </Flex>

            </Flex>
            
        </Flex>
    </div>
  )
}

export default Slidebar
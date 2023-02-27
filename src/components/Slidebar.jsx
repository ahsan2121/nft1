import { Avatar,  Divider, Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Navitem from './Navitem';
import HomeIcon from '@mui/icons-material/Home';

const Slidebar = () => {
    const [navSize , setNavSize] = useState("large")

    const navStyle = {
        backgroundImage: "linear-gradient(to bottom , rgb(175,107,181),rgb(71,104,219))",
        // backgroundColor: "rgba(255, 255, 255, 0.12)",
        backdropFilter: "blur(2px)",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
        border: "2px solid rgba(10, 10, 10, 0.12)"
    }
  return (
    
        <Flex 
            h="100vh"
            borderRadius="20px"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            w={navSize === "small" ? "75px" : "250px"}
            // borderRadius={navSize === "small" ? "15px" : "30px"}
            flexDir="column"
            justifyContent="space-between"
            backdropBlur={5}
            as="nav"
            sx={navStyle}
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
                <Navitem navSize={navSize} icon={HomeIcon} title="Marketplace"  />
                <Navitem navSize={navSize} icon={HomeIcon} title="Sell Property"  />
                <Navitem navSize={navSize} icon={HomeIcon} title="Get Register"  />

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
                    <Avatar size="sm" src="avatar.png"  />
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
  )
}

export default Slidebar
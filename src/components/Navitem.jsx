import { Flex, Link, Menu, MenuButton, Text , Icon } from '@chakra-ui/react'
import React from 'react'

const Navitem = ({navSize , title , icon , active }) => {
  return (
    <>
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize === "small" ? "center" : "flex-start"}
        >
            <Menu>
                <Link
                    backgroundColor={active && "rgba(9, 105, 112, 0.288)"}
                    p={3}
                    borderRadius={8}
                    _hover={{textDecor:'none' , backgroundColor: "#AEC8CA"}}
                    w={navSize === "large" && "100%"}
                    
                >
                    <MenuButton w="100%">
                        <Flex align="center" >
                            <Icon as={icon} fontSize="xl" color={[active ? "rgb(76, 17, 82)" : "White"] } ></Icon>
                            <Text ml={5} display={navSize ===  "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
                
            </Menu>

        </Flex>
    </>
  )
}

export default Navitem
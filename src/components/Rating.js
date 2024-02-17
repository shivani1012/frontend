import { Icon, Flex, Box, Text } from '@chakra-ui/react';
import { IoStar, IoStarHalf, IoStarOutline } from 'react-icons/io5';
import React from 'react';

const Rating = ({ value, color='red.500', text }) => {
  return (
    <Flex>
        <Box mr='2' mt='0.5'>
            <Icon 
                color={color}
                as={value >= 1 ? IoStar : value >= 0.5 ? IoStarHalf : IoStarOutline }
            />
            <Icon 
                color={color}
                as={value >= 2 ? IoStar : value >= 1.5 ? IoStarHalf : IoStarOutline }
            />
            <Icon 
                color={color}
                as={value >= 3 ? IoStar : value >= 2.5 ? IoStarHalf : IoStarOutline }
            />
            <Icon 
                color={color}
                as={value >= 4 ? IoStar : value >= 3.5 ? IoStarHalf : IoStarOutline }
            />
            <Icon 
                color={color}
                as={value >= 5 ? IoStar : value >= 4.5 ? IoStarHalf : IoStarOutline }
            />
            <Text>{text}</Text>
        </Box>
    </Flex>
  )
}

export default Rating
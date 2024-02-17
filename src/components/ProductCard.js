import React from 'react';
import { Box, Flex, Heading, Link, Text, Image } from '@chakra-ui/react';
import Rating from './Rating';
import { Link as RouterLink } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link as={RouterLink} to={`/product/${product._id}`} _hover={{ shadow: 'xl' }}>
        <Box borderRadius="lg" bgColor="white" _hover={{ shadow: 'xl' }}>
            <Image
                src={product.image}
                alt={product.name}
                w="full"
                h="430px"
                objectFit="cover"
            />
            <Flex py='5' px='4' direction='column' justifyContent='space-between'>
                <Heading as='span' fontSize='sm' mb='3' textOverflow='ellipsis' overflow='hidden' whiteSpace='nowrap' width='180px'>
                    {product.name}
                </Heading>
                <Flex alignItems='center' justifyContent='space-between'>
                    <Rating value={product.rating} color='yellow.500' />
                    <Text fontSize='lg' fontWeight='bold' color='blue.600'>
                        {product.price}
                    </Text>
                </Flex>
            </Flex>
        </Box>
    </Link>
  )
}

export default ProductCard
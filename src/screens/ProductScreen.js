import { Button, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import products from '../Products';

const ProductScreen = () => {
    const { id } = useParams();
    const product = products.find((prod) => prod._id === id);

    return (
        <>
            <Flex mb='5'>
                <Button as={RouterLink} to='/' colorScheme='gray'>
                    Go Back
                </Button>
            </Flex>
            <Grid templateColumns='5fr 4fr 3fr' gap='10'>
                {/* {column 1} */}
                <Image
                    src={product.image}
                    alt={product.name}
                    borderRadius='md'
                    w='full'
                />
                {/* column 2 */}
                <Flex direction='column'>
                    <Heading as='h5' fontSize='base' color='gray.500'>
                        {product.brand}
                    </Heading>
                    <Heading as='h2' fontSize='4xl' mb='4'>
                        {product.name}
                    </Heading>
                    <Rating
                        value={product.rating}
                        color='yellow.500'
                        text={`${product.numReviews} Reviews`}
                    />
                    <Heading as='h5' fontSize='4xl' color='teal.600' my='5'>
                        ₹{product.price}
                    </Heading>
                    <Text>{product.description}</Text>
                </Flex>
                {/* Column 3 */}
                <Flex direction='column'>
                    <Flex justifyContent='space-between' py='2'>
                        <Text>Price: </Text>
                        <Text fontWeight='bold'>₹{product.price}</Text>
                    </Flex>
                    <Flex justifyContent='space-between' py='2'>
                        <Text>Status: </Text>
                        <Text fontWeight='bold'>
                            {product.countInStock > 0 ? 'In Stock' : 'Not Available'}
                        </Text>
                    </Flex>
                    <Button
                        bg='gray.500'
                        colorScheme='teal'
                        my='2'
                        textTransform='uppercase'
                        letterSpacing='wide'
                        isDisabled={product.countInStock === 0}
                    >
                        Add to cart
                    </Button>
                </Flex>
            </Grid>
        </>
    )
}

export default ProductScreen;
import { Box, Flex, Heading, Icon, Link } from '@chakra-ui/react';
import { useState } from 'react';
import { HiMenuAlt3, HiOutlineLogin, HiOutlineShoppingCart } from 'react-icons/hi';
import HeaderMenuItem from './HeaderMenuItem';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
	const [show, setShow] = useState(false);

	return (
		<Flex
			as='header'
			align='center'
			justifyContent='space-between'
			wrap='wrap'
			py='6'
			px='6'
			bgColor='blue.700'
			w='100%'
			pos='fixed'
			top='0'
			left='0'
			zIndex='9999'
			>
			<Link as ={RouterLink} to='/'>
				<Heading
					as='h1'
					fontWeight='bold'
					size='md'
					letterSpacing='wide'
					color='white'>
					 E-com
				</Heading>
			</Link>

			<Box
				display={{ base: 'block', md: 'none' }}
				onClick={() => setShow(!show)}>
				<Icon as={HiMenuAlt3} color='white' w='6' h='6' />
			</Box>

			<Box
				display={{ base: show ? 'block' : 'none', md: 'flex' }}
				width={{ base: 'full', md: 'auto' }}
				mt={{ base: '2', md: '0' }}>
				<HeaderMenuItem url='/cart' icon={HiOutlineShoppingCart}>
					Cart
				</HeaderMenuItem>
				<HeaderMenuItem url='/login' icon={HiOutlineLogin}>
					Login
				</HeaderMenuItem>
			</Box>
		</Flex>
	);
};

export default Header;

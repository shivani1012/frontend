import { Flex, Text } from '@chakra-ui/react';

const Footer = () => {
	return (
		<Flex as='footer' justifyContent='center' py='3' bgColor='gray.300'>
			<Text fontSize='12px'>
				Copyright {new Date().getFullYear()}. E-com. All Rights Reserved.
			</Text>
		</Flex>
	);
};

export default Footer;

import React from 'react';
import { Link, Icon } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const HeaderMenuItem = ({ url, icon, children }) => {
  return (
    <Link
        as={RouterLink}
        to={url}
        fontSize='sm'
        letterSpacing='wide'
        textTransform='uppercase'
        fontWeight='600'
        ml={{ base: '0', md: '5' }}
        mt={{ base: '1', md: '0' }}
        color='whiteAlpha.800'
        display='flex'
        alignItems='center'
        gap='1'
        _hover={{ textDecor: 'none', color: 'whiteAlpha.600' }} 
    >
        {children}
        <Icon as={icon} />
    </Link>
  )
}

export default HeaderMenuItem
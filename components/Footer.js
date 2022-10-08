import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Stack,
  Text,
  VisuallyHidden,
  Image
} from '@chakra-ui/react';
import { FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';
import { ReactNode } from 'react';
import NextLink from "next/link"

const SocialButton = ({
  children,
  label,
}) => {
  return (
    <chakra.button
      bg='blackAlpha.100'
      rounded={'full'}
      w={['8', '8', '8', '8', '1vw']}
      h={['8', '8', '8', '8', '1vw']}
      cursor={'pointer'}
      as={'a'}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'blackAlpha.200'
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg='white.50'
      color='gray.700'
      boxShadow='dark-lg'
    >
      <Container
        as={Stack}
        maxW={'4800px'}
        py={[4, 4, 4, 4, '1vw']}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <NextLink href="/" passHref>
          <Button _focus={{ background: 'transparent' }} variant='ghost' fontSize={['20px', '20px', '20px', '1.2vw']} fontWeight='800'>
            <Flex color='gray.900' display='inline-block'>
              DevTaxes
            </Flex>
            <Image src="/pictures/IRS.png" alt="frame" h={['40px', '40px', '40px', '3vw']} ml='1vw' />
            <Image src="/pictures/notary.png" alt="frame" h={['40px', '40px', '40px', '3vw']} ml='1vw' />
          </Button>
        </NextLink>
        <Text fontSize={['16px', '16px', '16px', '16px', '1.05vw']}>© 2022 Dev Tax and Accounting. All rights reserved</Text>
        <Stack direction={'row'} spacing={[6, 6, 6, 6, '1vw']}>
          <SocialButton label={'Email'}>
            <FaEnvelope onClick={() => window.location.href = "mailto:info@devtaxes.com"} />
          </SocialButton>
          <SocialButton label={'Phone'}>
            <FaPhone onClick={() => window.location.href = ('tel:3014332337')} />
          </SocialButton>
          <SocialButton label={'Facebook'}>
            <FaFacebook onClick={() => window.open('https://www.facebook.com/')} />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}

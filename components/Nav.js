import React from "react";
import { useState, useEffect } from "react";
import { Button, Spacer, Flex, IconButton, useDisclosure, Link } from "@chakra-ui/react"
import styled from "@emotion/styled"
import NextLink from "next/link"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"

export default function Nav() {
  const { isOpen, onToggle } = useDisclosure();
  const [scroll, setScrol] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) setScrol(true);
      else setScrol(false);
    });
  }, []);

  const StickNav = styled(Flex)`
    position: sticky;
    z-index: 100;
    top: 0;
  `
  const StyledButton = styled(Button)`
    color: #4A5568;
    border-radius: 0;
    padding: 0;
    display: inline-block;
    position: relative;
    background: transparent;

    &:hover{
      background: transparent;
    }
    
    &:after{
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #3d53db;
      transform-origin: bottom;
      transition: transform 0.25s ease-out;
    }
    &:hover:after{
      transform: scaleX(0);
      transform-origin: bottom;
    }
    @media only screen and (max-width: 3840px) {
      &:hover:after{
        transform: scaleX(1);
      }
    }
  `
  return (
    <>
      <StickNav
        bg='rgb(255,255,255)'
        width='100' py={['1rem', '1rem', '1rem', '1rem', '1rem', '1.5vw']} display={['none', 'none', 'flex', 'flex']}
        px={['1rem', '1rem', '1rem', '5rem', '3vw']}
        // maxWidth='1920px' m='0 auto'
        boxShadow={`${scroll && 'lg'}`}
      >
        <NextLink href="/" passHref>
          <StyledButton fontSize={['20px', '20px', '20px', '20px', '1.5vw']} fontWeight='800'>
            <Flex color='gray.900' display='inline-block'>
              DevTaxes
            </Flex>
          </StyledButton>
        </NextLink>
        <Spacer />
        <Flex>
          <NextLink href="/#Services" passHref>
            <StyledButton ml='1.75vw' fontSize={['17px', '17px', '17px', '17px', '1.1vw']}>Services</StyledButton>
          </NextLink>
          <NextLink href="/#Track" passHref>
            <StyledButton ml='1.75vw' fontSize={['17px', '17px', '17px', '17px', '1.1vw']}>Track Refund</StyledButton>
          </NextLink>
          <Link href="https://devtaxes.securefilepro.com/portal/#/login" isExternal>
            <StyledButton ml='1.75vw' fontSize={['17px', '17px', '17px', '17px', '1.1vw']}>Portal</StyledButton>
          </Link>
          <NextLink href="/contact" passHref>
            <StyledButton ml='1.75vw' fontSize={['17px', '17px', '17px', '17px', '1.1vw']}>Contact Us</StyledButton>
          </NextLink>
        </Flex>
      </StickNav>
      <StickNav
        bg='rgb(255,255,255)'
        width='100' py='1rem' display={['flex', 'flex', 'none', 'none']}
        px={['1rem', '1rem', '1rem', '5rem']}
        // maxWidth='1920px' m='0 auto'
        boxShadow={`${scroll && 'lg'}`}
      >
        <NextLink href="/" passHref>
          <StyledButton fontSize='20px' fontWeight='800'>
            <Flex color='gray.900' display='inline-block'>
              DevTaxes
            </Flex>
          </StyledButton>
        </NextLink>
        <Spacer />
        <Flex>
          <IconButton
            bg='gray.300'
            _hover={{ bg: 'gray.400' }}
            color='black'
            aria-label='Nav Menu'
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onToggle}
            zIndex='1'
          />
        </Flex>
        <Flex w='100vw' h='100vh'
          position='fixed' top='0' left='0'
          display={isOpen ? '' : 'none'}
          bgColor='white' opacity='0.95'
        >
          <Flex flexDir='column' gap='1.5rem' textAlign='center' mt='25vh'>
            <NextLink href="/#Services" passHref>
              <Button fontFamily='Fira Code' fontSize='30px' fontWeight='bold' variant='ghost' onClick={() => onToggle()}>Services</Button>
            </NextLink>
            <NextLink href="/#Track" passHref>
              <Button fontFamily='Fira Code' fontSize='30px' fontWeight='bold' variant='ghost' onClick={() => onToggle()}>Track Refund</Button>
            </NextLink>
            <Link href="https://devtaxes.securefilepro.com/portal/#/login" isExternal>
              <Button fontFamily='Fira Code' fontSize='30px' fontWeight='bold' variant='ghost' onClick={() => onToggle()}>Portal</Button>
            </Link>
            <NextLink href="/contact" passHref>
              <Button fontFamily='Fira Code' fontSize='30px' fontWeight='bold' variant='ghost' onClick={() => onToggle()}>Contact Us</Button>
            </NextLink>
          </Flex>
        </Flex>
      </StickNav>
    </>
  );
}
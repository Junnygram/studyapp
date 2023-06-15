import { Box, Flex } from '@chakra-ui/react';
import SideNav from '../SideNav';
import { useRouter } from 'next/router';
import React, { useContext, useState, ReactNode } from 'react';
import Header from '../Header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  const noNav =
    router.asPath.startsWith('/login') || router.asPath.startsWith('/register');
  const [showSide, setShowSide] = useState<boolean>(false);
  return (
    <>
      {noNav ? (
        <Box>{children}</Box>
      ) : (
        <Flex pos="relative" bg="#f3f2f1">
          <SideNav showSide={showSide} setShowSide={setShowSide} />
          <Box w={{ base: 'full', lg: '82%' }} as="main" ml="auto" minH="95vh">
            <Header showSide={showSide} setShowSide={setShowSide} />
          </Box>
        </Flex>
      )}
    </>
  );
};

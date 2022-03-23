import {
  Box,
  Flex,
  Link,
  Stack,
  Text,
  Collapse,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import sokinLogo from "assets/sokin-logo-nav.png";
import Image from "next/image";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const NavItem = ({ children }) => {
  return (
    <Link
      borderBottomWidth={2}
      borderBottomColor="transparent"
      padding={3}
      minWidth="180px"
      textAlign="center"
      _focus={{
        borderBottomColor: "brand.900",
        borderBottomWidth: 2,
        color: "brand.900",
        transition: "border 150ms linear",
      }}
      transition="border 150ms linear"
      _hover={{
        textDecoration: "none",
        color: "brand.900",
      }}
      href="#"
      fontWeight="semibold"
      color="#5F5F5F"
    >
      <Text>{children}</Text>
    </Link>
  );
};

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        maxH={{
          lg: "80px",
          base: "70px",
        }}
        backgroundColor="white"
        paddingX={{
          lg: "137px",
          md: "64px",
          base: "20px",
        }}
        paddingY={3}
        justifyContent="space-between"
        background="rgba(255, 255, 255, 0.8)"
        position="relative"
      >
        <Flex
          alignItems="center"
          display={{ lg: "none", base: "flex" }}
          position="absolute"
          top={0}
          bottom={0}
          left={5}
        >
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onToggle}
          />
        </Flex>

        <Flex alignItems="center" mx={{ base: "auto", lg: "0" }}>
          <Image
            layout="fixed"
            width="40px"
            objectFit="contain"
            src={sokinLogo}
          />
          <Text ml={2} fontWeight="bold" fontSize={20}>
            DiSokin
          </Text>
        </Flex>

        <DesktopNav />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  return (
    <Stack
      direction="row"
      spacing={4}
      alignItems="center"
      display={{
        base: "none",
        lg: "flex",
      }}
    >
      <NavItem>Tentang Sokin</NavItem>
      <NavItem>Supporting Ecosystem</NavItem>
      <NavItem>Kontak Kami</NavItem>
      <NavItem>Karir</NavItem>
    </Stack>
  );
};

const MobileNavItem = ({ children }) => {
  return (
    <Link
      _hover={{ textDecor: "none" }}
      href="#"
      fontWeight="semibold"
      paddingY={1}
      _focus={{
        color: "brand.900",
        transition: "border 150ms linear",
      }}
    >
      {children}
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack display={{ lg: "none", base: "flex" }} paddingX={4}>
      <MobileNavItem>Tentang Sokin</MobileNavItem>
      <MobileNavItem>Supporting Ecosystem</MobileNavItem>
      <MobileNavItem>Kontak Kami</MobileNavItem>
      <MobileNavItem>Karir</MobileNavItem>
    </Stack>
  );
};

export default Navbar;

import { Box, Container, Text, Img, Stack, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import heroImg from "assets/hero.png";
import blob1 from "assets/blob-1.png";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      {/* <h1>web</h1> */}
      <Box position="relative">
        <Box position="absolute" right={0} zIndex={-1}>
          <Image
            src={heroImg}
            height={"540px"}
            width={"1005px"}
            layout="fixed"
          />
        </Box>
        <Box position="absolute" left={0} top={"25%"} zIndex={-2}>
          <Image
            height="330px"
            width="137px"
            layout="fixed"
            objectFit="contain"
            src={blob1}
          />
        </Box>
        <Container maxW="container.xl">
          <Flex
            justifyContent="center"
            direction="column"
            height="540px"
            alignItems={{
              base: "center",
              lg: "start",
            }}
          >
            <Stack
              background="rgba(255, 255, 255, 0.8)"
              paddingX="100px"
              backdropFilter="blur(8px)"
              boxSize="470px"
              alignItems="center"
              justifyContent="center"
            >
              <Text>
                <Text color="brand.900" fontSize="30px" fontWeight="bold">
                  Apa itu DiSokin?
                </Text>
                <br />
                <Text fontSize="18px" lineHeight="28px" color="#252525">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  augue elementum quis habitasse eget maecenas volutpat erat.
                  Sed egestas donec vulputate adipiscing nulla. Nec leo quis
                  purus feugiat leo dignissim sed.
                </Text>
              </Text>
            </Stack>
          </Flex>
        </Container>
      </Box>
    </div>
  );
}

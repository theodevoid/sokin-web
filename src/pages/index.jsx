import {
  Box,
  Container,
  Text,
  Stack,
  Flex,
  Grid,
  GridItem,
  Heading,
  Button,
  Input,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "components/Navbar";
import heroImg from "public/hero.png";
import blob1 from "public/blob-1.png";
import blob2 from "public/blob-2.png";
import placeholderDipasar from "public/placeholder-dipasar.png";
import ShowcaseItem from "components/ShowcaseItem";
import iphoneMockup from "public/iphone-mockup.png";
import appstore from "public/appstore.png";
import playstore from "public/playstore.png";
import sokinLogo from "public/sokin-logo-nav.png";

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

      {/* Hero Section */}
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
              paddingX={{ lg: "100px", base: "10" }}
              backdropFilter="blur(8px)"
              boxSize={{ lg: "470px", base: "100%" }}
              alignItems="center"
              justifyContent="center"
            >
              <Text>
                <Text color="brand.900" fontSize="30px" fontWeight="bold">
                  Apa itu DiSokin?
                </Text>
                <br />
                <Text color="#252525">
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

      {/* DiPasar Section */}
      <Box position="relative" mt={{ base: 16, lg: 24 }} overflowX="clip">
        <Box position="absolute" right={-20} zIndex={-1}>
          <Image
            src={blob2}
            layout="fixed"
            height="590px"
            objectFit="contain"
          />
        </Box>
        <Container
          maxW={{ lg: "container.lg", base: "container.md" }}
          pt={{ base: 0, lg: 20 }}
        >
          <Stack direction={{ base: "column", lg: "row" }} spacing={{ lg: 7 }}>
            <Box
              alignSelf={{ base: "center", lg: "start" }}
              flex={1}
              display={{ lg: "block" }}
              order={{ base: 2, lg: 1 }}
              mt={{ base: 7, lg: 0 }}
            >
              <Image src={placeholderDipasar} layout="fixed" />
            </Box>
            <Stack
              spacing={3}
              justifyContent="center"
              order={{ base: 1, lg: 2 }}
            >
              <Heading fontSize="1.5em" fontFamily="Nunito Sans">
                Apa itu DiPasar?
              </Heading>
              <Text>
                DiPasar adalah produk digital pertama dari ekosistem DiSokin.
                Kami manifestasikan hasrat yang kuat untuk bisa membantu usaha
                setiap rakyat terlepas dari jenis, bentuk, maupun cara berusaha
                dari setiap para pengusaha dalam produk yang kami sebut DiPasar
                ini. Adam Smith said, “It is not from the benevolence of the
                butcher, the brewer, or the baker, that we expect our dinner,
                but from their regard to their own interest.” Hopefully, we all
                able to have a virtuous self-interest that can have a great
                impact beyond oneself.
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Item grid section */}
      <Container
        maxW={{ lg: "container.lg", base: "container.md" }}
        mt={{ base: 16, lg: 40 }}
      >
        <Box textAlign="center">
          <Stack spacing={2} maxW="xl" mx="auto">
            <Heading fontSize="1.5em">
              In quis pharetra eget mauris orci tristique volutpat.
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
              arcu lorem a tincidunt. Eleifend suspendisse proin vitae
              elementum,{" "}
            </Text>
          </Stack>
        </Box>

        <Grid
          templateColumns={{
            lg: "repeat(4, 1fr)",
            md: "repeat(2, 1fr)",
            base: "repeat(1, 1fr)",
          }}
          mt={10}
          gap={7}
        >
          <GridItem colSpan={1}>
            <ShowcaseItem />
          </GridItem>
          <GridItem colSpan={1}>
            <ShowcaseItem />
          </GridItem>
          <GridItem colSpan={1}>
            <ShowcaseItem />
          </GridItem>
          <GridItem colSpan={1}>
            <ShowcaseItem />
          </GridItem>
        </Grid>
      </Container>

      {/* App store section */}
      <Box
        background="linear-gradient(100.64deg, #EF3E64 0%, #C75E74 100%)"
        mt={{ base: 16, lg: 40 }}
        py={20}
        px={8}
      >
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        >
          <GridItem>
            <Flex h="100%" justifyContent="center" alignItems="center">
              <Image src={iphoneMockup} />
            </Flex>
          </GridItem>
          <GridItem>
            <Stack
              justifyContent="center"
              alignItems={{ base: "center", lg: "start" }}
              h="100%"
            >
              <Heading color="white">Download Sokin DiPasar sekarang!</Heading>
              <Text color="white" fontSize="lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed.
              </Text>
              <Stack direction={{ base: "column", lg: "row" }} spacing={8}>
                <Box _hover={{ cursor: "pointer" }} as="a">
                  <Image
                    src={appstore}
                    layout="fixed"
                    width="200px"
                    height="200px"
                    objectFit="contain"
                  />
                </Box>
                <Box _hover={{ cursor: "pointer" }} as="a">
                  <Image
                    src={playstore}
                    layout="fixed"
                    width="200px"
                    height="200px"
                    objectFit="contain"
                  />
                </Box>
              </Stack>
            </Stack>
          </GridItem>
        </Grid>
      </Box>

      {/* Sokin partner section */}
      <Box>
        <Stack alignItems="center" spacing={10} my={{ base: 16, lg: 40 }}>
          <Heading fontSize="36px">Partner Sokin</Heading>
          <Stack>
            <Text
              fontWeight="bold"
              fontSize={{ lg: "90px", base: "72px" }}
              lineHeight="1"
              textAlign={{ base: "center", lg: "left" }}
            >
              120.435
            </Text>
            <Heading
              fontSize="24px"
              color="#5F5F5F"
              textAlign={{ base: "center", lg: "left" }}
            >
              brand bekerjasama dengan Sokin
            </Heading>
          </Stack>
        </Stack>
      </Box>

      {/* Footer */}
      <Box py={10} backgroundColor="#F5F5F5">
        <Container
          as="footer"
          role="contentinfo"
          maxW={{ base: "container.sm", lg: "container.lg" }}
        >
          <Stack
            direction="row"
            spacing={{ base: "6", md: "8" }}
            align="start"
            alignItems="center"
          >
            <Image src={sokinLogo} />
            <Text fontSize="30px" fontWeight="bold">
              DiSokin
            </Text>
          </Stack>
          <Stack
            spacing="8"
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
            py={{ base: "6", md: "8" }}
          >
            <Stack spacing="3">
              <Text>PT.Pemberdaya Usaha Alam Semesta</Text>
              <Text>
                Jalan ipsum dolor sit amet, consectet adipiscing elit.{" "}
              </Text>
            </Stack>
            <Stack
              direction={{ base: "column", lg: "row" }}
              spacing={{ base: "16", md: "8" }}
            >
              <Stack
                direction={{ base: "column", md: "row-reverse", lg: "row" }}
                spacing="8"
              >
                <Stack spacing="4" minW="36" flex="1">
                  <Text color="#5F5F5F">Kontak kami</Text>
                  <Stack spacing="3" shouldWrapChildren>
                    <Text>+62 81234567890</Text>
                    <Text>sokin.ngab@gmail.com</Text>
                  </Stack>
                </Stack>
                <Stack spacing="4" minW="36" flex="1">
                  <Text color="#5F5F5F">Sosial Media</Text>
                  <Stack spacing="3" shouldWrapChildren>
                    <Text>Instagram: @soki.ngab</Text>
                    <Text>Twitter: @soki.ngab</Text>
                    <Text>Pornhub: @soki.ngab</Text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack spacing={"-130px"}>
              <Box _hover={{ cursor: "pointer" }} as="a" mt={"-65px"}>
                <Image
                  src={appstore}
                  layout="fixed"
                  width="200px"
                  height="200px"
                  objectFit="contain"
                />
              </Box>
              <Box _hover={{ cursor: "pointer" }} as="a">
                <Image
                  src={playstore}
                  layout="fixed"
                  width="200px"
                  height="200px"
                  objectFit="contain"
                />
              </Box>
            </Stack>
          </Stack>
          <Divider />
          <Stack
            pt="8"
            pb="12"
            justify="space-between"
            direction={{ base: "column-reverse", md: "row" }}
            align="center"
          >
            <Text fontSize="sm" color="subtle">
              &copy; {new Date().getFullYear()} DiSokin, Inc. All rights
              reserved.
            </Text>
          </Stack>
        </Container>
      </Box>
    </div>
  );
}


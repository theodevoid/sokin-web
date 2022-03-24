import {
  Box,
  Container,
  Text,
  Stack,
  Flex,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "components/Navbar";
import heroImg from "assets/hero.png";
import blob1 from "assets/blob-1.png";
import blob2 from "assets/blob-2.png";
import placeholderDipasar from "assets/placeholder-dipasar.png";
import ShowcaseItem from "components/ShowcaseItem";

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
                morbi eu eget eu. Cras at arcu, nulla euismod lectus. Diam sit
                sociis consectetur tempor quam amet massa est, blandit. Molestie
                netus aenean ut integer elementum egestas et ipsum, est. A
                auctor ultricies aliquam egestas. Nulla sapien vitae ultricies
                tristique facilisis lobortis massa egestas. Pulvinar hendrerit
                gravida lectus lectus. Dui sit mauris turpis ut mi. Nisl, eu
                velit lorem fringilla est eu sit nunc. Etiam tortor in a aenean.
                Molestie netus aenean ut integer elementum egestas et ipsum,
                est. A auctor ultricies aliquam egestas. Nulla sapien vitae
                ultricies t
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
    </div>
  );
}

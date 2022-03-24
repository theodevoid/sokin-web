import { Flex, Image, Stack, Text } from "@chakra-ui/react";

const ShowcaseItem = ({ image, title, content }) => {
  return (
    <Flex minH="463px" position="relative">
      <Image
        zIndex={-1}
        position="absolute"
        borderRadius="16px"
        width="100%"
        height="100%"
        objectFit="cover"
        fallbackSrc="https://images.unsplash.com/photo-1640622308013-b9337424e401?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        src={image}
      />
      <Flex flex={1} padding={4} direction="column" justifyContent="end">
        <Stack
          background="rgba(255, 255, 255, 0.88)"
          padding={3}
          borderRadius={"8px"}
        >
          <Text textAlign="center" fontSize="18px" fontWeight="bold">
            {title || "USP 1"}
          </Text>
          <Text>
            {content ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra aliquam faucibus."}
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default ShowcaseItem;

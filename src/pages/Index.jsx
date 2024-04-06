import { Box, Button, Center, Divider, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaGoogle, FaApple } from "react-icons/fa";

const Index = () => {
  return (
    <Center height="100vh" bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6} boxShadow="lg" bg={useColorModeValue("white", "gray.700")} rounded="xl">
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box rounded={"lg"} boxShadow="lg" p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
              <Flex align={"center"} justify={"center"}>
                <Divider />
                <Text p={2}>OR</Text>
                <Divider />
              </Flex>
              <Button w={"full"} maxW={"md"} variant={"outline"} leftIcon={<FaGoogle />} onClick={() => alert("Sign in with Google")}>
                Sign in with Google
              </Button>
              <Button w={"full"} maxW={"md"} variant={"outline"} leftIcon={<FaApple />} onClick={() => alert("Sign in with Apple")} colorScheme={"blackAlpha"}>
                Sign in with Apple
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Center>
  );
};

export default Index;

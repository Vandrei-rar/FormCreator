"use client";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Text, Container, Flex } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home() {
  return (
    <Flex height="100vh" justifyContent={"center"} alignItems={"center"}>
      <Container maxW={"container.xl"} centerContent>
        <Text fontSize={"4xl"}>Crie seu formulário</Text>
        <NextLink href="/form">
          <Button colorScheme="orange" rightIcon={<ArrowForwardIcon />}>
            Começar
          </Button>
        </NextLink>
      </Container>
    </Flex>
  );
}

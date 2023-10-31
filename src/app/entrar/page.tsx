"use client"
import Image from "next/image"
import Link from "next/link"
import { useCallback, useState } from "react"
import { Box, VStack, Input, Button } from "@chakra-ui/react"

import { BaseInput } from "@/components/BaseInput"

import Logo from "@/assets/logo.svg"

export default function Login() {
  const [isLoading, setLoad] = useState<boolean>(false)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormSubmit = useCallback(async (e: any) => {
    e.preventDefault()

    setLoad(true)

    await new Promise((r) => setTimeout(r, 3000))

    setLoad(false)
  }, [])

  return (
    <Box w="full" h="100vh" bg="gray.200" display="grid" placeItems="center">
      <Box
        w="90%"
        maxW={500}
        bg="white"
        padding="6"
        borderRadius="md"
        paddingTop="24"
        paddingBottom="24"
        boxShadow="sm"
      >
        <VStack spacing="8" as="form" onSubmit={handleFormSubmit}>
          <Box paddingTop="8" paddingBottom="8">
            <Image src={Logo} alt="Logo" />
          </Box>

          <BaseInput labelText="Login" isRequired isDisabled={isLoading}>
            <Input placeholder="Seu login" />
          </BaseInput>

          <BaseInput labelText="Senha" isRequired isDisabled={isLoading}>
            <Input type="password" placeholder="Sua senha" />
          </BaseInput>

          <Button type="submit" w="full" colorScheme="pink" isLoading={isLoading}>
            Entrar
          </Button>

          <Link href="/">Esqueci minha senha</Link>
        </VStack>
      </Box>
    </Box>
  )
}

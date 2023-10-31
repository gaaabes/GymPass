"use client"
import { Box, Link, Stack, Text } from "@chakra-ui/react"
import Logo from "@/assets/logo.svg"
import Image from "next/image"
import { Header } from "@/components/headerLine/Header"

export function Sidebar() {
  return (
    <Box bg="white.100" as="aside" w="87.75" mr="20">
      <Header />
      <Box w="39.5" h="8" mt="13.25" mb="13.75" ml="11.5">
        <Image src={Logo} alt="Logo" />
      </Box>
      <Stack spacing="7.5" ml="11.5">
        <Box>
          <Link href="../painel/dashboard.tsx">
            <Text fontWeight="400" color="black.900" fontSize="4.25">Dashboard</Text>
          </Link>
        </Box>
        <Box>
          <Link href="/">
            <Text fontWeight="400" color="black.900" fontSize="4.25">Alunos</Text>
          </Link>
        </Box>
        <Box>
          <Link href="/">
            <Text fontWeight="400" color="black.900" fontSize="4.25">Treinadores</Text>
          </Link>
        </Box>
        <Box>
          <Link href="/">
            <Text fontWeight="400" color="black.900" fontSize="4.25">Saques</Text>
          </Link>
        </Box>
      </Stack>
    </Box>
  )
}
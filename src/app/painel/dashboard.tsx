"use client"
import { Header } from "@/components/headerLine/Header"
import { Sidebar } from "../menu/sidebar"
import { Flex, SimpleGrid, Text, Box } from "@chakra-ui/react"

export function Dashboard() {
  return (
    <Flex bg="lightBlue.200" direction="column" h="100vh">
      <Header />

      <Sidebar />

      <SimpleGrid flex="1" gap="8" minChildWidth="320px">
        <Box bg="white.100" w="95" h="87.5">
          <Box w="16" h="6.5">
            <Text fontWeight="600" fontSize="4" color="pink.500" lineHeight="6">
              Treinos
            </Text>
          </Box>
          <Box w="31.25" h="19.5">
            <Text fontWeight="500" fontSize="13" lineHeight="19.5">
              1.230
            </Text>
          </Box>
        </Box>

        <Box bg="white.100" w="95" h="87.5">
          <Box w="16" h="6.5">
            <Text fontWeight="600" fontSize="4" color="pink.500" lineHeight="6">
              Vendas
            </Text>
          </Box>
          <Box w="31.25" h="19.5">
            <Text fontWeight="500" fontSize="13" lineHeight="19.5">
              R$ 86.100
            </Text>
          </Box>
        </Box>

        <Box bg="white.100" w="95" h="87.5">
          <Box w="16" h="6.5">
            <Text fontWeight="600" fontSize="4" color="pink.500" lineHeight="6">
              Lucro
            </Text>
          </Box>
          <Box w="31.25" h="19.5">
            <Text fontWeight="500" fontSize="13" lineHeight="19.5">
              R$ 17.220
            </Text>
          </Box>
        </Box>

        <Box bg="white.100" w="95" h="87.5">
          <Box w="16" h="6.5">
            <Text fontWeight="600" fontSize="4" color="pink.500" lineHeight="6">
              Novos Alunos
            </Text>
          </Box>
          <Box w="31.25" h="19.5">
            <Text fontWeight="500" fontSize="13" lineHeight="19.5">
              230
            </Text>
          </Box>
        </Box>

        <Box bg="white.100" w="95" h="87.5">
          <Box w="16" h="6.5">
            <Text fontWeight="600" fontSize="4" color="pink.500" lineHeight="6">
              Novos Treinadores
            </Text>
          </Box>
          <Box w="31.25" h="19.5">
            <Text fontWeight="500" fontSize="13" lineHeight="19.5">
              85
            </Text>
          </Box>
        </Box>
      </SimpleGrid>
    </Flex>
  )
}

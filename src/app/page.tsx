import { VStack, Box, Text, Code, Flex } from "@chakra-ui/react"
import Image from "next/image"

export default function Home() {
  return (
    <VStack width="full" height="100vh">
      <Flex flex={1} flexDir="column" alignItems="center" justifyContent="center" gap="2rem">
        <Box>
          <Text>
            Get started by editing&nbsp;
            <Code>src/app/page.tsx</Code>
          </Text>
          <Box>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} priority />
            </a>
          </Box>
        </Box>

        <Box>
          <Image src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
        </Box>
      </Flex>
    </VStack>
  )
}

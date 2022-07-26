import { Container, Box, Heading, Image } from '@chakra-ui/react'
const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a web developer based in Brazi!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Gabriel e Silva Pereira
          </Heading>
          <p>Architect, Goldsmith and Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center">
          <Image borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWitdh="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/perfile.png"
            alt="profile img"
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Page
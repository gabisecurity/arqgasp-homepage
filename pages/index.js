import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue, Link, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.200', 'white.Alpha.200')} p={3} mb={6} align="center">
          Hello, I&apos;m a web developer based in Brazi!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Gabriel e Silva Pereira
            </Heading>
            <p>Father, Architect, Goldsmith and Developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center">
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

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, Escrevo para minha bebê no {''}
            <NextLink href="/works/inkdrop">
              <Link>Cartas para Rosa</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronDownIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <BioSection>
            <BioYear>1984</BioYear>
          </BioSection>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
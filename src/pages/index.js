import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  Box, Button,
  Flex,
  Grid,
  Heading,
  Link, Show,
  Spacer,
  UnorderedList, useColorModeValue
} from '@chakra-ui/react'

const PageHeading = () => {
  const bgColor=  useColorModeValue('white', '#0c0c0c')

  return (
    <Box position={'sticky'} top={'0'} bgColor={bgColor} paddingTop={'30px'} paddingBottom={'30px'} zIndex={'100'}>
    <Box
      // position={'absolute'} top={'0'}
      width={'100%'}
    >
      <header
        style={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `space-between`,
        }}
      >
        <Flex
          fontSize={{base: '54px', '2xl': '64px'}}
          width={'100%'}
        >
          <Box
            fontWeight={'bold'}
          >
            repair.together
          </Box>
          <Spacer />
          <Flex flexWrap={'wrap'} paddingLeft={'20px'}>
            <Box paddingRight={'30px'}>
              <Link href={'https://pay.fondy.eu/merchants/47cc944cb10cd2872ee4b444ddf6517b39759ba8/default/index.html?button=f3f9c938be5627925f49191fe4627f9b06234ba8'} target={"_blank"}>
                Donate
              </Link>
            </Box>
            <Box>
              <Link href={'#'}>
                Join camp
              </Link>
            </Box>
          </Flex>
        </Flex>
      </header>
    </Box>
    </Box>
  )
}

const Navigation = () => (
  <Flex
    fontSize={{base: '54px', '2xl': '64px'}}
  >
    <Box paddingRight={'60px'}>
      <Link href={'#main'}>
        All info
      </Link>
    </Box>
    <Box paddingRight={'60px'}>
      <Link href={'#dates'}>
        Dates
      </Link>
    </Box>
    <Box paddingRight={'60px'}>
      <Link href={'#goals'}>
        Goals
      </Link>
    </Box>
    <Box>
      <Link href={'#activities'}>
        Activities
      </Link>
    </Box>
  </Flex>
)

const IndexPage = () => (
  <Layout>

      <PageHeading />

    <Box
      paddingTop={'90px'}
      fontSize={{base: '48px', '2xl': '64px'}}
    >

      <Heading as='h1' fontSize={{base: '120px', '2xl': '140px'}}>
        Building Toloka Camp
      </Heading>
      <Navigation />


      <Box paddingTop={'120px'}>
        <StaticImage
          src={'../images/cover.jpg'}
          alt={'Two people working in building on a repair together event'}
        />
      </Box>

      <Box paddingTop={'60px'} paddingBottom={'150px'}>
        Summer Cultural Camp for Housing Reconstruction for the Residents of Ivanivska Community, Chernihiv Oblast, Affected by the Russian War and Occupation.

        The Russia’s war has caused immense suffering and destruction to Ukrainians, and for the recovery and further development of Ukraine, solidarity and unity of society are necessary. This can only be achieved
      </Box>
      <Box as={'section'} id={'dates'} paddingBottom={'150px'}>
        <Box paddingBottom={'60px'}>
        <a href={'#dates'}>
          <Heading as={'h2'} fontSize={{base: '120px', '2xl': '140px'}}>
            Dates
          </Heading>
        </a>
        </Box>
        <Box fontSize={{base: '48px', '2xl': '140px'}} textAlign={'right'} fontWeight={'bold'}>
          10.07.2023 - 10.10.2023
        </Box>
      </Box>
      <Box as={'section'} id={'goals'} paddingBottom={'150px'}>
        <Box paddingBottom={'60px'}>
        <a href={'#goals'}>
          <Heading as={'h2'} fontSize={{base: '120px', '2xl': '140px'}}>
            Goals
          </Heading>
        </a>
        </Box>
      <Box fontSize={{base: '48px', '2xl': '64px'}}>
        <Grid as={'ol'}
              gap={'30px'}
              templateRows={['repeat(2, 1fr)', 'repeat(1, 1fr)']}
              templateColumns={['repeat(2, 1fr)', 'repeat(1, 1fr)']}
              autoFlow={['column', 'row']}
        >
          <Box as={'li'}>
            <Box as={'p'} paddingLeft={'72px'}>
              Engage at least 960 volunteers in the construction process. Minimum of 70 volunteers at any given moment.
            </Box>
          </Box>
          <Box as={'li'}>
            <Box as={'p'} paddingLeft={'72px'}>
            Conduct at least 36 unifying cultural events to strengthen connections and build a civil society.
            </Box>
          </Box>
          <Box as={'li'}>
            <Box as={'p'} paddingLeft={'72px'}>
            Construct a minimum of 20 houses for the most affected families and reconstruct a local Cultural Center.
            </Box>
          </Box>
          <Box as={'li'}>
            <Box as={'p'} paddingLeft={'72px'}>
            Reuse as many materials as possible in construction from the cleanup of destroyed houses.
            </Box>
          </Box>
        </Grid>
      </Box>
      </Box>
      <Box as={'section'} id={'activities'} paddingBottom={'150px'}>
        <Flex flexWrap={'wrap'}>
          <Box marginRight={'60px'} flexBasis={'50%'} flexGrow={'1'}>
            <Box paddingBottom={'60px'}>
            <a href={'#activities'}>
              <Heading as={'h2'} fontSize={{base: '120px', '2xl': '140px'}}>
                Activities
              </Heading>
            </a>
            </Box>

            <UnorderedList stylePosition={'outside'} styleType={'circle'} spacing={'60px'}>
              <li>
                Daily training in construction practices and hands-on experience in building.
              </li>
              <li>
                Cultural workshops for camp participants and local residents (electronic music, painting, pottery, etc.) - twice a week.
              </li>
              <li>
                Weekly concerts of contemporary electronic music, bringing together camp participants and cleanup volunteers - every weekend.
              </li>
              <li>
                Joint movie screenings - once a week.
              </li>
              <li>
                Shared excursions every two weeks.
              </li>
            </UnorderedList>
          </Box>
          <Box flexBasis={'45%'} flexGrow={'1'}>
            <Show above={'xl'}>
            <StaticImage
              src={'../images/activities.jpg'}
              alt={'A person working in building on a repair together event'}
            />
            </Show>

            <Box paddingTop={'160px'}>
              <Button as={Link} colorScheme={'white'} style={{textDecoration: 'none'}} width={'100%'} href={'%'}>
                join our camp
              </Button>
              <Box paddingTop={'90px'}>
                <Button as={Link} colorScheme={'white'} style={{textDecoration: 'none'}} width={'100%'} href={'https://pay.fondy.eu/merchants/47cc944cb10cd2872ee4b444ddf6517b39759ba8/default/index.html?button=f3f9c938be5627925f49191fe4627f9b06234ba8'} target={'_blank'}>
                  donate
                </Button>
              </Box>
              <Box paddingTop={'90px'}>
                <Button as={Link} colorScheme={'white'} style={{textDecoration: 'none'}} width={'100%'} href={'%'}>
                  follow us
                </Button>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Building Toloka Camp" />

export default IndexPage

import "react-image-gallery/styles/css/image-gallery.css"
import * as React from "react"
import {useState} from "react"
import {StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {
    Box, Button, Center,
    Flex,
    Grid,
    Heading,
    Link, Show,
    Spacer,
    UnorderedList, useColorModeValue
} from '@chakra-ui/react'
import {LocalizedProvider} from 'react-localized'
import {useLocales} from 'react-localized'
import uk from '../locales/uk'
import ImageGallery from 'react-image-gallery'

import {ChevronDownIcon} from '@chakra-ui/icons'

const locales = {uk}


const images = [
    {
        original: '/photos/4O1A1710.png',
        originalAlt: '' // TODO
    }, {
        original: '/photos/MG-3151.png'
    },
    {original: '/photos/MG-4061-1.png'},
    {original: '/photos/MG-5019.png'},
    {original: '/photos/MG-8585 1.png'},
    {original: '/photos/MG-8924-Enhanced-NR.png'},
    {original: '/photos/toloka -150.png'},
];

const PageHeading = () => {
    const bgColor = useColorModeValue('white', '#0c0c0c')

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
                        fontSize={{base: '18px', md: '23px', lg: '54px', '2xl': '64px'}}
                        width={'100%'}
                    >
                        <Box
                            fontWeight={'600'}
                        >
                            repair.together
                        </Box>
                        <Spacer/>
                        <Flex flexWrap={'wrap'} justifyContent='flex-end'
                              fontSize={{base: '18px', lg: '54px', '2xl': '64px'}}>
                            <Box>
                                <Button
                                    as={Link}
                                    href={'https://pay.fondy.eu/merchants/47cc944cb10cd2872ee4b444ddf6517b39759ba8/default/index.html?button=f3f9c938be5627925f49191fe4627f9b06234ba8'}
                                    target={"_blank"}
                                    colorScheme={'white'}
                                    height={['20px', null, '40px', '80px']}
                                    fontSize={{base: '18px', lg: '54px', '2xl': '64px'}}
                                    borderRadius={['2px', '4px']}
                                    textTransform='none'
                                    _hover={{
                                        textDecoration: 'none'
                                    }}
                                >
                                    Donate
                                </Button>
                            </Box>
                            <Box paddingLeft={['8px', null, '30px']} textAlign='right'>
                                <Button as={Link} href={'http://t.me/repair_together_bot'} target={"_blank"}
                                        colorScheme={'white'} size='sm'
                                        colorScheme={'white'}
                                        height={['20px', null, '40px', '80px']}
                                        fontSize={{base: '18px', lg: '54px', '2xl': '64px'}}
                                        borderRadius={['2px', '4px']}
                                        textTransform='none'
                                        _hover={{
                                            textDecoration: 'none'
                                        }}
                                >
                                    Join us
                                </Button>
                            </Box>
                        </Flex>
                    </Flex>
                </header>
            </Box>
        </Box>
    )
}

const Navigation = () => {
    const {gettext} = useLocales()


    return (
        <Flex
            fontSize={{base: '23px', lg: '54px', '2xl': '64px'}}
        >
            <Box>
                <Box flexShrink='0' whiteSpace='nowrap'>
                    <Link href={'#long-description'}
                          _hover={{textShadow: "0px 0px 1px white", textDecoration: 'underline'}}>
                        {gettext('All info')}
                    </Link>
                </Box>
            </Box>
            <Box
                minWidth='12px'
                flexBasis='60px'
                flexShrink='1'
            />
            <Box>
                <Link href={'#dates'} _hover={{textShadow: "0px 0px 1px white", textDecoration: 'underline'}}>
                    Dates
                </Link>
            </Box>
            <Box
                minWidth='12px'
                flexBasis='60px'
                flexShrink='1'
            />
            <Box>
                <Link href={'#goals'} _hover={{textShadow: "0px 0px 1px white", textDecoration: 'underline'}}>
                    Goals
                </Link>
            </Box>
            <Box
                minWidth='12px'
                flexBasis='60px'
                flexShrink='1'
            />
            <Box>
                <Link href={'#activities'} _hover={{textShadow: "0px 0px 1px white", textDecoration: 'underline'}}>
                    Activities
                </Link>
            </Box>
        </Flex>)
}

const CollapsedState = ({onClick}) => (
    <>
        <Box as={'p'} opacity={'0.24'}>
            The Russia’s war has caused immense suffering and destruction to Ukrainians, and for the recovery and
            further
            development of Ukraine, solidarity and
        </Box>
        <Box textAlign={'right'} paddingRight={'40px'} marginTop={'-40px'}>
            <Button variant={'link'} leftIcon={<ChevronDownIcon/>} fontSize={['23px', null, null, '54px']} onClick={onClick}>
                Read all info
            </Button>
        </Box>
    </>
)

const ExpandedState = () => (
    <>
        <p>
            The Russia’s war has caused immense suffering and destruction to Ukrainians, and for the recovery and
            further development of Ukraine, solidarity and unity of society are necessary. This can only be achieved
            through the involvement of all segments of the population and assistance from developed countries. As
            the experience of many countries shows, the best way to achieve this is through collective work centered
            around an active cultural program.
        </p>

        <p>
            We organize a permanent camp for the construction of 15 houses and reconstruction of a cultural center
            in the villages of Ivanivska Community, Chernihiv Oblast. The construction will be carried out by
            volunteers under the supervision and guidance of professional builders.
        </p>

    </>
)

const SwitchState = () => {
    const [collapsed, setCollapsed] = useState(true)

    if (collapsed) {
        return <CollapsedState onClick={() => {
            setCollapsed(false)
        }} />
    }

    return <ExpandedState />
}

const Description = () => {
    return (
        <>

            <p>
                Summer Cultural Camp for Housing Reconstruction for the Residents of Ivanivska Community, Chernihiv
                Oblast, Affected by the Russian War and Occupation.
            </p>
            <SwitchState />

        </>
    )
}

const PageWithLocale = () => {
    const {gettext} = useLocales()

    return (
        <Layout>

            <PageHeading/>

            <Box
                paddingTop={{base: '32px', lg: '60px'}}
                fontSize={{base: '23px', lg: '48px', '2xl': '64px'}}
            >

                <Heading as='h1' fontSize={{base: '48px', lg: '120px', '2xl': '140px'}}>
                    {gettext('Building Toloka Camp')}
                </Heading>
                <Navigation/>


                <Center>
                    <Box paddingTop={['32px', null, null, '120px']} maxWidth={'1780px'}>
                        <ImageGallery
                            items={images}
                            showNav={true}
                            showPlayButton={false}
                            showBullets
                            showFullscreenButton={false}
                        />
                    </Box>
                </Center>

                <Box
                    paddingTop={['30px', null, null, '60px']}
                    paddingBottom={['30px', null, null, '150px']}
                    id={'long-description'}>
                    <Description/>
                </Box>
                <Box as={'section'} id={'dates'} paddingBottom={['30px', null, null, '150px']}>
                    <Box paddingBottom={['24px', null, null, '60px']}>
                        <a href={'#dates'}>
                            <Heading as={'h2'} fontSize={{base: '48px', lg: '120px', '2xl': '140px'}}>
                                Dates
                            </Heading>
                        </a>
                    </Box>
                    <Box fontSize={{base: '23px', lg: '48px', '2xl': '140px'}} textAlign={'right'} fontWeight={'bold'}>
                        10.07.2023 - 10.10.2023
                    </Box>
                </Box>
                <Box as={'section'} id={'goals'} paddingBottom={['30px', null, null, '150px']}>
                    <Box paddingBottom={['24px', null, null, '60px']}>
                        <a href={'#goals'}>
                            <Heading as={'h2'} fontSize={{base: '48px', lg: '120px', '2xl': '140px'}}>
                                Goals
                            </Heading>
                        </a>
                    </Box>
                    <Box>
                        <Grid as={'ol'}
                              gap={'30px'}
                              marginLeft={'0'}
                              templateRows={['repeat(1, 1fr)', null, null, 'repeat(2, 1fr)']}
                              templateColumns={['repeat(1, 1fr)', null, null, 'repeat(2, 1fr)']}
                              autoFlow={['row', null, null, 'column']}
                        >
                            <Box as={'li'}>
                                <Box as={'p'} paddingLeft={['32px', null, null, '72px']}>
                                    Engage at least 800 volunteers in the construction process. Minimum of 36 volunteers
                                    at any given moment.
                                </Box>
                            </Box>
                            <Box as={'li'}>
                                <Box as={'p'} paddingLeft={['32px', null, null, '72px']}>
                                    Conduct at least 36 unifying cultural events to strengthen connections and build a
                                    civil society.
                                </Box>
                            </Box>
                            <Box as={'li'}>
                                <Box as={'p'} paddingLeft={['32px', null, null, '72px']}>
                                    Construct a minimum of 9 houses (up to 20) for the most affected families and
                                    reconstruct a
                                    local Cultural Center.
                                </Box>
                            </Box>
                            <Box as={'li'}>
                                <Box as={'p'} paddingLeft={['32px', null, null, '72px']}>
                                    Reuse as many materials as possible in construction from the cleanup of destroyed
                                    houses.
                                </Box>
                            </Box>
                        </Grid>
                    </Box>
                </Box>
                <Box as={'section'} id={'activities'} paddingBottom={['30px', null, null, '150px']}>
                    <Flex flexWrap={'wrap'}>
                        <Box marginRight={'60px'} flexBasis={'50%'} flexGrow={'1'}>
                            <Box paddingBottom={['24px', null, null, '60px']}>
                                <a href={'#activities'}>
                                    <Heading as={'h2'} fontSize={{base: '48px', lg: '120px', '2xl': '140px'}}>
                                        Activities
                                    </Heading>
                                </a>
                            </Box>

                            <UnorderedList stylePosition={'outside'} styleType={'circle'}
                                           spacing={['30px', null, null, '60px']}>
                                <li>
                                    Daily training in construction practices and hands-on experience in building.
                                </li>
                                <li>
                                    Cultural workshops for camp participants and local residents (electronic music,
                                    painting, pottery, etc.) - twice a week.
                                </li>
                                <li>
                                    Weekly concerts of contemporary electronic music, bringing together camp
                                    participants and cleanup volunteers - every weekend.
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

                            <Box paddingTop={['68px', null, null, '160px']}>
                                <Button as={Link} colorScheme={'white'} style={{textDecoration: 'none'}} width={'100%'}
                                        href={'http://t.me/repair_together_bot'} size={['sm', null, null, 'lg']}>
                                    join our camp
                                </Button>
                                <Box paddingTop={['30px', null, null, '90px']}>
                                    <Button as={Link} colorScheme={'white'} style={{textDecoration: 'none'}}
                                            width={'100%'}
                                            href={'https://pay.fondy.eu/merchants/47cc944cb10cd2872ee4b444ddf6517b39759ba8/default/index.html?button=f3f9c938be5627925f49191fe4627f9b06234ba8'}
                                            target={'_blank'} size={['sm', null, null, 'lg']}>
                                        donate
                                    </Button>
                                </Box>
                                <Box paddingTop={['30px', null, null, '90px']}>
                                    <Button as={Link} colorScheme={'white'} style={{textDecoration: 'none'}}
                                            width={'100%'} href={'https://www.instagram.com/repair.together/'}
                                            target={"_blank"} size={['sm', null, null, 'lg']}>
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
}

const IndexPage = () => {
    return (
        <LocalizedProvider
            locales={locales}
            selected="en"
        >
            {
                () => (
                    <PageWithLocale/>
                )
            }
        </LocalizedProvider>
    )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Building Toloka Camp"/>

export default IndexPage

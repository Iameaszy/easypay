import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import MainDashboard from '../layouts/dashboard/main/MainDashboard';

const GetMore = () => {
    return (
        <>
        <MainDashboard>
        <Box as="section" position='relative' mt='20%'>
        <Box bgColor='hsl(187,52%,97%)' position='absolute' z-index='-10' left='-20vw' h='32vw' w='99.3vw' mt='-5%'></Box>
        <Flex position='relative' z-index='10' marginTop='10%' flexDirection='row' justifyContent='space-between'>
        <Box width='25%' marginTop='-5%'>
            <Text color='#8a95ad' padding='7% 0 2% 0' fontSize='50%' letterSpacing='0.4em' lineHeight='2em' fontWeight='bold'>GET MORE FROM OUR <br />PATNERS</Text>
            <Heading color='#152c5b' margin='6% 0 15% 0' lineHeight='1.3em'>We're there during rainy days.</Heading>
            <Text backgroundColor='#185cff' color='white' padding='4% 7% 4% 7%' borderRadius={5} fontWeight='bold' as='a' href=''>Start now</Text>
        </Box>
        <Box width='25%'>
            <Image src='DollarSign.svg' alt="$" width='20%' height='20%' margin='0 0 0 -5%'/><Heading color='#152c5b' fontSize='100%' margin='6% 0 4% -3%' position='relative' top='-22%' left='25%'>Salary Advance</Heading>
            <Image margin='-5% 0 0 -5%' src='SkeletonCheck.svg' width='8%' height='8%' color='mediumseagreen' /><Text color='#8a95ad' fontSize='70%' position='relative' top='-8%' left='8%'>Low interest salary advance</Text>
            <Image margin='5% 0 0 -5%' src='SkeletonCheck.svg' width='8%' height='8%' color='mediumseagreen' /><Text color='#8a95ad' fontSize='70%' position='relative' top='-13%' left='8%'>We provide your pay evidence to lending platforms</Text>
        </Box>
        <Box width='25%'>
            <Image src='Folder.svg' alt="book" width='20%' height='20%' margin='0 0 0 -5%'/><Heading color='#152c5b' fontSize='100%' margin='6% 0 4% -3%' position='relative' top='-22%' left='25%'>BNPL</Heading>
            <Box margin='-5% 0 0 -5%' as='img' src='SkeletonCheck.svg' width='8%' height='8%' color='mediumseagreen' /><Box color='#8a95ad' fontSize='70%' position='relative' top='-8%' left='8%'>Get your home-office equipments</Box>
            <Box margin='5% 0 0 -5%' as='img' src='SkeletonCheck.svg' width='8%' height='8%' color='mediumseagreen' /><Box color='#8a95ad' fontSize='70%' position='relative' top='-13%' left='8%'>Alternative pewer source to boost your productivity</Box>
        </Box>
        </Flex>
        </Box>
        </MainDashboard>
        <MainDashboard>
        <Box as="section" position='relative' m='10% 0 10% 0'>
        <Box bgColor='hsl(187,52%,97%)' position='absolute' z-index='-10' left='1.8vw' h='22vw' w='18vw' mt='32%' borderRadius='5px'></Box>
        <Flex position='relative' marginTop='25%' flexDirection='row' justifyContent='space-evenly'>
        <Box width='30%'>
            <Image src='Satisfied.jpg' alt="Convinient Rates" borderRadius='2%' />
        </Box>
        <Box width='45%' >
            <Text color='#8a95ad' padding='7% 0 2% 0' fontSize='50%' letterSpacing='0.4em' fontWeight='bold' margin='5% 0 4% 0'>OUR USERS ARE HAPPY WITH US !</Text>
            <Image src='FiveStars.svg' alt="5 stars"/>
            <Tabs variant='unstyled'>
                <TabPanels lineHeight='1.6em' fontSize='100%' color='#8a95ad' margin='0% 0 7% -3%'>
                    <TabPanel>
                        <Heading color='#152c5b' lineHeight='1.3em' m='-0.5% 0 2% -2%'>Converting at transparent rates!</Heading>
                        <Text as='q' fontStyle='italic' fontSize='70%' fontWeight='bold' margin='0% 0 7% -3%'>The fact I can get salary in USD and also sell at a good exchange rate on the same platform  and still have a USD salary account makes Geegpay the best. Salary advance also makes my life easier. Thanks Geegpay❤️</Text>
                        <Image src='GreenUser.svg' alt='User' w='10%' h='10%' position='absolute' m='5% 0 0 -3%'/>
                        <Heading position='relative' m='13% 0 0 15%'  fontSize='80%' >Wale</Heading>
                        <Text fontSize='60%' position='relative' m='0% 0 0 15%' left=''>Product Designer</Text>
                    </TabPanel>
                    <TabPanel>
                        <Heading color='#152c5b' lineHeight='1.3em' m='-0.5% 0 2% -2%'>Invoice automation is seamless!</Heading>
                        <Text as='q' fontStyle='italic' fontSize='70%' fontWeight='bold'>I recently started using Geegpay and the experience has been wow as I don't have to keep track of when to send invoice to my employer .</Text>
                        <Image src='GreenUser.svg' alt='User' w='10%' h='10%' position='absolute' m='5% 0 0 -3%'/>
                        <Heading position='relative' m='13% 0 0 15%'  fontSize='80%' >Sola A</Heading>
                        <Text fontSize='60%' position='relative' m='0% 0 0 15%' left=''>Sotfware Engineer</Text>
                    </TabPanel>
                </TabPanels>
                <TabList>
                    <Tab><ArrowLeftIcon position='relative' top='-150%' left='100%' color='#152c5b' _hover={{color: 'blue'}} w='40%' h='40%'/></Tab>
                    <Tab><ArrowRightIcon position='relative' top='-150%' left='25%' color='#152c5b' _hover={{color: 'blue'}} w='40%' h='40%'/></Tab>
                </TabList>
            </Tabs>
        </Box>
        </Flex>
        </Box>
        </MainDashboard>

        </>
    )
}

export default GetMore;
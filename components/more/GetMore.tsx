import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import MainDashboard from '../layouts/dashboard/main/MainDashboard';

const GetMore = () => {
    return (
        <>
        <MainDashboard>
        <Box as="section" position='relative' mt='20%'>
        <Box bgColor='hsl(187,52%,98%)' position='absolute' z-index='-10' left='-20vw' h='32vw' w='99.3vw' mt='-5%'></Box>
        <Flex position='relative' z-index='10' marginTop='10%' flexDirection='row' justifyContent='space-between'>
        <Box width='25%' marginTop='-5%'>
            <Text color='#8a95ad' padding='7% 0 2% 0' fontSize='70%' letterSpacing='0.4em' lineHeight='2em' fontWeight='bold'>GET MORE FROM OUR <br />PATNERS</Text>
            <Heading color='#152c5b' margin='6% 0 15% 0' lineHeight='1.3em'>We&apos;re there during rainy days.</Heading>
            <Button size='lg' variant='solid'>Start now</Button>
        </Box>
        <Box width='25%'>
            <Image src='DollarSign.svg' alt="$" width='20%' height='20%' margin='0 0 0 -5%'/><Heading color='#152c5b' fontSize='120%' margin='6% 0 4% -3%' position='relative' top='-22%' left='25%'>Salary Advance</Heading>
            <Image margin='-5% 0 0 -5%' alt="Green checkmark" src='SkeletonCheck.svg' width='8%' height='8%' color='mediumseagreen' /><Text color='#8a95ad' fontSize='90%' position='relative' top='-8%' left='8%'>Low interest salary advance</Text>
            <Image margin='5% 0 0 -5%' alt="Green checkmark" src='SkeletonCheck.svg' width='8%' height='8%' color='mediumseagreen' /><Text color='#8a95ad' fontSize='90%' position='relative' top='-13%' left='8%'>We provide your pay evidence to lending platforms</Text>
        </Box>
        <Box width='25%'>
            <Image src='Folder.svg' alt="book" width='20%' height='20%' margin='0 0 0 -5%'/><Heading color='#152c5b' fontSize='120%' margin='6% 0 4% -3%' position='relative' top='-22%' left='25%'>BNPL</Heading>
            <Box margin='-5% 0 0 -5%' as='img' src='SkeletonCheck.svg' width='8%' height='8%' color='mediumseagreen' /><Box color='#8a95ad' fontSize='90%' position='relative' top='-8%' left='8%'>Get your home-office equipments</Box>
            <Box margin='5% 0 0 -5%' as='img' src='SkeletonCheck.svg' width='8%' height='8%' color='mediumseagreen' /><Box color='#8a95ad' fontSize='90%' position='relative' top='-13%' left='8%'>Alternative pewer source to boost your productivity</Box>
        </Box>
        </Flex>
        </Box>
        </MainDashboard>
        <MainDashboard>
        <Box as="section" position='relative' m='10vw 0 0 0'>
        <Box bgColor='hsl(187,52%,98%)' position='absolute' z-index='-10' left='1.8vw' h='24vw' w='18vw' m='10vw 0 0 -1vw' borderRadius='5px'></Box>
            <Text color='#8a95ad' padding='7% 0 2% 0' fontSize='70%' letterSpacing='0.4em' fontWeight='bold' margin='5vw 0 2vw 30vw'>OUR USERS ARE HAPPY WITH US !</Text>
            <Image src='FiveStars.svg' alt="5 stars" m='-1vw 0 -0.2vw 30vw'/>
            <Tabs variant='unstyled'>
                <TabPanels lineHeight='1.6em' color='#8a95ad' margin='0% 0 7% -3%'>
                    <TabPanel>
                        <Flex position='relative' m='0vw 0 0 0' flexDirection='row' justifyContent='space-evenly'>
                            <Box width='40%'>
                                <Image src='Satisfied.jpg' alt="Convinient Rates" borderRadius='2%' m='-8vw 0 -0.2vw 5vw'/>
                            </Box>
                            <Box w='58%' m='0 0 0 12vw'>
                                <Heading color='#152c5b' lineHeight='1.3em' m='-0.5vw 0 1vw 0vw'>Converting at transparent rates!</Heading>
                                <Text as='q' fontStyle='italic' fontSize='90%' fontWeight='bold'>The fact I can get salary in USD and also sell at a good exchange rate on the same platform  and still have a USD salary account makes Geegpay the best. Salary advance also makes my life easier. Thanks Geegpay &#10084;</Text>
                                <Image src='GreenUser.svg' alt='User' w='15%' h='15%' position='absolute' m='3vw 0 0 -3vw'/>
                                <Heading color='#152c5b' position='relative' m='13% 0 0 17%'  fontSize='80%' >Wale</Heading>
                                <Text fontSize='80%' position='relative' m='0% 0 0 17%' left=''>Product Designer</Text>
                            </Box>
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex position='relative' m='0vw 0 0 0' flexDirection='row' justifyContent='space-evenly'>
                            <Box width='40%'>
                                <Image src='Satisfied.jpg' alt="Convinient Rates" borderRadius='2%' m='-8vw 0 -0.2vw 5vw'/>
                            </Box>
                            <Box width='58%' m='0 0 0 12vw'>
                                <Heading color='#152c5b' lineHeight='1.3em' m='-0.5vw 0 1vw 0vw'>Invoice automation is seamless!</Heading>
                                <Text as='q' fontStyle='italic' fontSize='90%' fontWeight='bold'>I recently started using Geegpay and the experience has been wow as I don&apos;t have to keep track of when to send invoice to my employer .</Text>
                                <Image src='GreenUser.svg' alt='User' w='17%' h='17%' position='absolute' m='3vw 0 0 -3vw'/>
                                <Heading color='#152c5b' position='relative' m='13% 0 0 17%'  fontSize='80%'>Sola A</Heading>
                                <Text fontSize='80%' position='relative' m='0% 0 0 17%' left=''>Sotfware Engineer</Text>
                            </Box>
                        </Flex>
                    </TabPanel>
                </TabPanels>
                <TabList>
                    <Tab><ArrowLeftIcon position='relative' top='-190%' left='170%' color='#152c5b' _hover={{color: 'blue'}} w='25%' h='25%'/></Tab>
                    <Tab><ArrowRightIcon position='relative' top='-190%' left='80%' color='#152c5b' _hover={{color: 'blue'}} w='25%' h='25%'/></Tab>
                </TabList>
            </Tabs>
  
        </Box>
        </MainDashboard>

        </>
    )
}

export default GetMore;
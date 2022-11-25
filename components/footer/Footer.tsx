import { Box, Button, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react';
import MainDashboard from '../layouts/dashboard/main/MainDashboard';

const Footer = () => {
    return (
    <>
    <Box as="section" position='relative' mt='0%'>
        <Box bgColor='#152c5b' position='absolute' z-index='-10' left='-20vw' h='40vw' w='119vw' mt='-5%'></Box>
        <MainDashboard>
            <Flex position='relative' z-index='10' flexDirection='row' justifyContent='space-between' margin='5% 0 0 0'>
                <Box width='50%'>
                    <Heading color='white' lineHeight='1.3em'>Meet Geegpay, the platform for smart and ambitious people.</Heading>
                </Box>
                <Box width='20%' margin='4% 0 0 0'>
                    <Button variant="solid">Open an account</Button>
                </Box>
            </Flex>
        </MainDashboard>
        <MainDashboard>
        <Divider orientation='horizontal' margin='5% 0 5% 0'/>
        </MainDashboard>
        <MainDashboard>
            <Flex position='relative' z-index='10' flexDirection='row' justifyContent='space-between'>
                <Box width='32%' m='0 -5% 0 0'>
                    <button><Image src='WhiteGeegpayLogo.png' alt="White Geegpay logo" bg='#152c5b' width='55%' height='25%' margin='0 0 13% 0'/></button>
                    <Text color='#8a95ad' fontSize='70%'>Made for smart productive people</Text>
                    <Text color='#8a95ad' fontSize='70%'>support@geegpay.africa</Text>
                </Box>
                <Box color='white' width='13%' margin='-1% -35% 0 0'>
                    <Text fontSize='70%' letterSpacing='0.1em' fontWeight='bold' margin='5% 0 10% 0'>PAGES</Text>
                    <Text as='a' href='' _hover={{color: 'gainsboro' }} fontWeight='bold' fontSize='70%' margin='5% 0 20% 0'>About us</Text><br />
                    <Text as='a' href='' _hover={{color: 'gainsboro' }} fontWeight='bold' fontSize='70%' margin='5% 0 20% 0'>Contact us</Text><br />
                    <Text as='a' href='' _hover={{color: 'gainsboro' }} fontWeight='bold'  fontSize='70%' margin='5% 0 20% 0'>Business</Text><br />
                </Box>
                <Box color='white' width='13%' margin='-1% -35% 0 0'>
                    <Text fontSize='70%' letterSpacing='0.1em' fontWeight='bold' margin='5% 0 10% 0'>ACCOUNT</Text>
                    <Text as='a' href='' _hover={{color: 'gainsboro' }} fontWeight='bold' fontSize='70%' margin='5% 0 20% 0'>Log in</Text><br />
                    <Text as='a' href='' _hover={{color: 'gainsboro' }} fontWeight='bold' fontSize='70%' margin='5% 0 20% 0'>Sign up</Text><br />
                </Box>
                <Box color='white' width='18%' margin='-1% -35% 0 0'>
                    <Text fontSize='70%' letterSpacing='0.1em' fontWeight='bold' margin='5% 0 10% 0'>COMPANY</Text>
                    <Text as='a' href='' _hover={{color: 'gainsboro' }} fontWeight='bold' fontSize='70%' margin='5% 0 15% 0'>Terms of service</Text><br />
                    <Text as='a' href='' _hover={{color: 'gainsboro' }} fontWeight='bold' fontSize='70%' margin='5% 0 20% 0'>Privacy Policy</Text><br />
                </Box>
            </Flex>
        </MainDashboard>
        <MainDashboard>
            <Flex position='relative' z-index='10' flexDirection='row' justifyContent='space-between' margin='10% 0 3% 0'>
                <Box>
                    <Text color='#8a95ad' fontSize='70%'>&copy; All rights reserved. Geegpay</Text>
                </Box>
                <Box width='13%' >
                    <button><Image src='TwitterLogo.svg' alt="twitter logo" m='0 0 0 3000%'/></button>
                </Box>
                <Box width='13%'>
                    <button><Image src='FacebookLogo.svg' alt="facebook logo" m='0 0 0 6100%'/></button>
                </Box>
                <Box width='13%'>
                <button><Image src='InstagramLogo.svg' alt="instagram logo" m='0 0 0 3500%'/></button>
                </Box>
            </Flex>
        </MainDashboard>
    </Box>
</>)
}

export default Footer;
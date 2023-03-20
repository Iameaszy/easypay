import { CheckCircleIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { introScroll } from '../../../../global/motionStyle';

const Hero = () => {
  return (
    <Box mt="50px" position="relative">
      <Box
        bgColor="#F5FAFF"
        position="absolute"
        z-index="-10"
        right="-8rem"
        h="32rem"
        w="51rem"
        display={{ lg: 'block', base: 'none' }}
        top="-30px"
      ></Box>
      <Flex
        position="relative"
        z-index="10"
        flexDirection={{ lg: 'row', base: 'column' }}
        gap={{ lg: '2rem', base: '3.3rem' }}
        w="full"
      >
        <Box>
          <Box
            bg="#fff"
            borderRadius="20px"
            display="flex"
            variants={introScroll}
            as={motion.div}
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            gap="10px"
            alignItems="center"
            color="#185cff"
            w="19rem"
            boxShadow="3px 2px 4px 2px #d9d9d9"
            padding="13px 26px 13px 18px"
            marginBottom="35px"
          >
            <CheckCircleIcon />
            <Text fontSize="15px" fontWeight={500}>
              Get paid in minutes
            </Text>
          </Box>
          <Box
            w={{ lg: '536px', base: '350px' }}
            marginLeft={{ base: '-10px' }}
          >
            <Text
              fontSize={{ lg: '54px', base: '40px' }}
              color="#152c5b"
              fontWeight={700}
              lineHeight={{ lg: '60px', base: '43px' }}
              variants={introScroll}
              as={motion.p}
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
            >
              Digital Financial Platform for the Gig Econonomy.
            </Text>
          </Box>
          <Box
            paddingTop="20px"
            marginLeft={{ lg: '15px', base: '5px' }}
            fontSize="18px"
            fontWeight="500"
          >
            <UnorderedList color="#152c5b">
              <ListItem
                marginBottom="13px"
                variants={introScroll}
                as={motion.li}
                initial="hide"
                whileInView="show"
                viewport={{ once: true }}
              >
                Create a USD, GBP, EUR accounts to receive payments for your
                gigs.
              </ListItem>
              <ListItem
                marginBottom="13px"
                variants={introScroll}
                as={motion.li}
                initial="hide"
                whileInView="show"
                viewport={{ once: true }}
              >
                Automate employer billing.
              </ListItem>
              <ListItem
                marginBottom="13px"
                variants={introScroll}
                as={motion.li}
                initial="hide"
                whileInView="show"
                viewport={{ once: true }}
              >
                Debit cards for easy spending.
              </ListItem>
              <ListItem
                marginBottom="35px"
                variants={introScroll}
                as={motion.li}
                initial="hide"
                whileInView="show"
                viewport={{ once: true }}
              >
                Build your credit score.
              </ListItem>
            </UnorderedList>
          </Box>

          <Button
            size="lg"
            variant="solid"
            fontSize="18px"
            fontWeight="500"
            variants={introScroll}
            as={motion.button}
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
          >
            Open an account
          </Button>
        </Box>
        <Box
          variants={introScroll}
          as={motion.div}
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Image
            src="Freelancer Raenest-p-800.jpeg"
            alt="Freelancer"
            borderRadius="10px"
            h={{ lg: '31rem', base: '20rem' }}
            objectFit="contain"
            w="33rem"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;

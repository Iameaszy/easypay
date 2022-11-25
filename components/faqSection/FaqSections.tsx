import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';

const FaqSections = () => {
  return (
    <Flex direction="column" marginTop="150px">
      <Box textAlign="center">
        <Heading
          color="#8a95ad"
          fontSize="11px"
          letterSpacing="5px"
          lineHeight="20px"
          fontWeight={600}
        >
          QUESTIONS
        </Heading>
        <Heading
          color="#152c5b"
          fontSize="35px"
          lineHeight="44px"
          fontWeight="700"
          marginTop="10px"
        >
          Frequently asked questions
        </Heading>
      </Box>
      <Box>
        <Stack>
          <Text
            color="#8a95ad"
            fontSize="15px"
            textAlign="center"
            lineHeight="21px"
            fontWeight="600"
            marginTop="24px"
          >
            Get answers to all questions you have <br /> and boost your
            knowledge about Geegpay.
          </Text>
        </Stack>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        marginTop="60px"
        paddingBottom="15px"
      >
        <Accordion allowToggle>
          <AccordionItem
            borderBottom="2px"
            borderBottomColor="#8a95ad"
            height="130px"
          >
            <Heading>
              <AccordionButton paddingTop="18px">
                <Box display="flex" gap="10.3rem">
                  <Box
                    color="#152c5b"
                    fontSize="18px"
                    lineHeight="28px"
                    fontWeight="500"
                  >
                    How long does it take to get my virtual bank account?
                  </Box>
                  <Box
                    height={7}
                    width={7}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="full"
                    as="span"
                    borderColor="#152c5b"
                    border="2px"
                  >
                    <ChevronDownIcon fontSize={20} color="#152c5b" />
                  </Box>
                </Box>
              </AccordionButton>
            </Heading>
            <AccordionPanel color="#8a95ad" fontSize="16px" lineHeight="24px">
              It is instant.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderBottom="2px"
            borderBottomColor="#8a95ad"
            height="130px"
          >
            <Heading>
              <AccordionButton paddingTop="18px">
                <Box display="flex" gap={64}>
                  <Box
                    color="#152c5b"
                    fontSize="18px"
                    lineHeight="28px"
                    fontWeight="500"
                  >
                    What's the fee for receiving in my account?
                  </Box>
                  <Box
                    height={7}
                    width={7}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="full"
                    as="span"
                    borderColor="#152c5b"
                    border="2px"
                  >
                    <ChevronDownIcon fontSize={20} color="#152c5b" />
                  </Box>
                </Box>
              </AccordionButton>
            </Heading>
            <AccordionPanel color="#8a95ad" fontSize="16px" lineHeight="24px">
              You're charged only 0.9% when you received fund in your virtual
              bank account.
              <br />
              The minimum charges is $1.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderBottom="2px"
            borderBottomColor="#8a95ad"
            height="130px"
          >
            <Heading>
              <AccordionButton paddingTop="18px">
                <Box display="flex" gap={56}>
                  <Box
                    color="#152c5b"
                    fontSize="18px"
                    lineHeight="28px"
                    fontWeight="500"
                  >
                    What's the fee for converting with in currency?
                  </Box>
                  <Box
                    height={7}
                    width={7}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="full"
                    as="span"
                    borderColor="#152c5b"
                    border="2px"
                  >
                    <ChevronDownIcon fontSize={20} color="#152c5b" />
                  </Box>
                </Box>
              </AccordionButton>
            </Heading>
            <AccordionPanel color="#8a95ad" fontSize="16px" lineHeight="24px">
              Our conversion fee is zero.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderBottom="2px"
            borderBottomColor="#8a95ad"
            height="130px"
          >
            <Heading>
              <AccordionButton paddingTop="18px">
                <Box display="flex" gap="5rem">
                  <Box
                    color="#152c5b"
                    fontSize="18px"
                    lineHeight="28px"
                    fontWeight="500"
                  >
                    Can I use my USD account on Upwork, Deel, Fiverr, or
                    Payoneer?
                  </Box>
                  <Box
                    height={7}
                    width={7}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="full"
                    as="span"
                    borderColor="#152c5b"
                    border="2px"
                  >
                    <ChevronDownIcon fontSize={20} color="#152c5b" />
                  </Box>
                </Box>
              </AccordionButton>
            </Heading>
            <AccordionPanel color="#8a95ad" fontSize="16px" lineHeight="24px">
              Yes, it can be used on any platform that accepts USD bank account.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderBottom="2px"
            borderBottomColor="#8a95ad"
            height="130px"
          >
            <Heading>
              <AccordionButton paddingTop="18px">
                <Box display="flex" gap="19rem">
                  <Box
                    color="#152c5b"
                    fontSize="18px"
                    lineHeight="28px"
                    fontWeight="500"
                  >
                    How long does it take to be verified?
                  </Box>
                  <Box
                    height={7}
                    width={7}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="full"
                    as="span"
                    borderColor="#152c5b"
                    border="2px"
                  >
                    <ChevronDownIcon fontSize={20} color="#152c5b" />
                  </Box>
                </Box>
              </AccordionButton>
            </Heading>
            <AccordionPanel color="#8a95ad" fontSize="16px" lineHeight="24px">
              Account verification is instant for International Passport,
              Driver's License and Voter's Card. NIN <br />
              can take between 24 - 48 hours.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderBottom="2px"
            borderBottomColor="#8a95ad"
            height="130px"
          >
            <Heading>
              <AccordionButton paddingTop="18px">
                <Box display="flex" gap="25.6rem">
                  <Box
                    color="#152c5b"
                    fontSize="18px"
                    lineHeight="28px"
                    fontWeight="500"
                  >
                    Where can I transfer to?
                  </Box>
                  <Box
                    height={7}
                    width={7}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="full"
                    as="span"
                    borderColor="#152c5b"
                    border="2px"
                  >
                    <ChevronDownIcon fontSize={20} color="#152c5b" />
                  </Box>
                </Box>
              </AccordionButton>
            </Heading>
            <AccordionPanel color="#8a95ad" fontSize="16px" lineHeight="24px">
              You can transfer to local bank accounts in Nigeria & Wise.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderBottom="2px"
            borderBottomColor="#8a95ad"
            height="130px"
          >
            <Heading>
              <AccordionButton paddingTop="18px">
                <Box display="flex" gap="6.4rem">
                  <Box
                    color="#152c5b"
                    fontSize="18px"
                    lineHeight="28px"
                    fontWeight="500"
                  >
                    Can I use my Virtual Account to receive funds outside the
                    US?
                  </Box>
                  <Box
                    height={7}
                    width={7}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="full"
                    as="span"
                    borderColor="#152c5b"
                    border="2px"
                  >
                    <ChevronDownIcon fontSize={20} color="#152c5b" />
                  </Box>
                </Box>
              </AccordionButton>
            </Heading>
            <AccordionPanel color="#8a95ad" fontSize="16px" lineHeight="24px">
              No, you can only receive funds with your virtual account within
              the US or only via US banks.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderBottom="2px"
            borderBottomColor="#8a95ad"
            height="130px"
          >
            <Heading>
              <AccordionButton paddingTop="18px">
                <Box display="flex" gap="3.3rem">
                  <Box
                    color="#152c5b"
                    fontSize="18px"
                    lineHeight="28px"
                    fontWeight="500"
                  >
                    How long does it take for a transfer to reflect in my
                    Virtual Account?
                  </Box>
                  <Box
                    height={7}
                    width={7}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="full"
                    as="span"
                    borderColor="#152c5b"
                    border="2px"
                  >
                    <ChevronDownIcon fontSize={20} color="#152c5b" />
                  </Box>
                </Box>
              </AccordionButton>
            </Heading>
            <AccordionPanel color="#8a95ad" fontSize="16px" lineHeight="24px">
              It takes 1 - 2 business days. This also depends on the payment
              method used by the sender.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderBottom="2px"
            borderBottomColor="#8a95ad"
            height="130px"
          >
            <Heading>
              <AccordionButton paddingTop="18px">
                <Box display="flex" gap="19.2rem">
                  <Box
                    color="#152c5b"
                    fontSize="18px"
                    lineHeight="28px"
                    fontWeight="500"
                  >
                    Where can I use my virtual USD card?
                  </Box>
                  <Box
                    height={7}
                    width={7}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="full"
                    as="span"
                    borderColor="#152c5b"
                    border="2px"
                  >
                    <ChevronDownIcon fontSize={20} color="#152c5b" />
                  </Box>
                </Box>
              </AccordionButton>
            </Heading>
            <AccordionPanel color="#8a95ad" fontSize="16px" lineHeight="24px">
              Our virtual USD cards are accepted across millions of websites.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderBottom="2px"
            borderBottomColor="#8a95ad"
            height="130px"
          >
            <Heading>
              <AccordionButton paddingTop="18px">
                <Box display="flex" gap="15.6rem">
                  <Box
                    color="#152c5b"
                    fontSize="18px"
                    lineHeight="28px"
                    fontWeight="500"
                  >
                    What is my Virtual USD card billing address?
                  </Box>
                  <Box
                    height={7}
                    width={7}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="full"
                    as="span"
                    borderColor="#152c5b"
                    border="2px"
                  >
                    <ChevronDownIcon fontSize={20} color="#152c5b" />
                  </Box>
                </Box>
              </AccordionButton>
            </Heading>
            <AccordionPanel color="#8a95ad" fontSize="16px" lineHeight="24px">
              651 North Broad Street, Suite 206, Middletown ,19709 Delaware,
              USA.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderBottom="2px"
            borderBottomColor="#8a95ad"
            height="130px"
          >
            <Heading>
              <AccordionButton paddingTop="18px">
                <Box display="flex" gap="8.4rem">
                  <Box
                    color="#152c5b"
                    fontSize="18px"
                    lineHeight="28px"
                    fontWeight="500"
                  >
                    Why is my USD bank account number more than 10 digits?
                  </Box>
                  <Box
                    height={7}
                    width={7}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="full"
                    as="span"
                    borderColor="#152c5b"
                    border="2px"
                  >
                    <ChevronDownIcon fontSize={20} color="#152c5b" />
                  </Box>
                </Box>
              </AccordionButton>
            </Heading>
            <AccordionPanel color="#8a95ad" fontSize="16px" lineHeight="24px">
              US bank accounts can be from 6 to 17 digits.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderBottom="2px"
            borderBottomColor="#8a95ad"
            height="130px"
          >
            <Heading>
              <AccordionButton paddingTop="18px">
                <Box display="flex" gap="12.2rem">
                  <Box
                    color="#152c5b"
                    fontSize="18px"
                    lineHeight="28px"
                    fontWeight="500"
                  >
                    Does my USD bank account support ACH deposits?
                  </Box>
                  <Box
                    height={7}
                    width={7}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="full"
                    as="span"
                    borderColor="#152c5b"
                    border="2px"
                  >
                    <ChevronDownIcon fontSize={20} color="#152c5b" />
                  </Box>
                </Box>
              </AccordionButton>
            </Heading>
            <AccordionPanel color="#8a95ad" fontSize="16px" lineHeight="24px">
              Yes, it does.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderBottom="2px"
            borderBottomColor="#8a95ad"
            height="130px"
          >
            <Heading>
              <AccordionButton paddingTop="18px">
                <Box display="flex" gap="12rem">
                  <Box
                    color="#152c5b"
                    fontSize="18px"
                    lineHeight="28px"
                    fontWeight="500"
                  >
                    Can I have more than one Geegpay account profile?
                  </Box>
                  <Box
                    height={7}
                    width={7}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="full"
                    as="span"
                    borderColor="#152c5b"
                    border="2px"
                  >
                    <ChevronDownIcon fontSize={20} color="#152c5b" />
                  </Box>
                </Box>
              </AccordionButton>
            </Heading>
            <AccordionPanel color="#8a95ad" fontSize="16px" lineHeight="24px">
              No, you can only create one account profile. More than one account
              is not allowed. If users try <br /> to create more than one
              account profile, the accounts will be suspended immediately.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderBottom="2px"
            borderBottomColor="#8a95ad"
            height="145px"
          >
            <Heading>
              <AccordionButton paddingTop="18px">
                <Box display="flex" gap="28.5rem">
                  <Box
                    color="#152c5b"
                    fontSize="18px"
                    lineHeight="28px"
                    fontWeight="500"
                  >
                    Is Geegpay secure?
                  </Box>
                  <Box
                    height={7}
                    width={7}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="full"
                    as="span"
                    borderColor="#152c5b"
                    border="2px"
                  >
                    <ChevronDownIcon fontSize={20} color="#152c5b" />
                  </Box>
                </Box>
              </AccordionButton>
            </Heading>
            <AccordionPanel color="#8a95ad" fontSize="16px" lineHeight="24px">
              Yes! We utilise industry-standard security protocols that leverage
              encryption for transferring <br />
              data. Encryption helps create a secure environment for the
              information being transferred, and <br />
              we ensure that account data is never stored on your device!
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Flex>
  );
};

export default FaqSections;

import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from '@chakra-ui/react';
import { FaqAccordionProps } from './types';

const FaqAccordion = ({ faq }: { faq: FaqAccordionProps[] }) => {
  return (
    <Accordion allowToggle>
      {faq.map((faqObj) => (
        <AccordionItem
          borderBottom="2px"
          borderBottomColor="#8a95ad"
          height="130px"
          key={JSON.stringify(faqObj)}
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
                  {faqObj.question}
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
            {faqObj.answer}
          </AccordionPanel>
        </AccordionItem>
      ))}
      ;
    </Accordion>
  );
};

export default FaqAccordion;

import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  useTheme,
} from '@chakra-ui/react';
import { FaqAccordionProps } from './types';

const FaqAccordion = ({ faq }: { faq: FaqAccordionProps[] }) => {
  const theme = useTheme();
  return (
    <Accordion allowToggle>
      {faq.map((faqObj) => (
        <AccordionItem
          borderBottomColor={theme.fontColors.darkGrey}
          key={JSON.stringify(faqObj)}
          border="none"
          borderBottom={`solid 1px ${theme.colors.lightGrey}`}
          padding="20px 0 40px 0"
        >
          <Heading>
            <AccordionButton>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                width="100%"
              >
                <Box
                  color="#152c5b"
                  fontSize="18px"
                  lineHeight="28px"
                  fontWeight="600"
                >
                  {faqObj.question}
                </Box>
                <Box
                  height="24px"
                  width="24px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="full"
                  color={theme.colors.grey}
                  border="2px"
                >
                  <ChevronDownIcon fontSize={20} color="#152c5b" />
                </Box>
              </Box>
            </AccordionButton>
          </Heading>
          <AccordionPanel
            color="#8a95ad"
            fontSize="16px"
            lineHeight="24px"
            paddingTop="15px"
            paddingBottom="-20px"
          >
            {faqObj.answer}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;

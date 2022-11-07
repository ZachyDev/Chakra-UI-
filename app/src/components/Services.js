import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
} from '@chakra-ui/react'

function Services() {
  return (
    <>
      <Accordion defaultIndex={[0]} allowMultiple>
        {/* Accordion 1 */}
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Software Development
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            We develop custom software solutions to meet your needs.
          </AccordionPanel>
        </AccordionItem>
        {/* Accordion 2 */}
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Software Development
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            We develop custom software solutions to meet your needs.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default Services

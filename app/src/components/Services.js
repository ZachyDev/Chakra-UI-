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
      <Accordion>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Software Development
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            We develop and maintain custom software solutions for your business,
            contact us today.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Web Hosting
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            We develop and maintain custom software solutions for your business,
            contact us today.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default Services

import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react'

function Services() {
  return (
    <>
      {/* Tabs component */}
      <Tabs size="lg" isFitted variant="enclosed">
        <TabList>
          <Tab _selected={{ bg: 'tomato', color: 'fff' }}>Users</Tab>
          <Tab _selected={{ bg: 'blue.400', color: 'fff' }}>Admins</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Users section</TabPanel>
          <TabPanel>Admins sections</TabPanel>
        </TabPanels>
      </Tabs>
      <Accordion defaultIndex={[0]} allowMultiple>
        {/* Accordion 1 */}
        <AccordionItem>
          <AccordionButton
            _expanded={{ backgroundColor: 'tomato', color: 'white' }}
          >
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
          <AccordionButton
            _expanded={{ backgroundColor: 'teal', color: 'white' }}
          >
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

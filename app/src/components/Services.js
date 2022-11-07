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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

function Services() {
  return (
    <>
      {/* Alert component */}
      {/* <Alert status="error">
        <AlertIcon />
        <AlertTitle>Your browser is outdated</AlertTitle>
        <AlertDescription>
          Your Chajra UI experience may be degraded
        </AlertDescription>
      </Alert> */}
      <Alert status="success" variant="top-accent">
        <AlertIcon />
        <AlertTitle>Data uploaded to the server!</AlertTitle>
      </Alert>
      {/* <Alert status="warning">
        <AlertIcon />
        <AlertTitle>Your account is about to expire</AlertTitle>
      </Alert>
      <Alert status="info">
        <AlertIcon />
        <AlertTitle>We are going live on 30th, Get ready!</AlertTitle>
      </Alert> */}
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

      {/* Alert - composition */}
      <Alert
        status="success"
        display="flex"
        flexDirection="column"
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        height="200px"
        width="500px"
        margin="0 auto"
        variant="top-accent"
      >
        <AlertIcon boxSize="40px" />
        <AlertTitle fontSize="lg" mb="2">
          Application submitted!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Thanks for submitting your application. Our team will get back to you
          soon.
        </AlertDescription>
      </Alert>
    </>
  )
}

export default Services

import React from 'react'
import "./faq.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Faq() {
  return (
    <div className='faq'>
    <div className='banner'>
        <h1 className='banner_h1'>FAQs</h1>
    </div>
    <div className='learn_more'>
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>Accordion 1</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography>Accordion 2</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion disabled>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel3a-content"
      id="panel3a-header"
    >
      <Typography>Disabled Accordion</Typography>
    </AccordionSummary>
  </Accordion>


        <h2>1. What is CryptoClub Events?</h2>
        <p>CryptoClub Events is a crypto-focused events company that is looking to bring people 
        from the space together. Our events aim to provide an enjoyable “in real life” experience 
        where you will be able to connect, learn, socialise and party with like minded people. Our 
        unique NFT ticketing platform allows patrons the opportunity to mint their NFT ticket 
        pass on our website in order to gain access to our events. Build a ticket collection and 
        attend our events globally!</p>
        <h2>2. How do we mint a ticket?</h2>
        <p>PS: Mint = Purchase</p>
        <p>Minting an NFT Ticket pass can be done in two ways:</p>
        <p>Mint a ticket by using a recognised Solana Wallet such as Phantom or Slope:</p>
        <p><span>Step 1:</span>  Connect your wallet</p>
        <p><span>Step 2:</span> Click on the event you want to attend</p>
        <p><span>Step 3:</span> Select “Mint Ticket” </p>
        <p><span>Step 4:</span> Once your NFT ticket has been minted, it will be accessible in your Solana Wallet.</p>
        <p><span>Step 5:</span> Ensure your wallet is still connected to our site. Go to the “Generate QR Code” 
        page and select generate.</p>
        <p><span>Step 6:</span>Voila, you are now done! Please make sure to save the QR Code that is auto-generated.</p>
        <br></br>
        <p>For security reasons and to ensure that fake tickets are not created, you will need to use 
        the QR code to enter the event. The QR code contains important information from the 
        blockchain in order to authenticate your unique NFT Ticket pass</p>
    </div>
    </div>
  )
}

export default Faq
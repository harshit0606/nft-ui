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
    <div className='faq_div'>
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>1. What is CryptoClub Events?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
      <p>CryptoClub Events is a crypto-focused events company that is looking to bring people 
        from the space together. Our events aim to provide an enjoyable “in real life” experience 
        where you will be able to connect, learn, socialise and party with like minded people. Our 
        unique NFT ticketing platform allows patrons the opportunity to mint their NFT ticket 
        pass on our website in order to gain access to our events. Build a ticket collection and 
        attend our events globally!</p> 
      </Typography>
    </AccordionDetails>
  </Accordion>
  
  <Accordion >
  <AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel2a-content"
  id="panel2a-header"
>
  <Typography>2. How do we mint a ticket?</Typography>
</AccordionSummary>
<AccordionDetails>
  <Typography>
  <p>PS: Mint = Purchase</p>
  <p>Minting an NFT Ticket pass can be done in two ways:</p>
  <p>1. Mint a ticket by using a recognised Solana Wallet such as Phantom or Slope:</p>
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
  <p>2.	Mint a ticket using your credit/debit card. We have partnered with Crossmint to provide a simple way for users who do not yet have a Solana Wallet to mint an NFT ticket pass. </p>
  <p>Step 1: Go to the Upcoming Events page</p>
<p>Step 2: Click on the event you want to attend</p>
<p>Step 3: Select “Buy with credit card” and follow the prompts. It takes just a few minutes to complete your purchase.</p>
<p>Step 4: Add</p>
<p>Step 5: Add</p>
<p>Step 6: Add</p>
<p>In this instance, you do NOT need to navigate to the “Generate QR code” page as your NFT Ticket pass will sit in your Crossmint wallet. If you decide to download a Solana wallet at a later stage and wish to send your NFT over from Crossmint, then only will need to generate a QR code.</p>
  </Typography>
</AccordionDetails>
    </Accordion>
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography>3 . Is Crossmint safe to use?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
      Crossmint is 100% safe. Crossmint uses Stripe as a 3rd party payment gateway. Stripe is one of the worlds largest payment companies, used by the likes of Facebook and Google.   
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography>4. Where will your events be held?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
      Events will slowly be rolled out globally however to start they will be held in Cape Town, South Africa. Crypto enthusiasts from all over the world are welcome to attend. There will also be a range of crypto companies and projects that will be hosting some of the events.  
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography>5. How will Solana Pay work?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
      Similarly to other QR code merchants, Solana Pay functions in the same manner whereby you scan a QR code and pay instantly on the spot for your purchase. Our events will have mechanise, food as well as a crypto exclusive drinks bar - all of which we will accept payment using Solana Pay. 
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography>6. Why have you decided to use Solana for the NFT Tickets?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
      At the moment we have decided to only integrate Solana due to the low gas fees and very quick transaction speed.

      We will release an ETH mint option at a later stage however users will need to pay for the gas fees as they will more than likely cost more than the price of the actual NFT ticket pass.
      
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography>7. How many tickets can one person mint?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
      Patrons will be allowed to mint up to 3 NFT Ticket Passes each.
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography>8. How old do you need to be to attend our events?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
      This is largely dependent on where the event is held and the country it is held in. If events are held in a venue that is serving alcohol and has an age limit, then the venue rules will be followed accordingly. Each event will stipulate the age limit.

      <b>Events held in Cape Town - South Africa, will be for over 18s only!</b>
      
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography>9. I want to attend your events in Cape Town, do you offer a packaged deal incl flights and accommodation?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
      If you are travelling from another city or country and would like to have all your travel needs taken care of, we have paterned with XXXX who provide a full 360 degree concierge service.  </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography>10.	Who can sponsor to host an event?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
 
Crypto related companies and/or projects will be eligible. If you would like to either sponsor or host an event, please fill out this form or pop us an email using the contact form on the “Contact Us” page.
<br></br>
Disclaimer: Companies/Projects will be vetted thoroughly by our team to ensure they are both legitimate and reputable. 

      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography>11.	I tried to mint an NFT Ticket but it did not go through?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
     <p>There are 2 possible reasons as to why a transaction can fail:</p>
     <p>1.	If there is network congestion, it is possible that your transaction may not go through. Keep trying until it does.</p>
     <p>2.	You must have at least $0,0001 extra in your wallet or account in order to cover gas fees. </p>
     <p>If the above does not sort out your issue, please email our support team on xxxxx. Provide them with your wallet address as well as the details of the event you are trying to mint a ticket for.</p>
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography>12.	I have a question that but it&#x27;s not on your FAQ list?</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
      Please fill out the “Contact Us” form and will endeavour to get back to you within 48hrs.
      </Typography>
    </AccordionDetails>
  </Accordion>

  

        </div>
    </div>
  )
}

export default Faq
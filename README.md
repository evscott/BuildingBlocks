# Building Blocks

## A crowd sourcing application built off of the Ethereum blockchain.

### About

This application leverages blockchain technology to improve upon the general crowd sourcing model by demanding more transparency of a campaigns financial handlings.

Campaign creators are required to make individual requests for funds that are needed to afford particular parts of their campaign. The funds that are requested are then sent to a specified address which should belong to who will be selling the goods or services requested of the campaign. Once a request is made, contributors who have donated to the campaign are able to vote their approval of the request. Only once enough approvals have been made that amount up to the required cost of the services or goods will the funds be able to be finalized and then released.

## Deployment process

###Ensure that Metamask is installed in your web browser.
###Ensure that npm is installed on your computer.

To deploy your own campaign, first clone this repo which already contains all the necessary dependencies.

Depending on whether you intend to deploy onto the Ethereum live network, or a test network, edit line 11 in /buildingblocks/ethereum/web3.js to match that network.

###If unfamiliar with how to get an network address key -
Visit https://infura.io/ to claim yours for free.

Enter the ethereum directory of building blocks through your terminal and enter:

$ node deploy.js

An address attached to your deployed contract will be returned, copy it. Go into /buildingblocks/ethereum/factory.js and replace the sample address on line 6.

To launch your campaign, return to the BuildingBlocks' home directory through your terminal and enter:

$ npm run dev

To test this campaign using Mocha, enter:

$ npm run test

All test cases can be found in /buildingblocks/test/Campaign.test.js

#Currently, this application is still in development and is recommended against being deployed on the live network.

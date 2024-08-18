# Phase-2-WK2-code-challenge

# Maureen Bot Manager

Overview

Thazar Bot Manager is a web application for managing a collection of bots. Users can enlist bots from an available collection, manage their bot army, and discharge or release bots as needed.

# Features

- View Available Bots- See a list of all available bots that can be enlisted.
- Enlist Bots-Add bots to your personal.
- Manage Your Bot Army-View and manage your enlisted bots.
- Release or Discharge Bots-Remove bots from your army or delete them from the server.

# Installation

To run this project locally, follow these steps:

1. Clone the Repository

   git clone git@github.com:MaureenMercy/Phase-2-WK2-code-challenge.git
   cd Phase-2-WK2-code-challenge
Install Dependencies:

Ensure you have Node.js and npm installed. Then, install the required dependencies:

Copy code
npm install

Set Up JSON Server:

This project relies on a local JSON server to provide bot data. Install JSON Server globally if you haven't already:

Copy code
npm install -g json-server
Start the JSON server with the provided db.json file:

Copy code
json-server --watch db.json --port 8001

Start the application:

Copy code
npm start
The app should now be running at http://localhost:3000.

Usage
Viewing Bots: Navigate to the main page to see the available bots.
Enlisting Bots: Click the "Enlist" button on a bot card to add it to your bot army.
Managing Your Army: Switch to the "Your Bot Army" section to view and manage your enlisted bots.
Releasing/Discharging Bots: Use the "Release" or "Discharge" buttons to manage bots in your army.
API Endpoints
The application communicates with the following endpoints provided by the JSON server:

GET /bots: Retrieve the list of all bots.
POST /bots: Add a new bot.
DELETE /bots/:id: Remove a bot by its ID.
Contributing
Feel free to submit issues and pull requests. Your contributions will be welcomed

License
This project is licensed under the MIT License. See the LICENSE file for 
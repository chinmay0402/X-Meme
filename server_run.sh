#!/bin/bash
# cd xmeme-backend/
# ps --no-headers -o comm 1
sudo systemctl start mongod
npm install
nodemon app.js
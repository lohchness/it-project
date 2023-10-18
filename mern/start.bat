@echo off
cd server 
call npm install
start node server.mjs
cd .. 
cd client
call npm install 
call npm start

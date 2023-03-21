# Different Authentication

In this repo, I am using nodejs-express as backend. To understand authentication with different level

## 01 Basic authentication

- Decode from Base64 format
- Base64 encoding is a format designed to prevent communication “mishaps” during the transfer of binary information.

#

## 02 Session-based authentication

- From client ---> POST/user/Login(with email and password) ---> Store user in server Memory
- To client <----- Send session ID as Cookie <-----------------
- From client ---> Send Request with Session ID Cookie ---> Get user from session based on ID and verify them in server
- To client <----- Send Response <-----------------------

#

## 03 JWT(Json Web Token) authentication

- From client ---> POST/user/Login (with email and password) ---> Creete JWT for usr with secret to store in server
- To client <----- Send JWT to browser <---------------------
- From client ---> Send Request with JWT -----------------------> Verify JWT Signature and get user from JWT in server
- To client <----- Send Response <-------------------------------

#

## 04 JWT(Json Web Token) authentication

With seperate concern of handle token and handle route to get in using the token as header
We can see different server running, we can still use the same token as log in

- From client ---> POST/user/Login (with email and password) ---> Create JWT for usr with ACCESS_TOKEN and REFRESH_TOKEN to store in server
- To client <----- Send JWT to browser with ACCESS_TOKEN <-------
- From client ---> If ACCESS_TOKEN time run out ----------------> We take credential to get REFRESH_TOKEN
- To client <----- Send JWT to browser with new ACCESS_TOKEN <---
- From client ---> Send Request with JWT -----------------------> Verify JWT Signature and get user from JWT in server
- To client <----- Send Response <-------------------------------

#

## 05 Firebase auth that we have react front end and log in as google account

## 05 Firebase auth with our express backend

The principle is that the user authenticates at the third-party provider alone:

- Starting at the service (or relying party, RP) the user wants to access, they are presented with a choice of third-party providers, e.g., Facebook, Google, etc.
- The user chooses one of these providers where they already have an account and are then redirected to that provider.
- The user logs in into the provider and consents to share their identity with the RP.
- The provider redirects back to the RP and eventually issues a token; the RP may then use it to access the user’s data, including their unique identifier.
- The RP can then use that identifier to look up the user and grant access to the service accordingly.

#

## 06 In the progress of making a fullstack authentication with react front end and nodejs backend

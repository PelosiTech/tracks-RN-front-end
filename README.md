# Tracks App React Native front-end
## Need to reference Tracks Repo for back end with Express
*By Carlo Pelosi 

**Keep Track of Walks, Runs, and Bike ride routes based on your location**

**Table of Contents**
* [Tracks App Overview](#Tracks-App-overview)
* [Demonstrations](#demonstrations)
* [App Description](#app-description)
* [Technologies](#technologies)


# Tracks-App overview
The application is built off a handmade API backend using Express, Mongoose, and MongoDB, while the front end is maintained by react native and Context. Tracks-App is a basic application that can record your location as you start recording for your walks, runs, or bike rides. You can then pull up your Tracks that are saved to view past routes.

# Demonstrations

## Sign Up Page: 
<img width="600" src="https://i.imgur.com/14rTBf9.png">

## Log In:
<img width="600" src="https://i.imgur.com/Z9Ujhtx.png">

## Create a Track:
<img width="600" src="https://i.imgur.com/ZeFJhjm.png">

## View Tracks:
<img width="600" src="https://i.imgur.com/jP6gGat.png">

## Account Screen to Log out:
<img width="600" src="https://i.imgur.com/gECglUH.png">

# App Description
-   React Native application utilizing context and a handmade custom API backend.  
-   Using permissions to track users locations while the app is open.  
-   Using JWT tokens and AsyncStorage to auto log in user after app is closed.  

# Define Database Functionality + Input Data
1.  Redux context stores the users tracks
2.  User authentication provided by JWT token and Async Storage  
3.  Bcrypt to handle hashed password and salting

# Tools
-   VS Code
-   GitHub
-   handemade API

# Technologies
-   Frontend UI engine: React / Context
-   Backend server: Javascript / Express
-   RDBMS: Mongoose
-   ORM: MongoDB 
 

# Database Structure

## Tables

* Users
    * id - INTEGER-PRIMARY_KEY
    * username - STRING
    * hashedPassword - STRING
    * email - STRING

* Tracks
    * userId - ref: 'User'
    * name - String
    * pointSchema: timestamp from React Native maps

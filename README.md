# social-network

## Project Description

To build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. You’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.jsLinks to an external site. and MongooseLinks to an external site. packages, you may also optionally use a JavaScript date library of your choice or the native JavaScript Date object to format timestamps.



## User Story

- AS A social media startup
- I WANT an API for my social network that uses a NoSQL database
- SO THAT my website can handle large amounts of unstructured data


## Acceptance Criteria
- GIVEN a social network API
- WHEN I enter the command to invoke the application
- THEN my server is started and the Mongoose models are synced to the MongoDB database
- WHEN I open API GET routes in Insomnia for users and thoughts
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia
- THEN I am able to successfully create, update, and delete users and thoughts in my database
- WHEN I test API POST and DELETE routes in Insomnia
- THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Languages Used

- Javascript/Node.js

## How to use

To run the application using VS Code in the terminal you must:

Install required packages to run the app.
```
npm install

```

Start the application
```
node server.js

```

## Application
[https://drive.google.com/file/d/1s582OkwnIksalMTgbyLQmODs64tvlT1-/view?usp=sharing] - link to demo video
SOCIAL NETWORK BACK-END

(get all users)
![image](https://github.com/jsen07/social-network/assets/56829664/41b7ba28-c02b-4ec8-8f47-de69a9f2fbf1)

(get all thoughts)
![image](https://github.com/jsen07/social-network/assets/56829664/01a6fe39-f017-495d-be8c-17aef302d976)


## License 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

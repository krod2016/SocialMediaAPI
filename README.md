AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Social Media API

# Links
* GitHub: https://github.com/krod2016/SocialMediaAPI
* Video Walk-through: 

# Description
This social media API has been created for users to track their friend list. This app also allows the users to add and delete reactions to thoughts on a page. 
--insert screenshot here--
Here is a screenshot from the app Insomnia showing how the different routes work for the users.

# Technologies Used
* Express
* Insomnia
* JavaScript
* Mongoose
* MongoDB
* NoSQL
* Node.js

# Installation
* I downloaded the necessary technologies to start up this app.
* Then, I created the folders and files to hold all the information.

# Process
* First, I created the server to hold the webpage information.
* Then, I created different routes using the CRUD method.
* After testing was completed, and successful, I entered 'npm start' in to the terminal to deploy the page.

# Credits
Made by: Katrina Rodriguez

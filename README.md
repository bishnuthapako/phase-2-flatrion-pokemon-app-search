
# React Pokemon Search

A self learning project to implement React and React Router. A webpage that retrieves the 
details of the searched pokemon using Sementic-ui to retrieve Pokemon details.


# How to setup
All the information about Pokemon can be found in the db.json file. We'll be using json-server to create a RESTful API for our database.

Run npm install to install our dependencies

Before you start building out the application, the first step that you should take is to draw out your component hierarchy. This will tell you how components can pass data to each other as well as where that information should be stored.
Run "npm install semantic-ui-react semantic-ui-css" to install react semantic-ui.

# How it works

 - Make sure you have db.json installed run using json-server --watch db.json to see the each pokemon name heart.
 - Make sure you have Node installed check using command node -v.

# Data retrieve (Pokemon Details)
- Name.
- Images.
- Hp.


# Project goal
- Allow users to search a Pokemon by its name.
- Wire up the form to add a missing Pokemon.
- Since there aren't any validations, you may have to manually remove additions from the db.json file if you make a mistake on a POST request, etc. When a new Pokemon is added, it should show on the page without having to refresh.


# Screenshots 

![App Screenshot](https://raw.githubusercontent.com/bishnuthapako/phase-2-flatrion-pokemon-app-search/master/img/pokemon-img.jpg)


# Conclusion 

For the most part, the framework for this application is already made, with a 
json server, and a React app, with all the components needed. When you run npm start a json server will spin up and you can access the Pokemon info at http://localhost:3001/pokemon, and your React application will also start, on port 3000.

Be sure to use good programming practices, such as clear variable names and single responsibility functions. We want our react app to be clean, easy to read and understand, and of course, easy to to debug, or even add more features to later.



# ICT Skills 2 Assignment.

Name: [Tom Tobin]

## Overview.

[ A React app for  Movie enthusiasts which use an open web API, The Movie DataBase, is the data source for the app. Storybook is a tool for developing individual components ]

The app contains the following extra features developed from the orignal app developed as part of Lab submission. 
+ Must Waatch: page contains a list of must watch movies. Movies listed in the home page are marked using the favourite menu and will then display in the muest watch page. 
+ Popular: page contains list fo popular moves as suppled by the TMDB api based on current views by userbase.
+ Similar: page contains a list of similar movies.

## Setup requirements.

Download zip file of project to your local location. 
Open in a sutiable tool suce as Visual Studio Code. 
From a new terminal window (ensure file path is correct), run the command npm install. 
Update the .env file (add your TMD API key).
Once npm is installed use the command "npm start" which transpiles any JSX and ES6 code in the src folder and the app will start on localhost3000. Use the app as required to find movies etc.
To install storybook run he command "npm install storybook/react". 
To use Storybook (used for developing individual components stop the app if running using "ctrl + c" and the run the command "npm run storybook" which will start storybook).

## App Design.

Client-side rendering web application developed using the REACT.js framework, npm, storybook, visual studio code.
Carries on from the app developed in lab work.

### Routing/Navigation.

[List the set of routes your app supports - only mention new instances if you expanded the Movies Fan app. State the view linked with each route.] 

e.g.
+ /movies/:id - detailed information on a specific movie.
+ /movies/upcoming - lists movies soon to be shown in cinemas.
+ etc.
+ etc.

### Views/Pages.

[ For each view in your app, show a screenshot and caption - only new/modified ones in the case of the Movies Fan app. If necessary, use multiple screenshots to cover a view's full capability.

Popular page view: Lists movies from the popular endpoint. Filtering on title and genre attributes is supported.

https://user-images.githubusercontent.com/76400608/185753235-86dc7941-0784-4d79-b5c5-fc7e9f1af47a.PNG


Similar Page view:
Lists movies from the popular endpoint. Filtering on title and genre attributes is supported.
https://user-images.githubusercontent.com/76400608/185753406-4a2bf9a4-5a9b-486e-992e-351de662dfb8.PNG

### Component catalogue.

Initial app Storybook components used.

https://user-images.githubusercontent.com/76400608/185754443-e41d2809-8562-4b45-ae33-ebed64b09b8a.PNG


## Caching.

[ List the TMDB server state cached by the app. Include a screenshot(s) of the react-query dev tools to validate your list.]

https://user-images.githubusercontent.com/76400608/184532970-fa5468e6-889b-4e3e-aa1f-c4b3ef9a313e.png

e.g.
+ Discover movies (pagination support)
+ Movie details

## Authentication (if relevant).

Basic Authentication used in app.
Routes as follows:

+ /movies/upcoming
+ /movies/favourites
+ /movies/mustwatch
+ /movies/popular
+ /movies/similar

## Server-side persistence (if relevant)

TMDB lists.

## Additional features (if relevant),

Not applicable.

## Independent learning (if relevant),

Not applicable.

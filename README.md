
# ICT Skills 2 Assignment.

Name: [Tom Tobin]

## Overview.

A React app for  Movie enthusiasts which use an open web API, The Movie DataBase, is the data source for the app. Storybook is a tool for developing individual components.

The app contains the following extra features developed from the orignal app developed as part of Lab submission. 
+ Must Waatch: page contains a list of must watch movies. Movies listed in the home page are marked using the favourite menu and will then display in the muest watch page. 
+ Popular: page contains list fo popular moves as suppled by the TMDB api based on current views by userbase.
+ Similar: page contains a list of similar movies.

An open web API, The Movie DataBase (https://developers.themoviedb.org/3/getting-started/introduction), is the data source for the app.

Individual componets are developed as stories and can be viewed using storybook (details on running storybook detailed in setup requirements section below)

Storybook - is a development environment for React components. This allows components to be developed and tested individually.

## Setup requirements.

Download zip file of project to your local location.

Open in a sutiable tool suce as Visual Studio Code. 

From a new terminal window (ensure file path is correct), run the command npm install.

The app communicates with The TMDB API. An API Key authenticates all requests to the API. 

Signup for an account at https://www.themoviedb.org/signup.

Once logged in get the API key as follows: "Settings > API > Create > Click on Request an API > Click "Developer" > Fill in Details"
Update the .env file (with your API key).

Once npm is installed use the command "npm start" which transpiles any JSX and ES6 code in the src folder and the app will start on localhost3000. Use the app as required to find movies etc.

To install storybook run he command "npm install storybook/react". 

To use Storybook (used for developing individual components stop the app if running using "ctrl + c" and the run the command "npm run storybook" which will start storybook).

## App Design.

Client-side rendering web application developed using the REACT.js framework, npm, storybook, visual studio code.
Carries on from the app developed in lab work.

### Routing/Navigation.

List of routes app supports. State the view linked with each route.] 

+ /movies/:id - detailed information on a specific movie.
+ /movies/upcoming - lists movies soon to be shown in cinemas.
+ /movies/mustwatch - lists movies classified as must watch, user selects the favourite movies and it is the listed as mutch watch
+ /movies/popular - lists movies classified as popular
+ /movies/similar - lists movies classified as similar

### Views/Pages.

Views in app, (screenshots - click link) of new/modified views.

Popular page view: Lists movies from the popular endpoint. Filtering on title and genre attributes is supported.

https://user-images.githubusercontent.com/76400608/185753235-86dc7941-0784-4d79-b5c5-fc7e9f1af47a.PNG


Similar Page view:
Lists movies from the popular endpoint. Filtering on title and genre attributes is supported.
https://user-images.githubusercontent.com/76400608/185753406-4a2bf9a4-5a9b-486e-992e-351de662dfb8.PNG

### Component catalogue.

Initial app Storybook components used.

https://user-images.githubusercontent.com/76400608/185754443-e41d2809-8562-4b45-ae33-ebed64b09b8a.PNG


## Caching.

List the TMDB server state cached by the app. 

Re-requesting API data every time a component remounts is avoided by caching. When a component (re)mounts as caching is enabled, it first checks the local cache for its API data. If the data is there, it uses it; otherwise, it makes an API call. Examples of cache in use below.

https://user-images.githubusercontent.com/76400608/184532970-fa5468e6-889b-4e3e-aa1f-c4b3ef9a313e.png

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

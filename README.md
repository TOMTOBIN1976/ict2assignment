
# ICT Skills 2 Assignment.

Name: [Tom Tobin]

## Overview.

[ A React app for  Movie enthusiasts which use an open web API, The Movie DataBase, is the data source for the app. Storybook is a tool for developing individual components ]

The app contains the following extra features developed from the orignal app developed as part of Lab submission. 
+ Must Waatch: page contains a list of must watch movies. Movies listed in the home page are marked using the favourite menu and will then display in the muest watch page. 
+ Popular: page contains list fo popular moves as suppled by the TMDB api based on current views by userbase.
+ Similar: page contains a list of similar movies.
+ etc
+ etc

## Setup requirements.

[ Download zip file of project to your local location. Open in a sutiable tool suce as Visual Studio Code. From a new terminal window (ensure file pathc is correct) run the command npm install. Update the .env file (add it required) with your api key value.
Once installed use the command "npm start" which transpiles any JSX and ES6 code in the src folder and the app will start on localhost3000. Use the app as required to find movies etc.
To use Storybook (used for developing individual componnts stop the app if running using "ctrl + c" and the run the command "npm run storybook" which will start storybook). To install strou book runt he command "npm install storybook/react".  ]

## App Design.

### Routing/Navigation.

[List the set of routes your app supports - only mention new instances if you expanded the Movies Fan app. State the view linked with each route.] 

e.g.
+ /movies/:id - detailed information on a specific movie.
+ /movies/upcoming - lists movies soon to be shown in cinemas.
+ etc.
+ etc.

### Views/Pages.

[ For each view in your app, show a screenshot and caption - only new/modified ones in the case of the Movies Fan app. If necessary, use multiple screenshots to cover a view's full capability.

e.g.
>Lists movies from the Discover endpoint. Filtering on title and genre attributes is supported.

![][d1]

![][d2]

>Shows detailed information on a specific movie

![][detail]


### Component catalogue.

[ Use the Storybook UI to highlight the new components for which you developed stories.]
e.g.

![][stories]

## Caching.

[ List the TMDB server state cached by the app. Include a screenshot(s) of the react-query dev tools to validate your list.]

./public/popularPageCacheDevTools.png

https://user-images.githubusercontent.com/76400608/184532970-fa5468e6-889b-4e3e-aa1f-c4b3ef9a313e.png

e.g.
+ Discover movies (pagination support)
+ Movie details
 + etc
+ etc

![][caching]

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

[d1]: ./public/discover1.png
[d2]: ./public/discover2.png
[detail]: ./public/detail.png
[caching]: ./public/caching.png
[stories]: ./public/stories.png
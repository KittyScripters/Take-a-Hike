# TrailFeathers

Trail Feathers is an app for hiking and bird watching anywhere in North America! Use it to find hiking and biking trails, organize lists of items to bring with you, and check the weather for your trip. Read and leave reviews of the trails to elevate your travel experience.


# Team Kitty Scripters

Product Owner:
Scrum Master: Caity Opelka
Development Team: Daniel Jaen, Alec Vierbuchen, Gretchen Neuenhaus, Alex Beasley, Stephen Nelson

## Application Walk Through

The idea is to have one stop shop for all your hiking needs, with a focus on North America.

When a user opens the application they will be brought to the login page where they can sign in with Google.

Located at the top of every page is a navigation bar which contains 7 options that will quickly navigate the user to the features of the application. From left to right are the ...

Bike Trails
Search for bike trails anywhere in the world using your current location by address or by latitude and longitude.

Weather
Search for weather forecasts anywhere in the world using the region name (city, national landmark), and save forecast to user created trips.

Quartermaster
Allows user to create packing lists with just a name of the list and a description, after which the list is displayed on the page.
User can click on a given list which will open a new view; and there, the user can add items that they want for that trip/packing list.

Birding Check List
A searchable checklist of all the bird in Louisiana (according to eBird a Cornell run Bird Data API). This includes the bird's common name, scientific name, common family name, and common scientific name. Users can check any bird they have spotted along there journey to keep along the trail.

User Profile


Hiking Trails

Logout


## Tech Stack


1. React-Router - Router library
2. Mysql - Database
3. Sequelize - ORM
4. React - Framework
5. Axios - http Client
6. Javascript
7. Node.js - Runtime Environment
8. Express - Server
9. Bulma - CSS Library
10. eslint - Linter
11. Webpack - Module Bundler
12. Passport/Google OAuth - Authentication
13. AWS EC2 - Deployment
14. MaterialUI - styling

### Database:

We have a mySQL/Sequelize database. We have all of our models located in database/models.

### Server:

We have an express server. It is set up in server/index.js. All routes, with the exception of the birdSighting and BirdList routes, are stored in server/index.js. The bird routes are stored in server/routes.

### Authentication

Our authentication is handled with oauth and passport. Our passport and google strategy setup can be found in server/middleware/auth.js. Once logged in, the user has access to the whole site.

### apis

We used 3 external apis for this project:

1. [RapidAPI/Trail API - ](https://rapidapi.com/trailapi/api/trailapi/)
   This API allows us to search for any trails in the world based on latitude and longitude. It requires an API key and registration through RapidAPI, but both are free.

2. [BirdSightings API](https://documenter.getpostman.com/view/664302/S1ENwy59?version=latest) - 
   This api allows users to search for any bird species and receive data about that specific bird. It is maintained by Cornell University and is free.

3. [Weather API](https://www.weatherapi.com/api-explorer.aspx) - 
   This api allows users to search for any location and receive weather data about that location. It is free.

4. [Google Maps](https://developers.google.com/maps/documentation/javascript/overview) - 
   This api allows users to search for any location.

5. [National Parks Api](https://www.nps.gov/subjects/developer/get-started.htm) - 
   This api allows users to search for any national park in the United States. (We are currently only storing data for national parks that have trails included, and manually adding them to our database.)

6. [Bird Sounds API](https://www.xeno-canto.org/explore/api) - 
   This api allows users to search for any bird species and receive data about that specific bird. It is maintained by Cornell University and is free.

7. [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page) - 
   This api allows users to search for any bird species and receive data about that specific bird.

### Front-end

The front-end was built using React and React Router. In App.jsx we initialize our trail data so that upon refresh of trail profile, the most recent trail data is rendered. In that same file we route our links and routes for the app.

The HashRouter can be found in client/index.jsx

The styling is found in login.css and main.css.

# Dev Setup:

## Environment Variables Needed

### For Google OAuth

    1. GOOGLE_CLIENT_ID=
    2. GOOGLE_CLIENT_SECRET=

### Trail API

    1. TRAIL_API_KEY=

### Weather API
   
      1. WEATHER_API_KEY=

### Bird Sightings API

    1. BIRD_SIGHTINGS_API_KEY=

### National Parks API
         
      1. NATIONAL_PARKS_API_KEY=

### Hiking/Biking Trails API

      1. HIKING_TRAILS_API_KEY=

## Installation/Start-up

   1. First fork the repo and clone it to your local machine.
   2. Collect all env keys
   3. Run 'npm install' to install all dependencies
   4. Open mysql, create and use a database called 'TakeAHike'
   5. Run 'npm run dev' to start Webpack
   6. Run 'npm start' to run the server

### Known Bugs

If you input a non-land based coordinate when searching for trails, it will return an error.
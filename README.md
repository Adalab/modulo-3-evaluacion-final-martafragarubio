# RICK & MORTY page

This is a funny and interesting Rick&Morty web by me. A caracter's file, to investigate more about them.
You can choose a filter, by name or by specie, to search easily and fast, and an alphabetical list apears.
Also, if you want knowing more details, click on a caracter, and go to its 'id page', be a detective!

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

## Structure

I build an easy structure to understand the parts of the construction of the web.
The source file:
-Index.js: connect App with public file
-Components:
·App: where it is the foundations
·Filters: FilterName-FilterSpecie: structure with the filters
·CaracterList: CaracterCard: paint the data
·CaracterDetail: to router react
-Services:
·Api: make a petition to api, and choose data
·LocalStorage: save and get info to memory
-Stylesheets: css (in this case)
-Images

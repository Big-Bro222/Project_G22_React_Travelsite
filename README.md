@ -2,9 +2,16 @@ This project was bootstrapped with [Create React App](https://github.com/faceboo

# Travel Planner

## Description

Our program is for customerizing travel plan, where you can add flight information and label spots that you are interested. The page is personal, which only you sign up as an account on our website that you could use it and edit it. And once you log in, every information in your account remains.

## Installation

In the project directory, you can run:

```bash
npm install
```
and then:

```bash
npm start
```
## What's in the project

* [index.html] - this is the html file. Including the common HTML and srcipt.
* [src/imgs/] - Images, were used in home page
* [src/SignIn/SignIn.js] - Page for signing in
* [src/SignOut/SignOut.js] - Page for signing out
* [src/Navbar/Navbar.js] - The header
* [src/Welcome/Welcome.js] - The home page
* [src/PlanView/PlanView.js] - The main page including "Timeline" "SideView" "Map" "Search"
* [src/PlanView/StartView.js] - The default view after you click the date on timeline, it's the first view before your edit
* [src/Timeline/Timeline.js] - The component which shows the date and can be choosen to show which date that you want to add travel plan
* [src/Side/SideView.js] - The sidebar component which still appear on the left of the page. It can let you choose what you want to edit--flight or spots 
* [src/Search/Search.js] - The component which contains the flight search bar and flight result list
* [src/Search/Searchbar.js] - The flight search box
* [src/ResultList/ResultList.js] - The flight result list
* [src/MapSearch/MapApi.js] - Contains the spot information card. Fetching Google Map Api source and show them on the information card
* [src/MapSearch/MapSearch.js] - Fetching Google Map Api source and realise the small map function
* [src/MapSearch/MapView.js] - The whole structure of the map view


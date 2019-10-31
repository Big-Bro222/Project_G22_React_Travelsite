This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project is bulit with skyscanner api and google api and the user data is saved in the cloud database with firebase realtime database; So ,user's account data and saved flight and place data are saved in the firebase remote database in realtime and fetch it once the user sign in again and check his previous plan. This project is built with React and due to the complex state relationship, we use the Redux and React-Redux to manage the state in the redux store.
This project is created by group 22 byZY ZXY QZ and LRZ;

Under Master branch is the project for final review

## Project strcture:
We seperated the web to many views adn these views components are modueld and saved in individual folder with their class name; There are some main important views like Search view and Side view and map search view. They are made up of some children views component to make the code more clear and easy to reuse.


## How to use Travel Planner:

Now,begin to use the awesome web with creat a account and sign in to the website. At the home page, you can start to use it by choosing travel start and end date and clicking the "start new plan" button, then our web will creat a timeline for you! You can click the timeline date to change the day in your travel. Under the timeline, you can search filght information and add to your plan by click add button. The collected flight tittle will show at the sidebar. We fetch the api of Skyscanner and process it to get information. By click the side bar, you can swith the panel view from flight search to interest point explore in the map. You can search the place you woud like to go at the day and check the detail information and then add it to your plan. The saved places will show at the sidebar as childre of the menu. At the same time, both the saved flight information and interest points information will be saved to our realtime  cloud database build with firebase. In this way, from anytime you log in the web, you can check your previous travel plan by clicking "My previous plan" in the home page. You will find everything is come back to the way you edit them last time!

~~Please enter the IATA code of airport to search flight curently. You can google it to get more information.Due to the limited time, building a global city and aitport auto suggest search bar is currently unavaliable. We will improve it in the future.~~

New features:
We have added tooltips in the homepage and fixed the space entering problem in the search bar. Also, we enhanced several usability like airport autocompelete.

## Available Scripts

In the project directory, you can run:
### `npm install`

and then

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Content` 
src/App.js - root component. We added different routes to it<br>
src/index.js - where React is started, which is our root component.<br>
src/index.css - our global styles here<br>
src/Welcome/Welcome - the initial page where you can set your departure date and return date.<br>
src/Navbar/Navbar - the fixed header which shows in all pages, which contains buttons "home page" & "my account" by now<br>
src/PlanView/PlanView - Our main pages, almost all the main functions are realised in this page(component) which contains Navbar, Sidebar, Searchbar, Search Lists etc.<br>
src/Timeline/Timeline - the component which located at the top of the whole page(below the Navbar). You can select different days to arrange your trip plan seperately<br>
src/SideView/SideView - Sidebar<br>
src/PlanView/StartView - Only the "Add your plan" button<br>
src/SelectionView/SelectionView - once you select different days in the timeline, the views under the timeline will change accordingly<br>
src/Search/Search - the search component where you can search for the flights<br>
src/Search/Searchbar - the form component which will be called in the Search.js file<br>
src/ResultList/ResultList - the search results which will show after your search<br>
src/Details/DetailsItem - the details of the search results<br>
src/PrintoutView/PrintoutView - the view there show the print out information<br>
src/SignIn/SignIn - the js code to build a firebase authentication sign in function<br>
src/SignUp/SignUp - the js code to build a firebase authentication sign up function<br>
src/apiUtility/apiUtility - functions to support the api information process go here<br>
src/Firebase/FirebaseTool - functions to support the firebase data user data and user's flight, place data upload and download go here<br>
src/MapSearch/ - class and functions on map search and google map api fetch and the map view component go here<br>
src/actions.js -Redux actions go here<br>
src/auth.js -  firebase user authentication config go here<br>
src/ConfigureStore.js - redux store configure file go here<br>
src/Reducer.js - Redux reducer go here<br>
src/Store.js - Redux store go here<br>
src/protected.route.js ProtectedRoute class go here<br>

### `Link`
Preview link:https://travelplanner-web.firebaseapp.com/

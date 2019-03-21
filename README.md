This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Under Master branch is the project for mid-review or tag "mid_term"

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### `Project description` 
Our project is to build a web where users could plan their trip according to their free days. We provide flight search function, hotel search function and car rental search function but no paying function. The choices users have selected will be added to their trip timeline. Eventually, all the information(flights, hotels, car rental and some notes) will be shown in a timeline way.


### `Layout` 
We have already built the main pages' layouts of our website; Pages like My account, Loggin, Trip Plan Printout, Side bar haven't be completed or built, so we will keep perfecting all the pages
Data: We were using react-redux to transmit data among App and all the components. Next we will use the data that we call through API to set state in the different component.


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
src/Search/Search - the search component where you can search for the flights(the function will be extended to search for hotel and car reantal in the future.)<br>
src/Search/Searchbar - the form component which will be called in the Search.js file<br>
src/ResultList/ResultList - the search results which will show after your search<br>
src/Details/DetailsItem - (in building! ) the details of the search results<br>

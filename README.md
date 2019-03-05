# Video Game Memory

This is a single page video game themed memory game built using React, Node, Axios, Materialize, JQuery, and JQuery UI. The point of the game is to click on as many unique images as possible. Each time an image is selected the image cards will randomly shuffle. To win the user will need to guess all unique images without selecting an image they have previously selected. If an image was previously selected then the game will start over resetting the user's score back to 0 and updating the Top Score where appropriate. 

The project is deployed [here](https://noel3740.github.io/clicky-game/).

# Steps to Play

1. To start playing simply selecting an image. 

![](screenshots/mainScreen.jpg "Screenshot of Main Screen")

2. Continue selecting images being careful to only select those that have not previously been selected. Toast messages will appear as you select images letting you know if you have correctly guessed a unique image or not. The users score will also increate if they have guessed correctly. 

![](screenshots/correctCard.gif "Gif of selecting correct cards")

3. After selecting an incorrect image then the top score will update if the user's score was their best score in their current session. 

![](screenshots/incorrectCard.gif "Gif of selecting incorrect cards")

4. If all unique images have been selected then a toast will appear notifying the user that they have won as well as a modal will pop up with a random gif. 

![](screenshots/win.gif "Gif of a user winning")

# Create React App Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

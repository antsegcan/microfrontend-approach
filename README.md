# Getting Started with MicroFrontends approach

In this repository I will show you how a React component can be made with Parcel and then deployed for MicroFrontend purposes.
With this approach you will be able to create your React components and use them wherever you want (does not matter the application) because your will build web components.

## Recommended steps for a better experience

```bash
# Once you have downloaded the repo
# Install all required dependencies
$ npm i 

# If you want to make some changes or your own web-component you can try the next command
$ npm run dev 

# Then the component is done, let's parcel it.
# The following script will build and serve the resource.
$ npm run serve

# You can see with the following command a simple vanilla JS project using the previous web-component created
# Open your localhost:5001 and profit!
$ npm run client

```

## Available Scripts

Once you have `npm install`ed the project, in the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:1234](http://localhost:1234) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run serve`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

Your app is ready to be deployed

### `npm run client`

You can run easily the client-side (the project that is going to use the built MicroFrontend project)


## CORS Policy

**Remember disable CORS for this Proof of concept!**\
If you do not do that, you cannot retrieve the script created for this demo.

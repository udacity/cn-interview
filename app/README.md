# Front-End Position Test 1

This is the document about the first program of Udacity front-end position test.

## Test

I use yarn as package manager, I suggest you use it in this project. If you have not installed it yet, You can see how to install it [in this article](https://yarnpkg.com/en/docs/install).

```bash
cd ./app
# Install all the dependencies of app
yarn
yarn test
```

## Usage

First you need to start the fixture:

```bash
cd ./fixture
# Install the dependencies of fixfure
npm i
npm start
```

Then you can start the app, make sure you have installed all dependencies of app.

```bash
cd ./app
yarn start
```

## Test principles

1. Component appearance: use snapshot and test conditional rendering
2. User interaction: simulate events triggered by user, make sure components have correct behavior.
3. Data flow: test props of component, reducer and actions

## Technology stack

1. React & Redux
2. bootstrap & react-bootstrap
3. Jest & Enzyme

You can read more details in app/package.json

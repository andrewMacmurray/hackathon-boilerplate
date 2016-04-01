# hackathon boilerplate
This is some boilerplate code to get us off to a good start at hackathons.

It's based around the core technologies of Founders and Coders' RHINO stack (React, Redis, Hapi and Node):

<img src='http://yycjs.com/real-world-react/img/react-logo.png' width='200' height='180' />

<img src='https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Redis_Logo.svg/467px-Redis_Logo.svg.png' width=220 height=80 />

<img src='https://camo.githubusercontent.com/16f4a37b7e2086b6e44dcb0cdfaf9e41f5738278/68747470733a2f2f7261772e6769746875622e636f6d2f686170696a732f686170692f6d61737465722f696d616765732f686170692e706e67' width='180' height='130' />

<img src='http://www.fluentd.org/assets/img/datasources/nodejs.png' width='200' height='100' />

### What's in the boilerplate?

Quite alot actually! The aim is to have a skeleton of a React single page app up and running with a Hapi server in the background that serves static files.

The server can easily be extended to serve data as an API by communicating with the configured redis client

If you want to get straight up and running skip to the last section!

# Key Features

## Build Tools

### Babel

<img src='https://cms-assets.tutsplus.com/uploads/users/48/posts/24512/preview_image/babel-1.png' width='200' height='170' />

All code on the frontend and backend is run through Babel so we can use the full range of ES6 features we've been exposed to with react on the backend too (including import, export and object destructuring)

### Webpack

<img src='http://huaichao.wang/logo/AHDcHLsFuiX8.png' width='180' height='200' />

Frontend code is run through Webpack which transpiles all the js and jsx through babel and bundles it into one neat file `app.js` which meets ES5 standards

### Sass

<img src='http://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png' width='180' height='130' />

Webpack also watches for `.scss` files and turns them into css that can be used in the bundle

Just `require` or `import` the `.scss` file directly into your React code

Make sure if you're using sass variables that are in annother file to use the `@import` rule at the top of the .scss file you're using.

# Backend

The backend folder holds all the server and db files:

The root server file is `server.js` and this imports routes (as just plain objects) from the routes folder. The aim was to keep the server file as clean and neat as possible.

The server is configured to serve js files, images (from the `./public/img` folder) and handles requests from react-router urls (these would usually crash the server if a user were to put them in manually so the `ReactUrls.js` route takes the request and replies with `index.html` (react router is very clever and handles the page the user was on!))

The Hello route is just an example of a data endpoint (this should be deleted)

### Bluebird.js

<img src='http://devstickers.com/assets/img/pro/qtia.png' width='180' height='180' />

Redis is separated into the client and the redisFunctions files: The example redis functions (these should also be deleted) take advantage of the fantastic Bluebird Promise library:

these let you write code that relies on callbacks in a much cleaner, semantic way:

So this function:

```js
getDummyData((err, data) => {
  if (err) throw err;
  else {
    reply(data)
  }
})
```

could be rewritten using bluebird as:

```js
getDummyData()
  .then(data => { reply(data) })
  .catch(error => { throw error })
```

.then() calls can be chained, making code that calls the database multiple times much cleaner

Bluebird is optional but highly recommended.

# Frontend

Frontend code is split up between the `frontend` folder and the `public` folder (the public folder holds the index.html and img files (and is also the webpack app.js bundle target))

Components live in the Components folder (which should be reorganised dependning on the project needs) and the current `App.js` holds the Header and Footer wrapper that appear on each page.

The `routes.js` folder is the highest level component which takes all of the components and orders them as routes

These then get rendered to the DOM in `index.js`

### React Bootstrap

<img src='https://avatars0.githubusercontent.com/u/6853419?v=3&s=400' width='140' height='140' />

The current boilerplate makes use of React Bootstrap which is a brilliant collection of components based on the Bootstrap css framework

Take a look at the [documentation here](https://react-bootstrap.github.io/)

to use Bootstrap components you can import as many as you like directly into your component:

```js
import { Button, Nav, Grid } from 'react-bootstrap'
```

and then use them in your components as JSX:

```js
render () {
  return (
    <div>
      <Nav />
      <Button>Click Me!</Button>
      <Grid></Grid>
    </div>
  )
}
```

[the react-bootstrap docs](https://react-bootstrap.github.io/components.html#navs) have some great examples of how to use these components

### Header and Footer

The current header and footer have been configured to take a logo image and some links (that are rendered as react router links) - these options are in the `App.js` file. If you add or remove links in `App.js`, make sure to update them in your router (`routes.js`)

There are also some default colors set for the header and footer background colors: these can be changed in `_variables.scss` in the `scss` folder

# Get Up and running

1- Clone or fork the repo
(if you want to repurpose it as your own delete the .git folder and copy the files over to your new repo) and change the `repository` and `bugs` fields in the `package.json`
```
$ git clone https://github.com/andrewMacmurray/hackathon-boilerplate.git
```
2- Install all the dependencies by `cd`-ing into the folder and running:
```
$ npm install
```
3- Start your redis server (in annother terminal window) and then open the redis-cli
```
$ redis-server
```
```
$ redis-cli
```
4- If you just want to make changes to the frontend code (i.e. you don't need any data from the hapi server or database) run:
```
$ npm run dev
```
This fires up the webpack dev server with hot reloading. Go to `localhost:8080` in your browser to see the build

5- If you want to see the whole app running (with api data and all), you need to run two commands:
```sh
$ npm run nodemon
```
The nodemon command runs the backend code through babel and starts the server (every time you make changes to the code this gets run)
```sh
$ npm run watch
```
The watch command runs webpack in watch mode, this watches for changes in your code and adds the changes to the bundled file `app.js` in the public folder

WARNING: previewing change when running both watch and nodemon is slower than running in just frontend dev mode (so don't freak out when the browser says `page not found`, just give it a moment)

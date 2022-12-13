# React Redux

This project was bootstrapped with [Visit Now](https://redux-emajon.netlify.app/).

## 🚀 Tech Stack

**Client:** React, Redux, CSS, SASS

**Server:** Node, Express, MongoDB

## Documentation:

 To work with existing project there need to install react-redux ``` npm i react-redux ``` and also need to install core redux ``` npm install redux ```.

 In this project I have installed some additional packages to maintain the project easily. To maintain routes I have used React Router DOM ``` npm install react-router-dom```. For icons React-Icons ``` npm install react-icon```, and CSS pre-processor SASS ``` npm install sass```.

### `File structure:`
 After installation necessary packages I need to stand and ***FOLDER*** structure. Here, one think should take in mind that I will create ***GLOBAL*** contexts. A standard ***FILE STRUCTURE*** link this:
 * [x] Create ***redux*** folder under the ***SRC*** folder;
 * [x] Under the ***redux*** folder I should create a JS file for ***global store***, such as **``` store.js```**;
 * [x] Under the ***redux*** folder I should create a folder called ***reducers*** for ***reducer functions***, where I can put multiple reducer functions;
 * [x] Under the ***reducers*** folder I should create a file/ multiple files if needed called task relevent  reducer, such as ***Product_Reducer.js***;
 * [x] Into the ***Product_Reducer.js*** file I have to write the ***initialState*** and set a initial value:
    ```js
    {test:"TEST"}
    ```
    and write ***reducer*** function. I know the ***reducer*** function takes ***two*** parameters called ***`Previous State`*** and ***`action`***. Here, in redux, the previous state do not get by default, rather I have to assign the ***initialState*** to reducer previous state parameter, and `return` necessary action and than ***export*** the reducer function.
 * [x] Back to the ```store.js``` and create a store. *import* ***createStore*** form **```redux```** and pass a ***reducer*** function as parameter: 
    ```js
    const store = createStore(productReducer);
    ```
    and export the `store`.
* [x] Okay store creation done. Now make this store available as a `global context`. For this **go** back to the ```App.js``` file and import ***Provider*** from *```react-redux```* and than wrap all *`components`* by the **Provider**:
  ```jsx
  <>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Route>
    </BrowserRouter>
  </Provider>
  </>
  ```
  and pass the *`store`* as `prop`.

* [x] Well, all done! Now use the data globally on my application. To use the `store` in any `component` I have to write a single line of code. Here *`react-redux`* provide us a `hook` called ```useSelector``` which return a `callBack` function. So I have to call that function inside the *`useSelector`* function like:
  ```js
  const state = useSelector((state)=>state);
  console.log(state);
  ```
  ### ***Output***:
  - - -
  ```js
  {test:"TEST"}
  ```

## `Redux DevTool Extention`
* [x] At first I need to add the *`redux dev tool extention`* on the browser. 
* [x] Now there is needed to install *redux dev tool extention* on the working react project as: 
  ```
  npm install --save @redux-devtools/extension
  ```
* [x] Now I can use `redux devtools extention` on my working project. To execute the extention it need to `import` on the `store.js` file as a function called `composeWithDevTools` and call the function. Like:
  ```js
  import { createStore } from 'redux';
  import { composeWithDevTools } from '@redux-devtools/extension';

  const store = createStore(reducer, composeWithDevTools());
  ```
* [x] All done! Now I can see how the state changes. It will be found at the `browser colsole` as **`Redux`**.


## Multi Reducer function:
If I have more than one reducer, What should I do to maintain or execute multi reducer?
`redux` always expect single reducer function as parameter. For this I have to create a `root reducer` function. Here redux provide me a function to combine multiple reducer to convert single one. So, I have to create a file suppose called `rootReducer.js` and write some code like:
  ```jsx
  import {combineReducers} from 'redux';
  //import necessary reducer functions;
  const rootReducer = combineReducers({
    cart: ProductReducer,
    filter: FilterReducer,
    //property name(should be relevent to reducer to understand easily): reducerFunction,
  });
  export default rootReducer;
  ```
  Now, bring a little bit change in the `store.js` file. When I have only one reducer, pass that reducer as parameter of `createStore()` function. Now instead of that I have to pass the `rootReducer`, that's it. Code at `store.js`:
  ```js
    const store = createStore(rootReducer);
  ```
## **Middleware**
Basically the term `middleware` denote interceptor. Which is executed between an action taking and that action execution. It works/executed after taking an action and just before the execution. Here, the middleware can change/modify data before it execution.
#### Where do use middleware? and how?
In **`React`** project the middleware have to set at `store.js` file as the second parameter of `createStore` function. The redux provides us a function for the middleware called `applyMiddleware`, I have to `import` the `applyMiddleware` function from the `redux` and send the middleware function as parameter. Similar with:
```js 
import {createStore, applyMiddleware} from 'redux';
const store = createStore(reducer, 
          applyMiddleware(middleware)
        );
```
But if I have a `redux-debtools-extention` there could be a little bit different **Syntax**. Here the middleware shoule be wrapped by the *`redux-devtools-extention`* function like:
```js
  const store = createStore(rootReducer, 
  composeWithDevTools(
    applyMiddleware(middleware)
    ));
```

### **How to wtire a custom MIDDLEWARE?**
To write a custom middleware I have to write an exceptional function called `curring function`. It is nothing but a function, but this function takes parameter as separate ways. ***Syntax*** like:
```js
const curringFunc = () => () => () => {
  //execution
};
```
There have three separate parameters and each parameter takes a certain values.
* [x] **First** parameter takes **`store`**, that means it will takes our global store and this will provide the previous state from the current taking action.
* [x] **`Second`** parameter takes a function and it can be said `next` function. Because this function determine what are going to next.
* [x] **`Third`** as the last or third parameter the curring function takes the `reducer action`.
* [x] From the curring function I have to return *`next`* function with having the `action` parameter.
* [x] Before return I can change or modify `action` as my wishes.
After all the `syntax` will look like:
```js
  const middleWareName = (store) => (next)=> (action)=> {
  console.log("Current State", store?.getState());
  console.log("Which action", action);

  return next(action);
};

export default middleWareName;
```
- **`To get the current state there need to use *getState()* function`**


## **REDUX-THUNK**
Basically `redux-thunk` is a middleware function. **`Redux-Thunk`** is used to `fetch` data from the live server through `API`. To ***install redux-thunk*** use:
```
npm i redux-thunk
```

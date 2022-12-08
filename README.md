# React Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 🚀 Tech Stack

**Client:** React, Redux, CSS, SASS

**Server:** Node, Express, MongoDB

## Documentation:

 To work with existing project there need to install react-redux ``` npm i react-redux ``` and also need to install core redux ``` npm install redux ```.

 In this project I have installed some additional packages to maintain the project easily. To maintain routes I have used React Router DOM ``` npm install react-router-dom```. For icons React-Icons ``` npm install react-icon```, and CSS pre-processor SASS ``` npm install sass```.

 After installation necessary packages I need to stand and ***FOLDER*** structure. Here, one think should take in mind that I will create ***GLOBAL*** contexts. A standard ***FILE STRUCTURE*** link this:
 * [x] Create ***redux*** folder under the ***SRC*** folder;
 * [x] Under the ***redux*** folder I should create a JS file for ***global store***, such as **``` store.js```**;
 * [x] Under the ***redux*** folder I should create a folder called ***reducers*** for ***reducer functions***, where I can put multiple reducer functions;
 * [x] Under the ***reducers*** folder I should create a file/ multiple files if needed called task relevent  reducer, such as ***Product_Reducer.js***;
 * [x] Into the ***Product_Reducer.js*** file I have to write the ***initialState*** and ***reducer*** function. I know the ***reducer*** function takes ***two*** parameters called ***`Previous State`*** and ***`action`***. Here, in redux, the previous state do not get by default, rather I have to assign the ***initialState*** to reducer previous state parameter, and `return` necessary action and than ***export*** the reducer function.
 * [x] Back to the ```store.js``` and create a store. *import* ***createStore*** form **```redux```** and pass a ***reducer*** function as parameter: 
    ```js
    const store = createStore(productReducer);
    ```
    and expoer the `store`.
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

* [x] Well, all done! Now use the data globally on my application. Tp use the `store` in any `component` I have to write a single line of code. Here *`react-redux`* provide us a `hook` called ```useSelector``` which return a `callBack` function. So I have to call that function inside the *`useSelector`* function like:
  ```c++
  const state = useSelector((state)=>state);
  ``` 












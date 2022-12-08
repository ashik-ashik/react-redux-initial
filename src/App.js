import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart/Cart';
import Header from './Components/Common/Header/Header';
import Home from './Components/Home/Home';
import WishList from './Components/WishList/WishList';
import store from './redux/store';

function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wish-list' element={<WishList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart/Cart';
import Header from './Components/Common/Header/Header';
import AddProducts from './Components/Dashboard/AddProducts/AddProducts';
import DashboardDefault from './Components/Dashboard/DashboardHome/DashboardDefault';
import DashboardHome from './Components/Dashboard/DashboardHome/DashboardHome';
import Products from './Components/Dashboard/Products/Products';
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
          <Route path='/dashboard' element={<DashboardHome />}>
            <Route path='' element={<DashboardDefault />} />
            <Route path='product_list' element={<Products />} />
            <Route path='add_product' element={<AddProducts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;

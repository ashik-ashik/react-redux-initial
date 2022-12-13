import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart/Cart';
import Header from './Components/Common/Header/Header';
import AddProducts from './Components/Dashboard/AddProducts/AddProducts';
import DashboardDefault from './Components/Dashboard/DashboardHome/DashboardDefault';
import DashboardHome from './Components/Dashboard/DashboardHome/DashboardHome';
import EditProduct from './Components/Dashboard/EditProduct/EditProduct';
import ProductList from './Components/Dashboard/ProductList/ProductList';
import Home from './Components/Home/Home';
import RecentlyViews from './Components/RecentlyViews/RecentlyViews';
import SingleProduct from './Components/SingleProduct/SingleProduct';
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
            <Route path='product_list' element={<ProductList />} />
            <Route path='add_product' element={<AddProducts />} />
          </Route>
          <Route path='/product/:id' element={<SingleProduct />} />
          <Route path='/history' element={<RecentlyViews />} />
          <Route path='/edit/:id' element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchProducts from '../../redux/thunk/fetchProducts/fetchProducts';
import CartModal from '../Common/CartModal/CartModal';
import Filters from '../Common/Filters/Filters';
import Products from '../Products/Products';
import "./Home.scss";

const Home = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch]);

  const state = useSelector(state=>state);
  const {brands, stock} = state?.filter?.filters;
  const products = state?.products?.products;
  // console.log(state.products.products);

  let content;
  if(state?.products?.loader){
    content = {loading:"Loading......"}
  }else if (state?.products?.error){
    content = {error:state?.products?.error}
  }else{
    if(products.length){
      content = products;
    };
    if(products?.length && (stock || brands?.length)){
      content = products
        .filter(product => {
          if(stock){
            return product?.stock > 0;
          }
          return product;
        })
        .filter(product => {
          if(brands?.length){
            return brands?.includes(product?.category)
          }
          return product;
        })
    };

  }

  return (
    <article>
      
      {
        state?.products?.cartModal && <CartModal />
      }
      <Filters />
      <section className="container">
        <h2 style={{margin:"20px 0"}}>Products:</h2>

        {
          content?.length ? <Products products={content} /> : <>
            <div className="loader">
              <h2>{content?.loading || content?.error}</h2>
              {
                content?.error && <p>
                  Reload several times (if needed 5 to 15 times!!!) to load data. Actually I'm facing the problem when I shift to vercel as backend deployment. There load data after several time reload. Refresh until data is loaded. <br />
                  <small>
                    <strong>I have a request:</strong>
                    please give us a short module on vercel deployment.
                  </small>
                </p>
              }
            </div>
          </>
        }
        
      </section>
    </article>
  );
};

export default Home;
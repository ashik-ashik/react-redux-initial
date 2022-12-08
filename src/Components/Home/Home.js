import React from 'react';
import { useSelector } from 'react-redux';
import "./Home.scss";

const Home = () => {
  const state = useSelector((state)=> state);
  console.log(state);
  return (
    <article>
      <section className="container">
        <h2>Home</h2>
      </section>
    </article>
  );
};

export default Home;
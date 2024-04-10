import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout/Layout";
import { AiOutlineReload } from "react-icons/ai";
import "../styles/Homepage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/get-category`);
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-count`);
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/product/product-filters`, {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Layout title={"ALl Products - Best offers "}>
      {/* banner image */}
      <img
        src="/images/bookhhero.webp"
        className="banner-img"
        alt="bannerimage"
        width={"100%"}
      />
      {/* banner image */}

      <div className="grid-background">
        {/* Your content goes here */}
       <div className="header-book">
        <h1> Want to purchase your faviorate books?</h1>
        <h2>OR</h2>
        <h1>Ready To Publish Your Own Book?</h1>
        </div>
        <div className="body-book">
        <p>embark your journey with us</p>
        </div>

        <div className="button-book">
          
          
          <Link to="/publish" ><button>Publish Book</button></Link>
        </div>
      </div>
      <div className="plans-main">
        <div className="plans">
          <div className="plans-box1">
            <h2>COLLECT YOUR</h2>
            <h1>EMOTION</h1>
            <h2>IN THE FORM OF</h2>
            <h1>BOOK</h1>
            <h3>START TODAY</h3>
            <h3>WITH US</h3>
          </div>
          <div className="plans-box2">
            <img src="/images/plans.svg" alt="plans" className="" />
          </div>
        </div>
        <button>SEE PLANS</button>
      </div>

      <div className="like">
        <div className="like-head">
          <span>Why you'll Love us?</span>
        </div>
        <p>
          We’re coming into a fantastic time with the collection of words poured
          from different souls around the world. Nothing can be more interesting
          rather than writing and reading of book. Books have some other kind of
          fun inside them. So lets begin your journey with us and explore fun
          together.
        </p>
        <div className="like-img">
          <div className="like-img-box">
            <img src="/images/money-bag.png" alt="" />
          </div>
          <div className="like-img-box">
            <img src="/images/printer.png" alt="" />
          </div>
          <div className="like-img-box">
            <img src="/images/customer-service.png" alt="" />
          </div>
          <div className="like-img-box">
            <img src="/images/earth.png" alt="" />
          </div>
          <div className="like-img-box">
            <img src="/images/satisfaction.png" alt="" />
          </div>
        </div>
        <div className="item-list">
          <ul>
            <li>Royality</li>
            <li>Print on Demand</li>
            <li>Customer Support Service</li>
            <li>Worldwide Reachable</li>
            <li>Satisfaction, Beyond You Expectation</li>
          </ul>
        </div>
      </div>

      <div className="review">
      <div className="review-head">
        {/* <h3>What other Author-</h3> */}
        <h3>What other Author-Publishers are saying?</h3>
        <span />
        
      </div>
        <div className="review-body">
          <div className="review-l1"><p>"I've been using this platform for a while now, and I must say,
              it's been an incredible experience. The process of publishing my
              book was smooth, and the support team was very helpful. -Abhay Saxena."</p></div>
          <div className="review-r"><p>"I'm always on the lookout for new books to
              explore. This platform has a fantastic collection, and I've
              discovered some hidden gems here. Plus, the purchasing process
              is straightforward and secure. - Sunand Srinivas"</p></div>
          
        </div>
      </div>
      
    </Layout>
  );
};

export default HomePage;

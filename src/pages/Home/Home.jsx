import { React } from 'react';
import './Home.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { Skeleton } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  const navigation = useNavigate();

  useEffect(() => {
    try {
      axios
        .get('https://fakestoreapi.com/products')
        .then(res => setProducts(res.data));
      toast('Api sucess', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        // transition: Bounce,
      });
    } catch (e) {
      toast('api failed');
    }
  }, []);

  const onClickProduct = id => {
    navigation(`/details/${id}`);
  };

  return (
    <>
      {products.length ? (
        <div className="container">
          <h1>Products</h1>
          <ToastContainer />
          <div className="card-list">
            {products.map(items => {
              return (
                <div onClick={() => onClickProduct(items.id)} className="card">
                  <img src={items.image} alt="" />
                  <h2>{items.title}</h2>
                  <p>{items.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        [1, 2, 3, 4, 5, 6, 7, 8].map(items => {
          return (
            <div onClick={() => onClickProduct(items.id)} className="card">
              <Skeleton />
            </div>
          );
        })
      )}
    </>
  );
};

export default Home;

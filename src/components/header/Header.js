import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png';
import home from '../../assets/icons/home.png';
import product from '../../assets/icons/product.png';
import list from '../../assets/icons/list.png';

export default function Header(){

    return(

        <div id="container-header">

            <div className="container-img">
                <img src={logo} />
            </div>

            <div id="container-navlinks">

                <Link to="/" className="container-btn">
                    <img src={home} />
                    <button>Home</button>
                </Link>

                <Link to="/src/addproduct" className="container-btn">
                    <img src={product} />
                    <button>Add product</button>
                </Link>

                <Link to="/src/listproducts" className="container-btn">
                    <img src={list} />
                    <button>List products</button>
                </Link>

            </div>

        </div>

    );

}

import React from 'react';
import './Header.css';
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

                <div className="container-btn">
                    <img src={home} />
                    <button>Home</button>
                </div>

                <div className="container-btn">
                    <img src={product} />
                    <button>Add product</button>
                </div>

                <div className="container-btn">
                    <img src={list} />
                    <button>List products</button>
                </div>

            </div>

        </div>

    );

}

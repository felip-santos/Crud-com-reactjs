import React from 'react';
import './main.css'
import './home.css'
import Header from '../components/header/Header'

function Home (){
    return (
        <div className="interface">

            <header>
                <Header />
            </header>

            <main className="mainHome">

                <h1>Administrative Area.</h1>
                <h2>
                    Here you can insert, update and remove products (games).
                </h2>

            </main>

        </div>
    );
}

export default Home;

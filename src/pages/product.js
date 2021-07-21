import React, {useState} from 'react';
import Header from '../components/header/Header'
import Select from '../components/select/select'

import './main.css'
import './product.css'

import Upload from '../assets/icons/cloud-upload.png'

export default function Product(){

    const [cardVisibility, setCardVisibility] = useState(false)
    const [genresArray, setGenresArray] = useState([])

    const toggleCardVisibility = () => {
        setCardVisibility(!cardVisibility)
    }

    const addGenreIntoArray = (genre) => {
        setGenresArray([...genresArray, genre])
    }

    return(

        <div className="interface">

            <header>
                <Header />
            </header>

            <main>
                <div id="content-form">

                    <h1>Add a game</h1>

                    <div id="form">

                        <div className="input-content">
                            <label for="inputName">Name</label>
                            <input type="text" className="inputs" id="inputName" placeholder="Name:" required="required"/>
                        </div>

                        <div className="input-content">
                            <label for="inputDeveloper">Developer</label>
                            <input type="text" className="inputs" id="inputDeveloper" placeholder="Developer:" required="required"/>
                        </div>

                        <div className="input-content">
                            <label for="inputPublishingCompany">Publishing Company</label>
                            <input type="text" className="inputs" id="inputPublishingCompany" placeholder="Publishing company:" required="required"/>
                        </div>

                        <div className="input-content content-textarea">
                            <label for="inputDescription">Description</label>
                            <textarea type="text" className="inputs" id="inputDescription" placeholder="Description:" required="required"></textarea>
                        </div>

                        <div className="input-content">
                            <label for="inputPrice">Price</label>
                            <input type="text" className="inputs" id="inputPrice" placeholder="Price:" required="required"/>
                        </div>

                        <div className="input-content">
                            <label for="inputSeries">Series</label>
                            <input type="text" className="inputs" id="inputSeries" placeholder="Series:" required="required"/>
                        </div>

                        <div className="input-content">
                            <label for="inputReleaseDateOf">Release date of</label>
                            <input type="text" className="inputs" id="inputReleaseDateOf" placeholder="Release date of:" required="required"/>
                        </div>

                        <div className="input-content">
                            <div><span>Add platform</span>
                                <button className="btn-add-info" onClick={() => toggleCardVisibility()}>+</button>
                            </div>
                        </div>

                        <div className="input-content">
                            <div><span>Add genre</span><button className="btn-add-info">+</button></div>
                        </div>

                        <div className="input-content img-span">
                            <button>Please, choose an image <img src={Upload}/></button>
                        </div>

                    </div>

                    <button className="btnSave" onClick={() => alert(genresArray)}>Confirm</button>

                </div>
            </main>

            <Select 
                visible={cardVisibility} 
                toggleCardVisibility={toggleCardVisibility}
                addGenreIntoArray={addGenreIntoArray}
            />

        </div>

    );
}

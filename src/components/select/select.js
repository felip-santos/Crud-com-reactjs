import React from 'react';
import './select.css';

const platform = [
    "Playtation 1","Playtation 2","Playtation 3","Playtation 3",
    "Xbox", "Xbox 360", "Xbox One", "Nintendo", "Microsoft Windows"
]

const genres = [
    "Open world", "action", "RPG", "MMORPG", "FPS", "Adventure", "Horror",
    "Simulation"
]

export default function Select(){
    return(

        <div className="container-select">

            <div className="content">

                <h1>Add genre</h1>

                <div className="content-genre">

                    {genres.map(genre => {
                        return (<span>{genre}</span>)
                    })}

                </div>

                <button className="btnConfirm">Confirm</button>

            </div>

        </div>

    );
}

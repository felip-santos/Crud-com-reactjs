import React from 'react';
import './select.css';
import CloseIcon from '@material-ui/icons/Close'

const platform = [
    "Playtation 1", "Playtation 2", "Playtation 3", "Playtation 3",
    "Xbox", "Xbox 360", "Xbox One", "Nintendo", "Microsoft Windows"
]

const genres = [
    {
        id: 1,
        name: "Open world"
    },
    {
        id: 2,
        name: "action"
    },
    {
        id: 3,
        name: "RPG"
    },
    {
        id: 4,
        name: "MMORPG"
    },
    {
        id: 5,
        name: "FPS"
    },
    {
        id: 6,
        name: "Adventure"
    },
    {
        id: 7,
        name: "Horror"
    },
    {
        id: 8,
        name: "Simulation"
    }
]

export default function Select({ visible, toggleCardVisibility, addGenreIntoArray }) {
    return (

        <div className={visible ? "container-select cardVisible" : "cardHidden"}>

            <div className="content">

                <span className="closeIcon" onClick={() => toggleCardVisibility()}><CloseIcon /></span>

                <h1>Add genre</h1>

                <div className="content-genre">

                    {genres.map(genre => {
                        return (<span onClick={() => addGenreIntoArray(genre.name)}>{genre.name}</span>)
                    })}

                </div>

                <button className="btnConfirm">Confirm</button>

            </div>

        </div>

    );
}

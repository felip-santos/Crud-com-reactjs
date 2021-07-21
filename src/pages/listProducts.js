import React, { useState } from 'react';
import Header from '../components/header/Header'
import CardGamer from '../components/card/card'

import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

import './main.css';
import './listProducts.css'

import Search from '../assets/icons/search.png'

export default function ListProducts() {

    const [cardGamerVisibility, setCardGamerVisibility] = useState(false)

    const toggleCardGamerVisibility = () => {
        setCardGamerVisibility(!cardGamerVisibility)
    }

    const products = [
        {
            id: 1,
            name: "Resident Evil 4",
            developer: "Capcom",
            publishingCompany: "Capcom",
            description: "Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror e tiro em terceira pessoa desenvolvido e publicado pela Capcom, lançado originalmente para o Nintendo GameCube em 2005. É o sexto jogo principal da franquia Resident Evil.",
            platforms: "Android, PlayStation 4, PlayStation 2",
            genres: "Jogo eletrônico de quebra-cabeça, Survival horror, Tiro em terceira pessoa, Adventure",
            cost: 250.00,
            series: "Resident Evil",
            releaseDateOf: "11/01/2005",
        },
        {
            id: 2,
            name: "Resident Evil 4",
            developer: "Capcom",
            publishingCompany: "Capcom",
            description: "Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror e tiro em terceira pessoa desenvolvido e publicado pela Capcom, lançado originalmente para o Nintendo GameCube em 2005. É o sexto jogo principal da franquia Resident Evil.",
            platforms: "Android, PlayStation 4, PlayStation 2",
            genres: "Jogo eletrônico de quebra-cabeça, Survival horror, Tiro em terceira pessoa, Adventure",
            cost: 250.00,
            series: "Resident Evil",
            releaseDateOf: "11/01/2005",
        },
        {
            id: 3,
            name: "Resident Evil 4",
            developer: "Capcom",
            publishingCompany: "Capcom",
            description: "Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror e tiro em terceira pessoa desenvolvido e publicado pela Capcom, lançado originalmente para o Nintendo GameCube em 2005. É o sexto jogo principal da franquia Resident Evil.",
            platforms: "Android, PlayStation 4, PlayStation 2",
            genres: "Jogo eletrônico de quebra-cabeça, Survival horror, Tiro em terceira pessoa, Adventure",
            cost: 250.00,
            series: "Resident Evil",
            releaseDateOf: "11/01/2005",
        },
        {
            id: 4,
            name: "Resident Evil 4",
            developer: "Capcom",
            publishingCompany: "Capcom",
            description: "Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror e tiro em terceira pessoa desenvolvido e publicado pela Capcom, lançado originalmente para o Nintendo GameCube em 2005. É o sexto jogo principal da franquia Resident Evil.",
            platforms: "Android, PlayStation 4, PlayStation 2",
            genres: "Jogo eletrônico de quebra-cabeça, Survival horror, Tiro em terceira pessoa, Adventure",
            cost: 250.00,
            series: "Resident Evil",
            releaseDateOf: "11/01/2005",
        },
        {
            id: 5,
            name: "Resident Evil 4",
            developer: "Capcom",
            publishingCompany: "Capcom",
            description: "Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror e tiro em terceira pessoa desenvolvido e publicado pela Capcom, lançado originalmente para o Nintendo GameCube em 2005. É o sexto jogo principal da franquia Resident Evil.",
            platforms: "Android, PlayStation 4, PlayStation 2",
            genres: "Jogo eletrônico de quebra-cabeça, Survival horror, Tiro em terceira pessoa, Adventure",
            cost: 250.00,
            series: "Resident Evil",
            releaseDateOf: "11/01/2005",
        }
    ]

    return (

        <div className="interface">

            <header>
                <Header />
            </header>

            <main className="mainListProducts">

                <h1>List products</h1>

                <div id="form-content">

                    <div className="field-container">
                        <label for="inputSearch">Search product</label>
                        <div>
                            <input type="text" className="input-search" id="inputSearch" placeholder="Ex: Just Cause 4" />
                            <button><img src={Search} /></button>
                        </div>
                    </div>

                    <button className="btnFilter">Filter</button>

                </div>

                <div id="container-list-products">

                    <table>

                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Developer</th>
                                <th>Price</th>
                                <th>Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => {
                                return (
                                    <tr>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.publishingCompany}</td>
                                        <td>R$ {product.cost},00</td>
                                        <td className="content-operations">
                                            <button className="btnOperations"><EditIcon /></button>
                                            <button className="btnOperations" onClick={() => toggleCardGamerVisibility()}>Details</button>
                                            <button className="btnOperations"><DeleteIcon /></button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>

                    </table>

                </div>

            </main>

            <CardGamer
                visible={cardGamerVisibility}
                toggleCardGamerVisibility={toggleCardGamerVisibility}
            />

        </div>

    );
}

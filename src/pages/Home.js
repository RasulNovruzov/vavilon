import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { cards } from './index.js'

export default class Home extends Component {
    render(props) {
        return (
            <div class="grid-container">
                {
                    cards.map((a) => (
                        <main class="container">
                            <section class="card">
                                <div class="product-image">
                                    <img src={a.img} />
                                </div>

                                <div class="product-info">
                                    <h2>{a.name}</h2>
                                    <p>{a.title}</p>
                                    <div class="price">Цена {a.price} €</div>
                                    <div class="price">Адрес {a.address}</div>
                                </div>

                                <div class="btn">
                                    <Link class="buy-btn" to='/login'>
                                        Подробнее
                                    </Link>
                                    {/* <button class="buy-btn">Подробнее</button> */}
                                </div>
                            </section>
                        </main>
                    ))
                }
            </div>
        )
    }
}

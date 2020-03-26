import React from 'react';
import './styles.css';
import heroesImage from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Login() {
    return(
        <div className="login-container">
            <section className="form">
                <img src={logoImage} alt="Be The Heroe"/>

                <form action="">
                    <h1>Faça seu Login</h1>

                    <input type="text" placeholder="Seu ID"/>
                    <button className="button" type="submit">Entrar</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>           

            <img src={heroesImage} alt="Heroes"/>

        </div>
    );
}
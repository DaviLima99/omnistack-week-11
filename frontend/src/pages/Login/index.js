import React, {useState}from 'react';
import './styles.css';
import heroesImage from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

export default function Login() {
    const [id, setId] = useState();
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        
        try {
            const response = await api.post('sessions', {id});
            
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('profile');
        } catch (error) {
            alert("Falha no login, tente novamente!");        
        }
    }

    return(
        <div className="login-container">
            <section className="form">
                <img src={logoImage} alt="Be The Heroe"/>

                <form onSubmit={handleLogin} >
                    <h1>Faça seu Login</h1>

                    <input type="text"
                        value = {id}
                        onChange={e => setId(e.target.value)}
                        placeholder="Seu ID"
                    />
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
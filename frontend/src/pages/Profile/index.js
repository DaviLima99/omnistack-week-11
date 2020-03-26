import React from 'react';
import logoImage from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import {FiPower} from 'react-icons/fi';
import './styles.css';

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImage} alt="Be The Heroe"/>
                <span>Perfil Hospital x</span>

                <Link to="/incidents/new" className="button"> Cadastrar novo caso</Link>
                <button><FiPower size={16} color="#E02041"/></button>
            </header>
        </div>
    );
}
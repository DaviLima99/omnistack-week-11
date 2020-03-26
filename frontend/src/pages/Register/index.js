import React from 'react';
import './styles.css';
import logoImage from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Resgiter() {
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be The Heroe"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro bla bla bla</p>

                    <Link to="/login" className="back-link">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para o login
                    </Link>
                </section>
                
                <form>
                    <input type="text" name="name" placeholder="Nome da estação de atendimento" />
                    <input type="email" name="email" placeholder="E-mail para contato" id=""/>
                    <div>
                        <p>OU</p>
                    </div>
                    <input type="number" name="" placeholder="WhatsApp para contato" id=""/>

                    <div className="input-group">
                        <input type="text" placeholder="Cidade" name="city" />
                        <input type="text" placeholder="UF" name="uf" max="3" style={{width: 80}}/>
                    </div>

                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
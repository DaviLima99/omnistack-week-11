import React, {useState} from 'react';
import api from '../../services/api';
import './styles.css';
import logoImage from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

export default function Resgiter() {
    const [name, setName] = useState('') ;
    const [email, setEmail] = useState('') ;
    const [wpp, setWpp] = useState('') ;
    const [city, setCity] = useState('') ;
    const [uf, setUf] = useState('') ;

    const hisstory = useHistory();

    
    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            wpp,
            city,
            uf
        }

        try {
            const response = await api.post('ongs', data);
            alert(`Cadastro realizado com sucesso, seu ID de acesso: ${response.data.id}`);

            hisstory.push('/login');
        } catch (error) {
            alert('Erro no cadastro, tente novamente');
        }
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be The Heroe"/>

                    <h1>Cadastro</h1>
                    <p>Faça o cadastro da ONG informando os campos necessários</p>

                    <Link to="/login" className="back-link">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para o login
                    </Link>
                </section>
                
                <form onSubmit={handleRegister}>
                    <input type="text" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Nome da ONG" 
                     />
                    <input 
                        type="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="E-mail para contato"
                    />
                    <div>
                        <p>OU</p>
                    </div>
                    <input 
                        type="number"
                        value={wpp}
                        onChange={e => setWpp(e.target.value)}
                        placeholder="WhatsApp para contato" id=""
                    />

                    <div className="input-group">
                        <input 
                            type="text" 
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            placeholder="Cidade" 
                        />
                        <input type="text" placeholder="UF" 
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                            max="3" style={{width: 80}}
                        />
                    </div>

                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
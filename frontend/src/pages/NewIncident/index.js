import React, {useState} from 'react';
import './styles.css'
import logoImage from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

export default function NewIncident() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    async function handleCreateIncident(e) {
        e.preventDefault();

        const data = {
            name,
            description,
            value
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: localStorage.getItem('ongId')
                }
            });
            alert('Caso foi cadastrado com sucesso!');

            history.push('/profile');
        } catch (error) {
            alert('Erro a cadastrar caso, tente');
        }
    }

    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be The Heroe"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Cadastre o nome do paciente e descrva detalhadamente o caso</p>

                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para home
                    </Link>
                </section>
                
                <form onSubmit={handleCreateIncident}>
                <input type="text" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Nome da ONG" 
                     />
                    <textarea
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        id="description" cols="30" rows="10" placeholder="Descrição do caso"></textarea>
                    <input type="number" 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Valor"/>
                    
                    {/* <button className="button">Cancelar</button> */}
                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>       
    );
}

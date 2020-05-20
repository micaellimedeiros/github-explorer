import React, { useState, formEvent } from 'react';

import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);

  async function handleAddRepository(
    event: formEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get(`/repos/${newRepo}`);

    const repository = response.data;
    setRepositories([...repositories, repository]);
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/54600663?s=460&u=34b278ddc6a12d2575ae2fe9e5fd44287494ec0f&v=4"
            alt="Profile"
          />
          <div>
            <strong>fastfeet</strong>
            <p>
              Esse desafio faz parte do Desafio Final, que é uma aplicação
              completa (Back-end, Front-end e Mobile) que é avaliada para
              emissão do Certificado do Bootcamp GoStack.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

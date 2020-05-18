import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
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

import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logo} alt="Github Explorer"/>
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório"/>
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/52586245?v=4"
          alt="Juan Nunes"
        />
        <div>
          <strong>juannunesz/delta_finance</strong>
          <p>
            Delta Finance is a personal
            project created to put into practice
            all the knowledge acquired in studies.
          </p>
        </div>

        <FiChevronRight size={30}/>
      </a>
      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/52586245?v=4"
          alt="Juan Nunes"
        />
        <div>
          <strong>juannunesz/delta_finance</strong>
          <p>
            Delta Finance is a personal
            project created to put into practice
            all the knowledge acquired in studies.
          </p>
        </div>

        <FiChevronRight size={30}/>
      </a>
      <a href="teste">
        <img
          src="https://avatars.githubusercontent.com/u/52586245?v=4"
          alt="Juan Nunes"
        />
        <div>
          <strong>juannunesz/delta_finance</strong>
          <p>
            Delta Finance is a personal
            project created to put into practice
            all the knowledge acquired in studies.
          </p>
        </div>

        <FiChevronRight size={30}/>
      </a>
    </Repositories>
  </>
);


export default Dashboard;


import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import {Header, RepositoryInfo} from './styles';
import logo from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {

  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer"/>
        <Link to="/">
          <FiChevronLeft size={16}/>
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/52586245?v=4"
            alt="imagem da pessoa"
          />
          <div>
            <strong>Juannunes/Repo</strong>
            <p>Descrição do repo</p>
          </div>
        </header>
        <ul></ul>
      </RepositoryInfo>

    </>
  );
};

export default Repository;

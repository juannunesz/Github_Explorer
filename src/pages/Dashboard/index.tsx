import React, {useState, FormEvent, useEffect} from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg'
import api from '../../services/api';
import { Title, Form, Repositories, Error } from './styles';

interface Repository{
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');

  const [inputErro, setInputError] = useState('');

  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories =
    localStorage.getItem('@GithubExplorer:repositories');

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    } else {
      return []
    }
  });

  async function handleAddRepository(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    if(!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try{
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    }catch(Err) {
      setInputError('Erro na busca por esse repositório');
    }

  }

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories))
  },[repositories]);

  return (
    <>
    <img src={logo} alt="Github Explorer"/>

    <Title>Explore repositórios no Github</Title>

    <Form hasError={!!inputErro} onSubmit={handleAddRepository}>
      <input
       value={newRepo}
       onChange={(e) => setNewRepo(e.target.value)}
       placeholder="Digite o nome do repositório"
       />
      <button type="submit">Pesquisar</button>
    </Form>

    { inputErro && <Error>{inputErro}</Error> }

    <Repositories>
      {repositories.map(repository => (
        <Link
          key={repository.full_name}
          to={`/repository/${repository.full_name}`}
        >
          <img
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
          />
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>
          <FiChevronRight size={30}/>
        </Link>
      ))}
    </Repositories>
  </>
  );
};


export default Dashboard;


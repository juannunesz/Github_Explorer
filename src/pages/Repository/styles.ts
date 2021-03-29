import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items:center;
  justify-content:space-between;

  a{
    display:flex;
    align-items:center;
    text-decoration:none;
    color: #a8a8b3;
    transition: color 0.2s;
    font-size: 18px;

    &:hover{
      color: #666;
    }

    svg {
      margin-right: 3px;
    }
  }
`;

export const RepositoryInfo = styled.div`
  display:flex;
  margin-top:60px;

  header{
    display: flex;
    align-items: center;
    justify-content: flex-start;

    img{
      height: 100px;
      width:100px;

    }
  }
`;




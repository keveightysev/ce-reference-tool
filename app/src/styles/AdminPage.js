import styled from 'styled-components';

export const AdminPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  width: 90%;
  max-width: 800px;

  h2 {
    font-size: 3rem;
  }

  nav {
    width: 90%;
    display: flex;
    justify-content: space-around;
    margin: 20px 0;

    a {
      font-size: 2rem;
      color: #0d1b2a;
      text-decoration: none;
      transition: all 150ms linear

      &:hover {
        color: #fff;
      }
    }
  }

  main {
    width: 100%;
  }
`;

import styled from 'styled-components';

export const LoginPage = styled.section`
  background: #fff;
  color: #000;
  width: 90%;
  max-width: 500px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 3rem;
    font-weight: 600;
    margin: 20px 0;
  }

  p {
    color: #a82321;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 10px;
  }

  form {
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      width: 100%;
      margin-bottom: 10px;
      height: 30px;
      font-family: 'Roboto', sans-serif;
      font-size: 2rem;
      border: 1px solid #006699;
      padding: 5px;
    }

    button {
      cursor: pointer;
      font-family: 'Roboto', sans-serif;
      font-size: 2rem;
      margin-bottom: 20px;
      background: #006699;
      border: 1px solid #006699;
      padding: 10px 20px;
      color: #fff;

      &:hover {
        color: #006699;
        background: #fff;
      }
    }

    .sr {
      position: absolute;
      left: -99999px;
      height: 1px;
      width: 1px;
      overflow: hidden;
    }
  }
`;

import styled from 'styled-components';

export const SubPage = styled.section`
  background: #fff;
  color: #000;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    select {
      margin-bottom: 10px;
      width: 50%;
      height: 30px;
      font-family: 'Roboto', sans-serif;
      font-size: 2rem;
    }

    input {
      margin-bottom: 10px;
      width: 50%;
      height: 30px;
      font-family: 'Roboto', sans-serif;
      font-size: 2rem;
      padding: 5px;
    }

    textarea {
      margin-bottom: 10px;
      width: 50%;
      height: 100px;
      font-family: 'Roboto', sans-serif;
      font-size: 2rem;
    }

    button {
      cursor: pointer;
      font-family: 'Roboto', sans-serif;
      font-size: 2rem;
      background: #006699;
      border: 1px solid #006699;
      padding: 10px 20px;
      color: #fff;

      &:hover {
        color: #006699;
        background: #fff;
      }
    }
  }
`;

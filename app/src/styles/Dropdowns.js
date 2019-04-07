import styled from 'styled-components';

const Dropdowns = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 2rem;
    }

    select {
      width: 100%;
      height: 30px;
      font-family: 'Roboto', sans-serif;
      font-size: 2rem;
    }
  }
`;

export default Dropdowns;

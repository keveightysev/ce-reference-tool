import styled from 'styled-components';

const BoardCard = styled.section`
  background: #fff;
  color: #000;
  max-width: 700px;
  margin: 20px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2.7rem;
  }

  table {
    margin: 20px 0;
    width: 90%;
    font-size: 1.6rem;

    td {
      padding: 10px;
      vertical-align: middle;
    }

    td:first-child {
      width: 30%;
      text-align: right;
    }
  }
`;

export default BoardCard;

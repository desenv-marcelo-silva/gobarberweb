import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 10px;
  }
`;

export const ButtonToday = styled.button.attrs({
  type: 'button',
})`
  background: red;
  border: 0;
  color: #fff;
  font-weight: bold;

  display: ${(props) => (props.showGoToday ? 'visible' : 'hidden')};
`;

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  opacity: ${(props) => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    font-size: 20px;
    font-weight: normal;

    color: ${(props) => (props.available ? '#999' : '#7159c1')};
  }

  span {
    display: block;
    margin-top: 3px;

    color: ${(props) => (props.available ? '#999' : '#666')};
  }
`;

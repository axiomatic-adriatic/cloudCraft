import styled from 'styled-components';

export const Container = styled.div `
  display: grid;
  grid-template-columns: 0.5fr 4fr 0.5fr;
  grid-template-rows: 0.5fr 7fr 1.5fr;

  .banner {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .chatbox {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  .textbox {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
`;

export const TextArea = styled.textarea`
  // background-color: black;
  resize: none;
  width: 100%;
`;

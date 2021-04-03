import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1rem auto 1rem;
  grid-template-rows: 4rem 8fr 1.5fr;

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
  resize: none;
  padding: 0.5rem;
  box-sizing: border-box;
  width: 100%;
  height: 5rem;
`;

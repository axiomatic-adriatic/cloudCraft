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

    .arrow {
      width: 5rem;
      height: 5rem;
    }
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  padding: 0.5rem;
  box-sizing: border-box;
  width: 100%;
  height: 5rem;
  border-radius: .5rem;
`;

export const Header = styled.h1`
  font-size: ${(props) => props.size}rem;
  color: black;
`;

export const Paragraph = styled.p`
  font-size: ${(props) => props.size};
  color: black;
`;

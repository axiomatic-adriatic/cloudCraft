import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1rem auto 1rem;
  grid-template-rows: 3rem 8fr 1.5fr;

  .banner {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .chatbox {
    grid-column: 2 / 3;
    grid-row: 2 / 3;

    .messageContainer {
      width: 100%;
      align-items: flex-end;
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: 2rem auto;
      grid-gap: 0.5rem;

      .username {
        grid-column: 1 / 2;
        grid-row: 1/ 2;
        display: flex;
        align-items: center;
        text-transform: capitalize;
      }

      .message {
        grid-column: span 2;
        grid-row: 2 / 3;
      }

      .dateTime {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
    }

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
  color: ${(props) => props.color};
  margin: 0;
`;

export const Paragraph = styled.p`
  font-size: ${(props) => props.size}rem;
  color: ${(props) => props.color};
  margin: 0;
`;

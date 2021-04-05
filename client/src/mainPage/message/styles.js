import styled from 'styled-components';
import { CeruleanFrost } from '../../../../ui/colors';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.5rem auto 0.5rem;
  grid-template-rows: 3rem 8fr 1.5fr;
  grid-gap: 0.5rem;
  // background-color: ${CeruleanFrost};


  .banner {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    align-self: center;
    border-bottom: 1px solid #808080;
  }

  .chatbox {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    display: flex;
    align-self: flex-end;
    flex-direction: column;

    .messageContainer {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: min-content auto;
      grid-gap: 0.4rem;
      padding: 0.5rem;
      :hover {
        background-color: #F0F0F0;
      }

      button {
        position: absolute;
        top: -0.4rem;
        right: 1rem;
      }

      .username {
        grid-column: 1 / 2;
        grid-row: 1/ 2;
        align-self: center;
        text-transform: capitalize;
      }

      .message {
        grid-column: span 2;
        grid-row: 2 / 3;
      }

      .dateTime {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
        justify-content: flex-start;
        align-self: center;
      }
    }

  }

  .textbox {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    position: relative;

    button {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
      background-color: transparent;
      border: none;
      cursor: pointer;

      :active {

      }

      :focus {
        outline: none;
      }
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
  ::placeholder {
    color: #808080;
  }
`;

export const Header = styled.h1`
  font-size: ${(props) => props.size}rem;
  color: ${(props) => props.color};
  margin: 0;
  font-weight: 900;
`;

export const Paragraph = styled.p`
  font-size: ${(props) => props.size}rem;
  color: ${(props) => props.color};
  margin: 0;
`;

export const Button = styled.button`
  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;
  font-size: ${(props) => props.size}rem;
  border-radius: 0.5rem;
  border: 1px solid #808080;
`;

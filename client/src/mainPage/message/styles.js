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
        background-color: #F8F8F8;
      }

      .extra {
        display: none;
        background-color: #DCDCDC;
        position: absolute;
        top: -1rem;
        right: 1rem;
        border-radius: 1rem;
      }

      :hover .extra {
        display: block;
      }

      .options {
        display: flex;
        padding: 1.5px 0.5rem;
        width: 4rem;
        justify-content: space-around;

        .addTask, .delete {
          padding: 0.5rem;
          border-radius: 1rem;

          :hover {
            background-color: #C0C0C0;
            cursor: pointer;
          }
        }
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
      right: 10px;
      bottom: 10px;
      padding: 0;
      background-color: transparent;
      border: none;
      cursor: pointer;

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

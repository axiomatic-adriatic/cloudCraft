import styled from 'styled-components';
import { CeruleanFrost } from '../../../../ui/colors';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.5rem auto 0.5rem;
  grid-template-rows: 3rem auto min-content;
  grid-gap: 0.5rem;

  .banner {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    align-self: center;
    border-bottom: 1px solid #808080;
  }

  .chatbox {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    display: grid;
    align-content: end;
    grid-auto-rows: min-content;
    max-height: 60vh;
    min-height: 50vh;
    overflow: auto;
    ::-webkit-scrollbar {
      width: 0px;
      background: transparent;
    }

    .messageContainer {
      position: relative;
      box-sizing: border-box;
      height: min-content;
      width: 100%;
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: repeat(2, min-content);
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
        justify-content: space-between;

        .addTask, .delete, .edit {
          padding: 0.5rem;
          border-radius: 1rem;
          font-size: .7rem;

          :hover {

            background-color: #D3D3D3;
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

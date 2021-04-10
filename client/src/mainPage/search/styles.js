import styled from 'styled-components';
import { SearchAlt2 } from '@styled-icons/boxicons-regular';
import { PersonCircle } from '@styled-icons/bootstrap'


export const Container = styled.div`
display: grid;
grid-template-columns: 1fr 2fr repeat(2, 1fr);
grid-template-rows: 0.2fr 1fr 0.2fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
`;

export const SearchBar = styled.div`
    grid-area: 2 / 3 / 3 / 5;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Name = styled.h1`
  grid-area: 2 / 1 / 3 / 2;
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 25px;
  font-family: 'Oxygen', sans-serif;
  color:#8B8C89
`;

export const SearchWrapper = styled.div`
   display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    margin-right: 20px;
    height:70%;
    width:70%;
    /* border: 1.5px solid #8B8C89; */
    border-radius:25px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
`;

export const SearchInput = styled.input`
height:20%;
height:80%;
width:90%;
order: 0;
flex: 0 1 auto;
align-self: auto;
outline:none;
border:0;
margin-left:15px;
letter-spacing:2px;
font-size:1rem;
`;
export const SearchIcon = styled(SearchAlt2)`
color: '#8B8C89';
order: 0;
flex: 0 1 auto;
align-self: auto;
width:30px;
padding:2px;
`;


export const UserAvatar = styled.img`
display: flex;
justify-content: center;
align-items: center;
width:35px;
height:35px;
color: '#8B8C89';
border-radius:50%;
&:hover{
    opacity: 0.9;
}
`;

export const DefaultIcon = styled(PersonCircle)`
width:30px;
color: '#8B8C89';
margin-top:7.5%;
`;

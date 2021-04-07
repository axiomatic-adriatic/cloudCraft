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

export const Name = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 25px;
  font-style: 'Oxygen', sans-serif;
`;

export const SearchWrapper = styled.div`
   display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    margin-right: 20px;
    height:60%;
    width:70%;
    border: 1px solid #8B8C89;
    border-radius:10px;
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
margin-left:10px;
letter-spacing:2px;
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

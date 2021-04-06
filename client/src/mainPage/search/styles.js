import styled from 'styled-components';

export const Container = styled.div`
display: grid;
grid-template-columns: 1fr 2fr repeat(2, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
`;

export const Logo = styled.h1`
grid-area: 1 / 1 / 2 / 2;
`;

export const SearchBar = styled.div`
grid-area: 1 / 3 / 2 / 5;
`;

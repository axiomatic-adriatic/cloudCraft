import React from 'react';
import { Container, Logo, SearchBar } from './styles.js';

const Search = () => (
  <Container>
    <Logo> Search Bar</Logo>
    <SearchBar>
      <input placeholder="search" />
    </SearchBar>
  </Container>

);
export default Search;

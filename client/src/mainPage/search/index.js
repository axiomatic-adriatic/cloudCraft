import React, { useState } from 'react';

import {
  Container, SearchBar, SearchInput, SearchWrapper, SearchIcon, DefaultIcon, UserAvatar, Name,
} from './styles.js';

const Search = ({ avatar, name }) => {
  const [searchContent, setSearchContent] = useState('');

  const handleChange = (e) => {
    setSearchContent(e.target.value);
  };
  const keyPress = (e) => {
    if (e.keyCode === 13) {
      console.log('value', e.target.value);
      // put the login here
    }
  };
  return (
    <Container>
      <Name>{`Welcome back, ${name}.`}</Name>
      <SearchBar>
        <SearchWrapper>
          <SearchInput placeholder="search" value={searchContent} onKeyDown={keyPress} onChange={handleChange} />
          <SearchIcon />
        </SearchWrapper>
        {
            avatar ? <UserAvatar src={avatar} /> : <DefaultIcon />
        }
      </SearchBar>
    </Container>
  );
};
export default Search;

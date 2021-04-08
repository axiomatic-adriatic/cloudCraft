/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';

import {
  Container, SearchBar, SearchInput, SearchWrapper, SearchIcon, DefaultIcon, UserAvatar, Name,
} from './styles.js';

// eslint-disable-next-line camelcase
const Search = ({
  avatar, name, channel_id, user_id, getMessages,
}) => {
  const [keyWord, setkeyWord] = useState('');

  const handleChange = (e) => {
    setkeyWord(e.target.value);
  };
  const keyPress = (e) => {
    if (e.keyCode === 13) {
      // console.log('value', e.target.value);
      axios.get('/search/tasks', {
        params: {
          keyWord,
          user_id,
        },
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });

      axios.get('/search/messages', {
        params: {
          keyWord,
          channel_id,
        },
      })
        .then((response) => {
          //console.log('message search');
          let messageList = response.data;
          if(messageList.length === 0){
            alert('No results found');
          }else{
            getMessages(response.data);
          }
        })
        .catch((err) => {
          alert(err)
        });
    }
  };
  return (
    <Container>
      <Name>{`Welcome back, ${name}.`}</Name>
      <SearchBar>
        <SearchWrapper>
          <SearchInput placeholder="search" value={keyWord} onKeyDown={keyPress} onChange={handleChange} />
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

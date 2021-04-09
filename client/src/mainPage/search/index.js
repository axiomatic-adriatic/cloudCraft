/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Container, SearchBar, SearchInput, SearchWrapper, SearchIcon, DefaultIcon, UserAvatar, Name,
} from './styles.js';

// eslint-disable-next-line camelcase
const Search = ({
  avatar, name, channel_id, user_id, getMessages, getTasks,
}) => {
  const [keyWord, setkeyWord] = useState('');

  useEffect(() => {
    axios({
      method: 'get',
      url: '/chat',
      params: { channel_id },
    })
      .then((result) => {
        const allMessages = result.data.filter((message) => message.is_delete === 0);
        getMessages(allMessages);
      })
      .catch((err) => { throw err; });

    axios.get(`/tasks?user_id=${user_id}`)
      .then((resp) => {
        getTasks(resp.data);
      })
      .catch((err) => {
        throw err;
      });
    // console.log(keyWord)
  }, [keyWord]);

  const handleChange = (e) => {
    setkeyWord(e.target.value);
    // if (keyWord === '') {
    //   axios({
    //     method: 'get',
    //     url: '/chat',
    //     params: { channel_id },
    //   })
    //     .then((result) => {
    //       const allMessages = result.data.filter((message) => message.is_delete === 0);
    //       getMessages(allMessages);
    //     })
    //     .catch((err) => { throw err; });
    // }
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
          const tasksList = response.data;
          getTasks(tasksList);
        })
        .catch((err) => {
          throw err;
        });

      axios.get('/search/messages', {
        params: {
          keyWord,
          channel_id,
        },
      })
        .then((response) => {
          // console.log('message search');
          const messageList = response.data;
          getMessages(messageList);
        })
        .catch((err) => {
          throw err;
        });
    }
  };
  return (
    <Container>
      {
        name !== ''
        && (
          <Name>
            {'Welcome back,'}
            &nbsp;
            <span style={{ color: '#274c77' }}>{` ${name}.`}</span>
          </Name>
        )
      }
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

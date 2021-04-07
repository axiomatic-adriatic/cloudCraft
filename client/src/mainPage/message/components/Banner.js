import React from 'react';
import { Header } from '../styles';

const Banner = ({ groupName }) => (
  <div className="banner">
    <Header
      size={1}
      color="#202020"
    >
      {groupName}
    </Header>
  </div>
);

export default Banner;

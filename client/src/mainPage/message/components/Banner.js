import React from 'react';
import { Header } from '../styles';
import { AliceBlue } from '../../../../../ui/colors';

const Banner = ({ groupName }) => (
  <div className="banner">
    <Header
      size={1}
      color={AliceBlue}
    >
      {groupName}
    </Header>
  </div>
);

export default Banner;

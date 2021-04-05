import React from 'react';
import { Header } from '../styles';

const Banner = ({ groupName }) => (
  <div className="banner">
    <Header size={1.5} color="black">{groupName || 'GroupOne'}</Header>
  </div>
);

export default Banner;

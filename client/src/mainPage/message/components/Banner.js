import React from 'react';
import { Header } from '../styles';

const Banner = ({ groupName }) => (
  <div className="banner">
    <Header size={2}>{groupName || 'GroupOne'}</Header>
  </div>
);

export default Banner;

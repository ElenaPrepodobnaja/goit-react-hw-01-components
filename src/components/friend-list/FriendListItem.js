import React from 'react';
import PropTypes from 'prop-types';
import f from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={f.item}>
    <span className={isOnline ? f.statusOnline : f.statusOffline}>
      {isOnline}
    </span>
    <img className={f.avatar} src={avatar} alt={name} width="48" />
    <p className={f.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;

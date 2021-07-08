import React from 'react';
import PropTypes from 'prop-types';
import Friends from './Friends';
import f from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={f.friendList}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <Friends key={id} avatar={avatar} name={name} isOnline={isOnline} />
    ))}
  </ul>
);
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default FriendList;

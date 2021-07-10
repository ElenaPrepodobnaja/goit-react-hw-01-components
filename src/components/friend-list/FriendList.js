import React from 'react';
import PropTypes from 'prop-types';
import Friends from './FriendListItem';
import f from './FriendList.module.css';

const FriendList = ({ friends }) => {
  if (friends.length === 0) return null;
  return (
    <>
      <ul className={f.friendList}>
        {friends.map(friend => (
          <Friends
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default FriendList;

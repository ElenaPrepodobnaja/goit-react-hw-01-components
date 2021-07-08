import React from 'react';
import PropTypes from 'prop-types';
import p from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={p.profile}>
    <div className={p.description}>
      <img src={avatar} alt={name} className={p.avatar} />
      <p className={p.name}>{name}</p>
      <p className={p.tag}>@{tag}</p>
      <p className={p.location}>{location}</p>
    </div>

    <ul className={p.stats}>
      <li className={p.statsLi}>
        <span className={p.label}>Followers</span>
        <span className={p.quantity}>{stats.followers}</span>
      </li>

      <li className={p.statsLi}>
        <span className={p.label}>Views</span>
        <span className={p.quantity}>{stats.views}</span>
      </li>
      <li className={p.statsLi}>
        <span className={p.label}>Likes</span>
        <span className={p.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;

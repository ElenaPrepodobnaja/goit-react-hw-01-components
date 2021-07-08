import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import s from './Statistics.module.css';

const Statistics = ({ stats, title, id }) => (
  <section className={s.statistics}>
    <h2 className={s.title}>{title}</h2>

    <ul className={s.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li className={s.item} key={id}>
          <Stats label={label} percentage={percentage} />
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Statistics;

import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Stats = ({ label, percentage }) => (
  <>
    <span className={s.label}>{label}</span>
    <span className={s.percentage}>{percentage}%</span>
  </>
);

Stats.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Stats;

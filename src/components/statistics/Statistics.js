import React from "react";
import PropTypes from "prop-types";
import Stats from "./Stats"

const Statistics = ({ stats, title, id }) => (
    
    <section className="statistics">
  <h2 className="title">{title}</h2>

        <ul className="stat-list">
            {stats.map(({id, label, percentage}) =>(
                <li className="item" key={id}>
       <Stats
          label={label}
          percentage={percentage}
          
        />
                </li>
             )) }
  </ul>
    </section>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Statistics;
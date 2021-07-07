import React from "react";
import PropTypes from "prop-types";

const Stats = ({ label, percentage }) => (
    
   
    <div>
      <span className="label">{ label }</span>
      <span className="percentage">{ percentage }%</span>
    </div>
    
  
);

Stats.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default Stats;
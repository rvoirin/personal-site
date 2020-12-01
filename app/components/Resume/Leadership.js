import React from 'react';
import PropTypes from 'prop-types';

import Activities from './Leadership/Activities';

const Leadership = ({ data }) => (
  <div className="leadership">
    <div className="link-to" id="leadership" />
    <div className="title">
      <center><h3>Leadership</h3></center>
    </div>
    {data.map((job) => (
      <Activities
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Leadership.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Leadership.defaultProps = {
  data: [],
};

export default Leadership;

import React from 'react';

interface Props {
  data: {
    company: string,
    daterange: string,
    link: string,
    position: number,
    points: string[],
  };
}

const Job: React.FC<Props> = ({ data }: any) => (
  <article className="jobs-container">
    <header>
      <h4>
        <a href={data.link}>{data.company}</a>
        {' '}
        -
        {' '}
        {data.position}
      </h4>
      <p className="daterange">
        {' '}
        {data.daterange}
      </p>
    </header>
    <ul className="points">
      {data.points.map((point: string) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

export default Job;

import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import url from 'url';

const BASE_PATH = '';

interface Props {
  data: {
    title: string,
    link: string,
    image: string,
    date: string,
    desc: string,
  };
}

const Cell : React.FC<Props> = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <time className="published">{moment(data.date).format('MMMM, YYYY')}</time>
      </header>
      <a href={data.link} className="image">
        <Image
          src={url.resolve(BASE_PATH, data.image)}
          alt={data.title}
          width={1200}
          height={700}
        />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

export default Cell;

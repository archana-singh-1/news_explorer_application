import React from 'react';
import './news_row.css';

function News_row({ img, title, description, url }) {
  return (
    <div>
      <div className='news_img'>
        <img src={img} id="news_images"/>
      </div>
      <p>{title}</p>
      <div className='description'>{description}</div>
      <div className='url'>
        <a href={url} target='_blank' rel='noopener noreferrer' id="urls">
          Read full article
        </a>
      </div>
    </div>
  );
}

export default News_row;

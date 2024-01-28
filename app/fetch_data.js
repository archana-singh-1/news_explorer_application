"use client"
import React, { useEffect, useState } from 'react';
import News_row from './news_row';

function Fetch_data() {
  const [newsdata, setNewsdata] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=19faa973b669406fb5f64770866153bd')
      .then((res) => res.json())
      .then((data) => {
        setNewsdata(data.articles);
      });
  }, []);

  return <News_row articles={newsdata} />;
}

export default Fetch_data;

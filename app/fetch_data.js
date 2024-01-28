"use client"
import React, { useEffect, useState } from 'react';

function Fetch_data() {
  const [newsdata, setNewsdata] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=19faa973b669406fb5f64770866153bd')
      .then((res) => res.json())
      .then((data) => {
        setNewsdata(data.articles);
      });
  }, []);



  return(
    <div>
      {newsdata.map((article)=>{
        <p key={article.title}>{article.title}</p>

      })}
    </div>
  )
}


export default Fetch_data;

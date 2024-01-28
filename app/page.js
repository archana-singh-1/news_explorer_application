import React from "react";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import News_row from "./news_row";
import Fetch_data from "./fetch_data";
import { list } from "./test.js";

function Page() {
  return (
    <>
    <div className="row">
      {list.map((item) => (
        <div className="col-sm-12 col-md-4">
        <News_row
          title={item.title}
          img={<img src={item.urlToImage} height={'200px'} width={'200px'} />}
        />
        </div>
      ))}
      <Fetch_data />
    </div>
    </>
  );
}

export default Page;
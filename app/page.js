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
          img={item.urlToImage}
          title={item.title}
          description={item.description}
          url={item.url}

          

        />
        </div>
      ))}
      <Fetch_data />
    </div>
    </>
  );
}

export default Page;
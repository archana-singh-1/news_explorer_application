import 'bootstrap/dist/css/bootstrap.min.css';
import './news_row.css';

function News_row(props) {
  return (
    <div className="row">
      {props.articles.map((article) => (
        <div className="col-sm-12 col-md-4">
          <p>{article.title}</p>
          <p>
            <img src={article.urlToImage} height={'200px'} width={'200px'} alt={article.title} />
          </p>
        </div>
      ))}
    </div>
  );
}

export default News_row;


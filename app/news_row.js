import 'bootstrap/dist/css/bootstrap.min.css';
import './news_row.css'

function News_row({title,img}) {
  return (
    <div>
      <p>{title}</p>
      <p>{img}</p>
    </div>
        
  );
}
export default News_row;





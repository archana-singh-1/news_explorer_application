import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

function Header() {
  return (
    <>
      <div className='header'>
        <div className='newsapi'>NewsAPI</div>
        <div className='image'><img src="Ellipse.png" style={{width:'100%'}}/></div>
        <div className='org'>Org</div>
      </div>
      <hr />
      <hr />


      <div className="search-container">
          <input type="text" placeholder="Search" />
        
        
        <button type="submit">Go</button>
      </div>
      <div className='heading'>TOP NEWS FROM INDIA</div>


    </>
  );
}

export default Header;




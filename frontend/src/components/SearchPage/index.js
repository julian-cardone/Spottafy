import AlbumIndexPage from "../AlbumIndexPage";
import "./searchpage.css";

function SearchPage({ sessionUser }) {

  return (
    <>
      {/* <div className='search-page-fit'></div>  */}
      <AlbumIndexPage sessionUser={{sessionUser}}/>
    </>
  );
}

export default SearchPage;

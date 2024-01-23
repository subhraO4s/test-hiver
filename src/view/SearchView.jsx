import { useState } from "react";
import SearchComponent from "../components/Search";
import Results from "../components/Results";
import { fetchSearchResults } from "../apis/search";
import "./Search.css";

function Search() {
  const [results, setResults] = useState([]);
  const triggerSearch = async (querry) => {
    const res = await fetchSearchResults(querry);
    if (res && res.success && res.data.hits && res.data.hits.length > 0) {
      setResults(res.data.hits);
    }
  };
  const resultArea = (
    <>
      <Results results={results} />
    </>
  );
  return (
    <>
      <>
        <div className="main center">
          <div className="searchContainer">
            <div className="searchArea center">
              <div>
                <h1>Search News</h1>
                <SearchComponent search={triggerSearch} />
              </div>
            </div>
            <div className="searchResults">
              {results.length > 0 ? resultArea : <></>}
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Search;

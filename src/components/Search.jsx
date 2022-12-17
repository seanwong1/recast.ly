const { useState } = React;

var Search = (props) => {
  const [inputText, searchText] = useState('');

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" value={inputText} onChange={ (event) => { searchText(event.target.value); } } />
      <button onClick={() => {
        searchYouTube(inputText, (data) => {
          props.isInList(data);
        });
      }} className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>);
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
import App from './App.js';
import searchYouTube from '../lib/searchYouTube.js';
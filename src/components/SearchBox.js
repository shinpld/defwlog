import React from 'react';
import {useParams} from 'react-router';

const SearchBox =({searchfield, searchChange}) =>{
  return (
    <div >
    <input
      className = 'pa3 ba b--green bg-lightest-blue'
      type='search'
      placeholder={'search items'}
      onChange={searchChange}
    />
    </div>
  );
}

export default SearchBox;

import React from 'react';

const SearchFunc = ({handleSearch}) => {
    const handleChange = (e) => {
      // 👇 Store the input value to local state
      handleSearch(e.target.value);
    };
  
    return (
        <div>
          <input type="text" onChange={handleChange} />
    
          {/* 👇 Use the input value from state */}
        </div>
      );
}

export default SearchFunc
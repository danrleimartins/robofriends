import React from 'react';

const SearchBox = ({ searchfield,  searchChange }) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--light-blue tc bg-moon-gray shadow-1 dim'
                type='search' 
                placeholder='search Robots...'
                onChange= {searchChange}
            />
        </div>
    );
}

export default SearchBox;
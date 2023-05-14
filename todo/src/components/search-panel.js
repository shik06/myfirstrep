import React from 'react';

const SearchPanel = () => {

    const searchText = 'Ask me everything';
    const searchStyle = {
        fontSize:'20px'
    }
    return (
        <div >
            <input className="form-control"
            style={searchStyle}
            placeholder={searchText} 
            />
        </div>
    );
}
export default SearchPanel;
import React from 'react';
import './search-box.styles.css';

function Search(props){
        return(
            <input 
            className={props.className}
             type='search' 
             placeholder={props.placeholder}
             onChange={props.handleChanger} ></input>
        )
    }

export default Search;
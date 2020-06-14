import React from 'react';
import fatman from '../img/5ee3f77006ab8.png';
import '../App.css';

function HeaderImage () {
    return (
        <React.Fragment>
            <img src={fatman} className="App-logo" alt="logo" />
            <h1>Welcome...weigh yourself fat boi</h1> 
        </React.Fragment>
        
    )
}

export default HeaderImage
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return(
        <div className="header">
            <h3> <FontAwesomeIcon  className="coin" icon={faCoins} /> Expence Tracker</h3>
            
        </div>
    );
}

export default  Header;
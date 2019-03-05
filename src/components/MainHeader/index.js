import React from 'react';
import './style.css';

const MainHeader = props => {
    return (
        <div
            className="mainHeader center-align white-text">
            <h1>{props.mainText}</h1>
            {props.detailText.trim().length > 0 &&
                <h3>{props.detailText}</h3>
            }
        </div>
    );
}


export default MainHeader;

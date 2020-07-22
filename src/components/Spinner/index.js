import React from 'react';

import './Spinner.css'

const Spinner = ({color}) => {
    return (
        <div className="spinner">
            <div style={{background: `${color}`}} className="bounce1"></div>
            <div style={{background: `${color}`}} className="bounce2"></div>
            <div style={{background: `${color}`}} className="bounce3"></div>
        </div>
    );
}

export default Spinner;
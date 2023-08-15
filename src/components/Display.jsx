import React from 'react';

const Display = (props) => {
    // console.log(props.count)
    return (
        <div className='display centered wider'>
            <h1>The current count is</h1>
            <h2>{props.count}</h2>
        </div>
    );
};

export default Display;
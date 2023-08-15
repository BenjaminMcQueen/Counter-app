import React from 'react';

const Display = (props) => {
    // console.log(props.count)
    return (
        <div className='display centered'>
            <h1>The current count is</h1>
            <h3>{props.count}</h3>
        </div>
    );
};

export default Display;
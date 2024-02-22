import React from 'react';
import loaderSrc from '../../Gear-0.2s-200px.gif';

const Loader = (props) => {
    return (
        <div>
            <img
            style={{width:75}}
                src={loaderSrc} // Remove the curly braces around loaderSrc
                alt="loader"
            />
        </div>
    );
}

export default Loader;

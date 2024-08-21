/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Primary = ({text,css}) => {
    return (
    <button className={css} >
        {text}
    </button>
    );
};

export default Primary;
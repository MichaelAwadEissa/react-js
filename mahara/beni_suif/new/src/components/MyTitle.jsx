import React from 'react';

function MyTitle({ head, mycolor }) {
    return (
        <h1 style={{ color: mycolor }}>
            {head}
        </h1>
    );
}

export default MyTitle;

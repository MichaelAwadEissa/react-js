import React from 'react';

export default function Skills() {
    return (
        <>
            <h1>Skills</h1>
            <ul>
                <li>
                    <div className="progress">
                        HTML
                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '25%', opacity: 0.25 }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </li>
                <br/>
                <li>
                    <div className="progress">CSS
                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '50%', opacity: 0.5 }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </li>
                <br/>
                <li>
                    <div className="progress">REACT
                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '75%', opacity: 0.75 }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </li>
                <br/>
                <li>
                    <div className="progress">JS
                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%', opacity: 1 }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </li>
            </ul>
        </>
    );
}

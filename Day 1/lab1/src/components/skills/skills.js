import React, {useState} from 'react';
import './skills.css'




export default function Skills() {


    const [skills,setSkills] = useState([
        {name: "html", value: 0},
        {name: "html", value: 25},
        {name: "html", value: 50},
        {name: "html", value: 75},
        {name: "html", value: 100},
        {name: "html", value: 100},
    ])
// const map1 = setSkills.map()


    return (
        <>
        <div className='bg-dark'>
            <h1 >Skills</h1>
            <p className='p-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul>
                {
                           skills.map( (skill) => {
                            return (
                                <li key={skill.name}>
                                    <div className="progress">
                                        {skill.name}
                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${skill.value}%`, opacity: skill.value/100 }} aria-valuenow={skill.value} aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </li>
                            )
                           })     
                }

                {/* <li>
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
                </li> */}
            </ul>
            </div>
        </>
    );
}

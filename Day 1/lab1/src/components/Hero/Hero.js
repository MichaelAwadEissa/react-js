import './Hero.css';
import React from 'react';
export default function Hero () {
    return (<>
        <div id='image_container'>
            <img src="https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="background"/>
       
   
        <div id='hero-text' className='d-flex flex-column'>
            <p>Web developer and designer</p>
            <a className='btn btn-secondary active'>contact me</a>
        </div>
        </div> 

    </>
    );
}

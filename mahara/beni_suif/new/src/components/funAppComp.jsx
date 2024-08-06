import React, { useState,useEffect } from 'react';

function FunAppComp() {
    const [User, setUser] = useState({
        name: "john",
        age: 30,
        position: "software engineer",
        isAdmin: true
    });
    
 

    const change_function = () => {
        setUser({
            ...User,
            name:"michael"});
        
    }

useEffect(() => {
    console.log("componentDidMount");
    
},[]);

useEffect(() => {
    console.log("component Did update");
    
},[User]);
useEffect(() => {
    console.log("component will unmount");
    
},);


    return (
        <>
            <h1>Function Components</h1>
            
            <h2>User:{User.name}, age:{User.age}</h2>
            {User.isAdmin && <button className='btn btn-primary' onClick={change_function } href="#">change info</button>}
        </>
    );
}

export default FunAppComp;

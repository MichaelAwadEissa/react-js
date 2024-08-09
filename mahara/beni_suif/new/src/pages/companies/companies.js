import React, { useEffect, useState } from "react";
import axios from "axios";
import MyCard from '../../components/cards';

function Companies() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        axios.get("https://retoolapi.dev/GEatlr/data")
            .then((res) => {
                setCompanies(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <h1>List of Companies</h1>
            <ul> 
                {companies.map((company,index) => {
                    return (<div key={index}>
                        <MyCard name={company.name} logo={company.logo} url={`/detailes/${company.id}`} btnName={"view Detailes"} width={'18rem'}/>
            
                        </div>
                    );
                })}
            </ul>
        </>
    );
}

export default Companies;

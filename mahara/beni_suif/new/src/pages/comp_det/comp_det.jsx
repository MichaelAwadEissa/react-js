import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyCard from '../../components/cards';

function ACompany() {
    const { id } = useParams(); // Destructure id from useParams
    const [details, setDetails] = useState({});

    useEffect(() => {
        axios.get(`https://retoolapi.dev/GEatlr/data/${id}`)
            .then((res) => {
                setDetails(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [id]); // Include id in dependency array

    return (
        <>
            <h1>Company Details</h1>
            {details.name ? ( // Conditional rendering based on the presence of details
                <MyCard
                    name={details.name}
                    logo={details.logo}
                    about={details.about}
                    location={details.location}
                    size={details.size}
                    width={"60rem"}
                />
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}

export default ACompany;

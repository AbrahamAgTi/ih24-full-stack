import axios from 'axios';
import { useEffect, useState } from 'react'
import './../index.css'
import { Link } from 'react-router-dom';
const API_URL = "http://localhost:5005";

function FruitsPage() {

    const getAllFruits = () => {
        // Get the token from the localStorage
        const storedToken = localStorage.getItem("authToken");

        // Send the token through the request "Authorization" Headers
        axios
            .get(
                `${API_URL}/fruits`,
                { headers: { Authorization: `Bearer ${storedToken}` } }
            )
            .then((response) => setFruits(response.data))
            .catch((error) => console.log(error));
    };

    const [fruits, setFruits] = useState([])

    useEffect(() => {
        getAllFruits()
    }, [])

    return (
        <div><h2 className='fruit-list-title'>Fruits List</h2>
            <ul className='fruits-ul'>
                {fruits.map((fruit) => (
                    <div key={fruit._id}><li className='fruit-list-item'>{fruit.name}</li>  </div>
                ))}
                <Link to='/new Fruit' className='fruit-link'>Add fruit to the list </Link>
            </ul>
        </div>
    )
}

export default FruitsPage
import { useState, useContext } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

function AddFruit() {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const storedToken = localStorage.getItem("authToken");

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = { name, category };
        axios
            .post(
                `${API_URL}/fruits`, requestBody,
                { headers: { Authorization: `Bearer ${storedToken}` } })

            .then(console.log('fruit added successfully'),
                navigate('/fruits'))
            .catch((error) => console.log(error));
    };


    return (
        <div>
            <h1>Add a New Fruit</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Category:
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
                </label>

                <button type="submit">Add Fruit</button>
            </form>
        </div>
    )
}

export default AddFruit
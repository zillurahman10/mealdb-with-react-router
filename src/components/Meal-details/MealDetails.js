import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

const MealDetails = () => {
    const { id } = useParams()

    const [details, setDetails] = useState([])
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.meals))
    }, [])
    console.log(details.strMealThumb);
    return (
        <div>
            <img src={details.strMealThumb} alt="" />
            <h1>This is meal details : {id}</h1>
        </div>
    );
};

export default MealDetails;
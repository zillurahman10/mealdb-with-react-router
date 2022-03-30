import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './MealDetails.css'

const MealDetails = () => {
    const { id } = useParams()

    const [details, setDetails] = useState({})
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.meals[0]))
    }, [])
    const { strMealThumb, strMeal, strInstructions } = details
    console.log(details);
    if (!details?.strMeal) {
        return (
            <div>
                <h1>No food found</h1>
            </div>
        )
    }
    return (
        <div className='details-container'>
            <img className='img' src={strMealThumb} alt="" />
            <div>
                <h1>{strMeal}</h1>
                <p><span className='recipi'>Recipi :</span> {strInstructions}</p>
            </div>
        </div>
    );
};

export default MealDetails;
import React from 'react';
import { Link } from 'react-router-dom';
import './Meal.css'

const Meal = (props) => {
    console.log(props);
    const { strMealThumb, strMeal, idMeal } = props.meal
    return (
        <div className='card'>
            <div>
                <img className='img' src={strMealThumb} alt="" />
            </div>
            <div>
                <h3 className='food-text'>{strMeal}</h3>
                <Link to={`/mealDetails/${idMeal}`}>See Details</Link>
            </div>
        </div>
    );
};

export default Meal;
import React, { useEffect, useState } from 'react';
import './Restaurant.css'
import Meal from '../Meal/Meal';
const Restaurant = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [searchText])

    const searchFood = e => {
        setSearchText(e.target.value);
    }
    return (
        <div>
            <h2 className='food-text'>Find the food you want</h2>
            <input onChange={searchFood} type="text" name="" id="" />
            <br />
            <h3 className='food-text'>Result found: {meals.length}</h3>
            <div className='meals-container'>
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Restaurant;
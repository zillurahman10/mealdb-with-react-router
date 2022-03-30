import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Restaurant from './components/Restaurant/Restaurant';
import Meal from './components/Meal/Meal';
import MealDetails from './components/Meal-details/MealDetails';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="restaurant" element={<Restaurant></Restaurant>}></Route>
        <Route path="mealDetails/:id" element={<MealDetails></MealDetails>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="notfound" element={<NotFound></NotFound>}></Route>

      </Routes>
    </div>
  );
}

export default App;

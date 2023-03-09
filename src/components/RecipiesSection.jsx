import React from "react";
import { Link } from "react-router-dom";
import "./RecipesSection.css";

function RecipesSection({
  image,
  label,
  dishType,
  calories,
  totalWeight,
  ingredients,
  link,
}) {
  return (
    <>
      <div className='recipe-card'>
        <Link to={link} target="_blank" rel='noopener noreferrer'>
          <div className='img-card'>
            <img className='img' alt='recipe' src={image} />

            <div className='card-title'>
              <h3>{label}</h3>
              <hr />
              <p>{dishType[0]}</p>
            </div>
          </div>
        </Link>
        <h4 className='card-recipe-title'>{label}</h4>

        <div className='card-recipe-description'>
          <p>{Math.round((calories * 100) / totalWeight)} calories </p>
          <p> {ingredients.length} ingredients</p>
        </div>

        <Link to={link} target="_blank"
          rel='noopener noreferrer'
          className='button'
        >
          Read More
        </Link>
      </div>
    </>
  );
}

export default RecipesSection;

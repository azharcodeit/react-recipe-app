import React from "react";
import "./FilterSection.css";

function FilterSection({handleSubmit, value, handleChange}) {
  return (
    <div className='filter'>
      <p className='recipe-filters-title'>Recipes &amp; Pairings</p>
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Search' value={value} onChange={handleChange}/>
          <i className="uil uil-search" onClick={handleSubmit}></i>
        </form>
    </div>
  );
}

export default FilterSection;

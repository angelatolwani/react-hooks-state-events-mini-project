import React from "react";

function CategoryFilter( {categories, selectedCategory, setSelectedCategory} ) {
  function handleClick(event) {
    setSelectedCategory(event.target.textContent)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map(category => <button 
          key={category} 
          onClick={handleClick}
          className={category===selectedCategory ? "selected" : ""}>
            {category}
        </button>)}
    </div>
  );
}

export default CategoryFilter;

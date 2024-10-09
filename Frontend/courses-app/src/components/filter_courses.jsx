import { useState, useEffect } from "react";

const FilterCourses = ({categories, categoryFilter, setCategoryFilter, minPrice, setMinPrice, maxPrice, setMaxPrice, handleFilter}) => {


    // frontend
    return (
        <>
            <div className="container">
                {/* Filter Section */}
                <div className="row mt-4 p-3">
                    <div className="col-lg-4">
                        <label htmlFor="categoryFilter">Category:</label>
                        <select 
                            id="categoryFilter" 
                            className="form-select" 
                            value={categoryFilter} 
                            onChange={(e) => setCategoryFilter(e.target.value)}
                        >
                            <option value="all">All Categories</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.name}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-lg-3">
                        <label htmlFor="minPrice">Min Price:</label>
                        <input 
                            type="number" 
                            id="minPrice" 
                            className="form-control" 
                            placeholder="Min Price" 
                            min="0" 
                            value={minPrice} 
                            onChange={(e) => setMinPrice(e.target.value)} // Update minPrice
                        />
                    </div>
                    <div className="col-lg-3">
                        <label htmlFor="maxPrice">Max Price:</label>
                        <input 
                            type="number" 
                            id="maxPrice" 
                            className="form-control" 
                            placeholder="Max Price" 
                            min="0" 
                            value={maxPrice} 
                            onChange={(e) => setMaxPrice(e.target.value)} // Update maxPrice
                        />
                    </div>
                    <div className="col-lg-2 d-md-block">
                        <button onClick={handleFilter} className="btn btn-primary mt-4">Filter</button>
                    </div>
                </div>
                {/* End filter section */}
            </div>
        </>
    );
}

export default FilterCourses;

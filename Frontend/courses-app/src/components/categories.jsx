// import {useEffect} from "react";

import {useState, useEffect} from "react";

const Categories = ({categories, setCategories}) => {
    // Logic

    useEffect(() => {
        fetch("http://localhost:8000/api/categories/")
            .then(response => response.json()).then(data => setCategories(data))
    })

    // frontend
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <ul>
                            {categories.map((category) => (
                                <li key={category.id}>{category.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Categories;
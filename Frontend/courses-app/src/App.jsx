import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'
import MyImage from "./components/images/2222.png"
import Navbar from "./components/navbar.jsx";
import Courses from "./components/courses.jsx";
import Course_detail from "./components/course_detail.jsx";
import Categories from "./components/categories.jsx";
import FilterCourses from "./components/filter_courses.jsx";

function App() {

    const [courses, setCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/categories/')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    useEffect(() => {
        fetch('http://localhost:8000/api/courses/')
            .then(response => response.json())
            .then(data => {
                setCourses(data);
                setFilteredCourses(data); // Setting filteredCourses to all fetched courses
            })
            .catch(error => console.error('Error fetching courses:', error)); // error handling
    }, []);



    const [selectedCourse, setSelectedCourse] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // For Filtering
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleFilter = () => {
    // Filter courses based on selected category and price range
    const filteredCourses = courses.filter(course => {
        const isCategoryMatch = categoryFilter === 'all' || course.category === categoryFilter;
        const isMinPriceMatch = minPrice === '' || course.price >= minPrice;
        const isMaxPriceMatch = maxPrice === '' || course.price <= maxPrice; // If maxPrice is 0, ignore max price

        return isCategoryMatch && isMinPriceMatch && isMaxPriceMatch;
    });

    setFilteredCourses(filteredCourses); // Update filteredCourses with filtered results
};



  return (
      <>

        <Navbar />

        <FilterCourses
                categories={categories}
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                handleFilter={handleFilter}
            />

        <Courses courses={filteredCourses} setShowModal={setShowModal} setSelectedCourse={setSelectedCourse} />

        <Course_detail showModal={showModal} setSelectedCourse={setSelectedCourse} selectedCourse={selectedCourse} setShowModal={setShowModal} />

      </>
  )
}

export default App

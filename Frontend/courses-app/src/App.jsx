import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'
import MyImage from "./components/images/2222.png"

function App() {

    const [courses, setCourses] = useState([
        {
            id:33,
            name: "Learn Basic Python",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            price: 19.99,
            category: "Programming",
            image: MyImage,
        },
    ])

    useEffect(() => {
    fetch('http://localhost:8000/api/courses/')
        .then(response => response.json())
        .then(data => setCourses(data))
        .catch(error => console.error('Error fetching courses:', error)); // Add error handling
}, []);


    const [selectedCourse, setSelectedCourse] = useState(null);
    const [showModal, setShowModal] = useState(false);


    const handleCourseClick = (course) => {
        setSelectedCourse(course);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCourse(null);
    }


  return (
      <>

          <div className="mynav">
              <div className="container">
                  <nav className="navbar navbar-expand-lg p-3">
                      <div className="container-fluid">
                          <a className="navbar-brand" href="#">Navbar</a>
                          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                  aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                          </button>
                          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                  <li className="nav-item">
                                      <a className="nav-link" aria-current="page" href="#">Home</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link" href="#">Link</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </nav>
              </div>
          </div>

          <div className="container">
              <div className="row text-center mt-4 p-3">
                  <h1>OUR COURSES</h1>
              </div>
              <div className="row p-2">
                  {courses.map((course) => (
                      <div key={course.id} className="col-lg-4 py-2 text-center">
                          <div className="mycard p-3 shadow-lg">
                              <div className="d-flex justify-content-center">
                                  <img
                                      className="img-fluid border rounded-3"
                                      src={course.image}
                                      alt={course.name}
                                  />
                              </div>
                              <div onClick={() => handleCourseClick(course)} className="mylink">
                                  <h3 className="pt-4">{course.name}</h3>
                              </div>
                              {/*<button onClick={() => handleCourseClick(course)} className="mylink">*/}
                              {/*    <h3 className="pt-4">{course.name}</h3>*/}
                              {/*</button>*/}
                              <p className="text-secondary">{course.category}</p>
                              <div className="row pe-3">
                                  <div className="col-lg-6">
                                      <button className="btn">Enroll</button>
                                  </div>
                                  <div className="col-lg-6 pt-2">
                                      <span className="price">{course.price}$</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>


          {showModal && selectedCourse && (
    <div className="custom-modal" onClick={handleCloseModal}>
        <div className="custom-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="custom-modal-header">
                <h4 className="modal-title">{selectedCourse.name}</h4>
                <button type="button" className="btn-close" onClick={handleCloseModal}>&times;</button>
            </div>
            <div className="custom-modal-body">
                <img src={selectedCourse.image} alt={selectedCourse.name} />
                <p>{selectedCourse.description}</p>
                <p><strong>Price:</strong> ${selectedCourse.price}</p>
            </div>
            <div className="custom-modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                <button type="button" className="btn btn-primary">Enroll Now</button>
            </div>
        </div>
    </div>
)}






      </>
  )
}

export default App

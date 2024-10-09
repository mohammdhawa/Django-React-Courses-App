import "../App.css"

function Courses({courses, setShowModal, setSelectedCourse}) {
    // Logic
    const handleCourseClick = (course) => {
        setSelectedCourse(course);
        setShowModal(true);
    };

    return (
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
    )
}

export default Courses;
import "../App.css"
import {useState} from "react";

function CourseDetail({showModal, setSelectedCourse, selectedCourse, setShowModal}) {
    // Logic

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCourse(null);
    }

    // return
    return (
        <>
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

export default CourseDetail;
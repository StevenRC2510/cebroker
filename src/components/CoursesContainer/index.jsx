import React from 'react';
import PropTypes from 'prop-types';
import CourseCard from '../CourseCard';
import './styles.css';

const CoursesContainer = ({ courses, children }) => {
    return (
        <div className="infoContainer">
            <div className="d-flex justify-content-between px-2">
                {children}
                <div className="d-flex justify-content-end">
                    <p className="flex-shrink-0">{'Sorted By: '} </p>
                    <select className="custom-select">
                        <option selected>{'Relevance'}</option>
                    </select>
                </div>
            </div>
            {courses.map((course, index) =>
                <CourseCard
                    name={course.course.name}
                    price={course.price ? course.price : '0'}
                    method={course.course.deliveryMethod ? course.course.deliveryMethod.description : 'ONCOURSE LEARNING'}
                    provider={course.course.provider.name}
                    featuredBanner={course.course.featuredBanner}
                    hours={course.totalHours}
                />
            )}
        </div>
    )
}

CoursesContainer.propTypes = {
    courses: PropTypes.array,
}
export default CoursesContainer;
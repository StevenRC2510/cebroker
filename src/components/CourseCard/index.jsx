import React from 'react';
import Proptypes from 'prop-types';
import './styles.css';

const CourseCard = () => {
    return (
        <div className="card py-2">
            <div className="card-body row">
                {/* <div className="col-4">
                    <img src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png" className="img-fluid courseImage" alt="Responsive image" />
                </div> */}
                <div className="col-4">
                    <img src="http://canaco.net/wp-content/uploads/2017/10/LEGAL.jpg" className="img-fluid courseImage" alt="Responsive image" />
                </div>
                <div className="col">
                    <h5>{'Preventical Medical Errors'}</h5>
                    <button className="featuredButton">{'FEATURED'}</button>
                    <p> {'FLORIDA HOSPITAL MEMORIAL MEDICAL CENTER'}</p>
                    <div className="d-flex align-items-center">
                        <i className="far fa-clock"></i>
                        <p className="indications">{'2 Hours '}</p>
                        <i className="fas fa-laptop"></i>
                        <p className="indications">{'Computer-Based Training'} </p>
                    </div>
                </div>
                <div className="col-2 d-flex justify-content-end">
                    <div className="d-flex flex-column justify-content-between align-items-end ">
                        <h4>{'$20.00'}</h4>
                        <button className="squareButton">
                            <i className="fas fa-share">
                            </i>
                        </button>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default CourseCard;
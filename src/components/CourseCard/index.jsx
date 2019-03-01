import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const CourseCard = ({ name, price, provider, hours, method, featuredBanner, }) => {
    return (
        <div className="card py-2">
            <div className="card-body row">
                {featuredBanner && <div className="col-4">
                    <img src={`https://storage.cebroker.com/CEBroker/${featuredBanner}`} className="img-fluid courseImage" alt="Responsive image" />
                </div>}
                <div className="col">
                    <h5>{name}</h5>
                    {featuredBanner && <span className="featuredTag">{'FEATURED'}</span>}
                    <p> {provider}</p>
                    <div className="d-flex align-items-center">
                        <i className="far fa-clock"></i>
                        <p className="indications">{`${hours} Hours`}</p>
                        <i className="fas fa-laptop"></i>
                        <p className="indications">{method} </p>
                    </div>
                </div>
                <div className="col-2 d-flex justify-content-end">
                    <div className="d-flex flex-column justify-content-between align-items-end ">
                        <h4>{`$${price}`}</h4>
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

CourseCard.propTypes = {
    name: PropTypes.string,
    provider: PropTypes.string,
    hours: PropTypes.string,
    method: PropTypes.string,
    featuredBanner: PropTypes.string,
    price: PropTypes.string
}

export default CourseCard;
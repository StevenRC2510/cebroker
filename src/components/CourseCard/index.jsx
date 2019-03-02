import React from 'react';
import PropTypes from 'prop-types';
import ShareButton from '../ShareButton';
import FeaturedSpan from '../FeaturedSpan';
import './styles.css';

const CourseCard = ({ name, price, provider, hours, method, featuredBanner, }) => {
    return (
        <div className="card py-2 mb-2">
            <div className="card-body row">
                {featuredBanner && <div className="col-12 col-md-4">
                    <img src={`https://storage.cebroker.com/CEBroker/${featuredBanner}`} className="img-fluid courseImage" alt="Responsive image" />
                </div>}
                <div className="col-12 col-md">
                    <h5>{name}</h5>
                    {featuredBanner && <FeaturedSpan>{'FEATURED'}</FeaturedSpan>}
                    <p className="info my-2"> {provider}</p>
                    <div className="d-flex align-items-center">
                        <i className="far fa-clock"></i>
                        <p className="indications flex-shrink-0">{`${hours} Hours`}</p>
                        <i className="fas fa-laptop"></i>
                        <p className="indications flex-shrink-0">{method} </p>
                    </div>
                </div>
                <div className="col-12 col-md-2 d-flex justify-content-center">
                    <div className="d-flex flex-grow-1 flex-row flex-md-column justify-content-between align-items-center">
                        <h4>{`$${price}`}</h4>
                        <ShareButton>
                            <i className="fas fa-share" />
                        </ShareButton>
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
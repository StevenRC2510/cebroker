import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const FilterCard = ({title, filters, key}) => {

    return (
        <div className="card p-3">
            <div className="d-flex justify-content-between align-items-center mb-3 px-2">
                <b className="">{title}</b>
                <i className="fas fa-chevron-up"></i>
            </div>
            <div className="d-flex flex-column justify-content-around">
                {filters.map((filter, index) =>
                    <div className="d-flex my-2">
                        <input type="radio" id={`customRadio${index}`} name={key} />
                        <label htmlFor={`customRadio${index}`}>{filter}</label>
                    </div>)}
            </div>
            {filters.length > 2 && <b className="text-primary">{'View More'}</b>}

        </div>
    )
}

FilterCard.propTypes = {
    title: PropTypes.string.isRequired,
    filters: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default FilterCard;
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const FilterCard = ({ title, filters, key }) => {

    return (
        <div className="card p-3" id="accordion">
            <div className="d-flex justify-content-between align-items-center mb-3 px-2" id={`${title}`}>
                <b className="">{title}</b>
                <i className="fas fa-chevron-up"
                    data-toggle="collapse" data-target={`#${key}collapse`} aria-expanded="true" aria-controls={`${key}collapse`}>
                </i>
            </div>
            <div className="collapse show" id={`${key}collapse`}
                aria-labelledby={`${title}`} data-parent="#accordion"
            >
                {filters.map((filter, index) =>
                    <div className="d-flex ">
                        <input className="flex-shrink-0" type="radio" value={filter} id={filter} name={title} />
                        <label  htmlFor={filter}>{filter}</label>
                    </div>)}
                {filters.length > 2 && <b className="text-primary">{'View More'}</b>}
            </div>


        </div>
    )
}

FilterCard.propTypes = {
    title: PropTypes.string.isRequired,
    filters: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default FilterCard;
import React from 'react';
import PropTypes from 'prop-types';
import FilterCard from '../FilterCard';

const FilterContainer = ({ data }) => {
    return (
        <div className="infoContainer">
            <div className="card">
                <div className="card-body">
                    <i className="fas fa-caret-down"></i>
                    <b>{'FILTER COURSE RESULTS'}</b>
                </div>
            </div>
            {data.map((filterInfo, index) =>
                <FilterCard key={index} title={filterInfo.title} filters={filterInfo.filters} />)}
        </div>
    )
}

FilterContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default FilterContainer;
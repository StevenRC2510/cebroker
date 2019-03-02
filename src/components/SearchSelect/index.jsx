import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Select = styled.select`
    background-color: #195796;
    color: white;
    padding: 10px 3px 10px;
    border-radius: 4%;
    border: 1px solid white;
    margin-left:10px;
`;

class SearchSelect extends React.PureComponent {

    render() {
        const { data } = this.props;
        return (
            <Select>
                {data.map((item, key) => <option key={key} value={item}>{item}</option>)}
            </Select>
        );
    }
}

SearchSelect.propTypes = {
    data: PropTypes.array
}

export default SearchSelect;
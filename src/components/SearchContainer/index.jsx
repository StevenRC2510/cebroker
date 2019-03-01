import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const SearchContainer = ({ name, handleChange }) => {
  return (
    <div className="bg-container">
      <div className="d-flex align-items-center justify-content-center p-3">
        <p>{'Find CE for a'}</p>
        <select>
          <option value="Florida">{'Florida'}</option>
        </select>
        <select>
          <option value="Medical Doctor">{'Medical Doctor'}</option>
        </select>
      </div>
      <div className=" d-flex justify-content-center my-3">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <input type="text" onKeyPress={handleChange} className="form-control" placeholder={'Search courses and providers'} name={name} />
        </div>
      </div>
      <div class="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
        <label class="btn active optionButton">
          <input type="radio" name="options" id="option1" checked />{'COURSES'}
        </label>
        <label class="btn optionButton">
          <input type="radio" name="options" id="option2" />{'PROVIDERS'}
        </label>
      </div>
    </div>
  )
}

SearchContainer.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired

}
export default SearchContainer;
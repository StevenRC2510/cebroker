import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const SearchContainer = () => {
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
      <form className=" d-flex justify-content-center my-3">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <input type="text" className="form-control" placeholder={'Search courses and providers'} aria-label="Username" aria-describedby="basic-addon1" />
        </div>
      </form>
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

export default SearchContainer;
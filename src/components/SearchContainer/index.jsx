import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const SearchContainer = ({ name, handleChange }) => {
  return (
    <div className="bg-container">
      <div className="row d-flex flex-column flex-md-row align-items-center justify-content-center p-3 findCe">
        <p className="">{'Find CE for a'}</p>
        <select className="">
          <option value="Florida">{'Florida'}</option>
        </select>
        <select className="">
          <option value="Medical Doctor">{'Medical Doctor'}</option>
        </select>
      </div>
      <div className=" d-flex justify-content-center my-3">
        <div className="input-group w-50">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <input type="text" onKeyPress={handleChange} className="form-control" placeholder={'Search courses and providers'} name={name} />
        </div>
      </div>
      <ul className="nav d-flex justify-content-center">
        <li className="nav-item">
          <a className="nav-link" href="#!">{'COURSES'}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">{'PROVIDERS'}</a>
        </li>
      </ul>
    </div>
  )
}

SearchContainer.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired

}
export default SearchContainer;
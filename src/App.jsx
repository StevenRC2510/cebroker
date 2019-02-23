import React, { Component } from 'react';
import CourseCard from './components/CourseCard';
import FilterContainer from './components/FilterContainer';
import SearchContainer from './components/SearchContainer';
import './App.css';
import { filterData } from './data';

class App extends Component {
  render() {
    return (
      <div>
        <SearchContainer />
        <div className="container">
          <div className="row">
            <div className="col-4">
              <FilterContainer data={filterData} />
            </div>
            <div className="col-8">
              <CourseCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

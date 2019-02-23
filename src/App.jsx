import React, { Component } from 'react';
import CourseCard from './components/CourseCard';
import FilterContainer from './components/FilterContainer';
import SearchContainer from './components/SearchContainer';
import { Services } from './services';
import './App.css';
import { filterData } from './data';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  async componentDidMount() {
    await Services.getFeaturedCourses()
    await Services.getCourses()
  }

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

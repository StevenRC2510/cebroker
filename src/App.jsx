import React, { Component } from 'react';
import CourseCard from './components/CourseCard';
import FilterContainer from './components/FilterContainer';
import SearchContainer from './components/SearchContainer';
import CoursesContainer from './components/CoursesContainer';
import NavBar from './components/NavBar';
import { Services } from './services';
import './App.css';
import { filterData } from './data';
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"; //for css

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coursesList: [],
      courseName: '',
      activePage: 1,
      totalCourses: 0,
      error: false,
      message: '',
      featuredCourses: []
    }
  }

  async componentDidMount() {
    await this.getFeaturedCourses();
    await this.getCourses();
  }

  handlePageChange = async (pageNumber) => {
    await this.setState({ activePage: pageNumber });
    await this.getCourses();
  }

  handleChange = async (event) => {
    if (event.key === 'Enter') {
      const { target: { name, value } } = event
      await this.setState({ [name]: value, activePage: 1, totalCourses: 0 })
      await this.getCourses()
    }
  }

  getFeaturedCourses = async () => {
    let { featuredCourses, error, message } = await Services.getFeaturedCourses();
    featuredCourses = featuredCourses.map(featuredCourse => featuredCourse.coursePublication)
    this.setState({ featuredCourses, error, message })
  }

  getCourses = async () => {
    const { activePage, totalCourses, featuredCourses } = this.state;
    let { courses, totalItems, error, message } = await Services.getCourses(this.state.activePage, this.state.courseName);
    this.setState({
      coursesList: (activePage === 1 && !this.state.courseName) ? [...featuredCourses, ...courses] : courses,
      totalCourses: totalCourses === 0 ? totalItems : totalCourses,
      error,
      message
    })
  }

  render() {
    return (
      <div className="mainContainer">
        <NavBar />
        <SearchContainer handleChange={this.handleChange} name={'courseName'} />
        <div className="container">
          <div className="row mt-5">
            <div className="col-12 col-lg-4">
              <FilterContainer data={filterData} />
            </div>
            <div className="col-12 col-lg-8 infoContainer">
              <Pagination
                currentPage={this.state.activePage}
                totalPages={(Math.round(this.state.totalCourses / 18)) - 1}
                changeCurrentPage={this.handlePageChange}
                theme="bottom-border"
              />
              {this.state.coursesList.length > 1 && <CoursesContainer courses={this.state.coursesList}>
                <p>{`Page ${this.state.activePage} of ${this.state.totalCourses} Results`}</p>
              </CoursesContainer>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

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
      coursesList: [],
      courseName: ''
    }
  }

  async componentDidMount() {
    await this.getCourses();
  }

  handleChange = async (event) => {
    if (event.key == 'Enter') {
      const { target: { name, value } } = event
      this.setState({ [name]: value })
      const { courses } = await Services.getCoursesByName(this.state.courseName);
      await this.setState({ coursesList: courses })
    }
  }

  async getCourses() {
    let { featuredCourses } = await Services.getFeaturedCourses();
    featuredCourses = featuredCourses.map(featuredCourse => featuredCourse.coursePublication)
    let { courses } = await Services.getCourses();
    this.setState({ coursesList: [...featuredCourses, ...courses] })
  }

  render() {
    return (
      <div>
        <SearchContainer handleChange={this.handleChange} name={'courseName'} />
        <div className="container">
          <div className="row">
            <div className="col-4">
              <FilterContainer data={filterData} />
            </div>
            <div className="col-8">
              {this.state.coursesList.length > 1 && (this.state.coursesList.map((course, index) =>
                <CourseCard
                  name={course.course.name}
                  price={course.price ? course.price : '0'}
                  method={course.course.deliveryMethod ? course.course.deliveryMethod.description : 'ONCOURSE LEARNING'}
                  provider={course.course.provider.name}
                  featuredBanner={course.course.featuredBanner}
                  hours={course.totalHours}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import renderer from 'react-test-renderer';
import CourseCard from '../../components/CourseCard';

const courseInfo = {
    courseName: 'Florida RN CE Correspondence Package 2019',
    coursePrice: '0',
    courseMethod: 'ONCOURSE LEARNING',
    courseFeaturedBanner: '7dc5b090-46d7-4e8c-9662-2a76071afbda',
    courseHours: '0'
}
const { courseName, coursePrice, courseMethod, courseFeaturedBanner, courseHours } = courseInfo;
const imageLink = 'https://storage.cebroker.com/CEBroker/';

const component = renderer.create(
    <CourseCard
        name={courseName}
        price={coursePrice}
        method={courseMethod}
        featuredBanner={courseFeaturedBanner}
        hours={courseHours}
    />,
);
const instance = component.root;

test('Shows a Course Card with its properties', () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

describe('Rendered elements', () => {
    test('should show the name of the course', () => {
        const name = instance.find((element) => element.type == 'h5')
        expect(name.props.children).toEqual(courseName)
    });
    test('should show the featured banner', () => {
        const featuredBanner = instance.find((element) => element.type == 'img')
        expect(featuredBanner.props.src).toEqual(`${imageLink}${courseFeaturedBanner}`)
    });

    test('should show the price of the course', () => {
        const price = instance.find((element) => element.type == 'h4')
        expect(price.props.children).toEqual(`$${coursePrice}`)
    });
})
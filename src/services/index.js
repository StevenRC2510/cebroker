import axios from 'axios';
const apiUrl = 'https://api.cebroker.com/v2/';


export const Services = {
    getFeaturedCourses: async () => {
        try {
            const { data } = await axios.create().get(`${apiUrl}featuredCoursesProfession?profession=36`)
            return {
                featuredCourses: data,
                message: 'Success',
                error: false
            }
        } catch (error) {
            return {
                featuredCourses: [],
                message: 'Problems accessing the courses',
                error
            }
        }
    },

    getCourses: async (page, courseName) => {
        const keyword = courseName ? courseName : '';
        try {
            const { data } = await axios.create().get(`${apiUrl}search/courses/?expand=totalItems&pageIndex=${page}&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27&courseName=${keyword}`)
            return {
                message: 'Success',
                courses: data.items,
                totalItems: data.totalItems,
                error: false
            }
        } catch (error) {
            return {
                message: 'Problems accessing the courses',
                courses: [],
                totalItems: 0,
                error
            }
        }
    }
}
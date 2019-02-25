import axios from 'axios';
const apiUrl = ' https://api.cebroker.com/v2/';


export const Services = {


    getFeaturedCourses: async () => {
        try {
            const { data } = await axios.create().get(`${apiUrl}featuredCoursesProfession?profession=36`)
            return {
                featuredCourses: data,
                error: false
            }
        } catch (error) {
            console.log(error)
            return {
                message: 'Problemas Para Acceder a los cursos',
                error
            }
        }
    },

    getCourses: async () => {
        try {
            const { data } = await axios.create().get(`${apiUrl}search/courses/?expand=totalItems&pageIndex=1&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27`)
            return {
                courses: data.items,
                error: false
            }
        } catch (error) {
            console.log(error)
            return {
                message: 'Problemas Para acceder a los cursos',
                error
            }
        }
    },
    getCoursesByName: async (courseName) => {
        try {
            const { data } = await axios.create().get(`${apiUrl}search/courses/?expand=totalItems&pageIndex=1&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27&courseName=${courseName}`)
            return {
                courses: data.items,
                error: false
            }
        } catch (error) {
            return {
                message: 'No hay resultados que coincidan con su búsqueda',
                error,
            }
        }
    }
}
import axios from 'axios';
const apiUrl = ' https://api.cebroker.com/v2/';


export const Services = {


    getFeaturedCourses: async () => {
        try {
            const { data } = await axios.create().get(`${apiUrl}featuredCoursesProfession?profession=36`)
            console.log(data)
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
            console.log(data.items)
            return {
                courses: data,
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
    getImage: async (featuredBanner) => {
        try {
            const { data } = await axios.create().get(`https://storage.cebroker.com/CEBroker/${featuredBanner}`)
            return {
                image: data,
                error: false
            }
        } catch (error) {
            return {
                message: 'No Hay Imagen Disponible',
                error,
            }
        }
    },
    getCoursesByName: async (courseName) => {
        try {
            const { data } = await axios.create().get(`https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=1&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27&courseName=${courseName}`)
            return {
                courses: data,
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
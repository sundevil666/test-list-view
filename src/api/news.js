import axios from '@/api/index'

export const fetchNewsList = () => axios.get('/news')

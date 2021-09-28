import api from './api';

export default async function fetchBookDetail(id) {
    const response = await api.get(`/volumes/${id}`)
    return response.data
}
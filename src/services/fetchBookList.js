import api from './api';

export default async function fetchBookList(book) {
    const response = await api.get(`/volumes?q=${book}`)
    return response.data
}
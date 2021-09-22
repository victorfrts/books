import api from './api';

export default async function fetchBookList(book,page) {
    const response = await api.get(`/volumes?q=${book}&langRestrict=en&startIndex=${page}&maxResults=40&orderBy=relevance`)
    return response.data
}
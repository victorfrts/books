import React, {useEffect} from 'react'
import ListContent from './styles'
import fetchBookList from '../../services/fetchBookList'

export default function List(){
    
    const value = localStorage.getItem('bookName');
    const [books,setBooks] = React.useState([])

    useEffect(() => {
        const fecth = async () => {
            const response = await fetchBookList(value)
            console.log(response.items)
            setBooks(response.items)
        }
        fecth()
    })

    return(
        <ListContent>
            {books.length === 0?'':
                <>
                    <ul className="bookList">
                        {books.map(book => (
                            <li key={book.id} className="bookInfo">
                                <div>
                                    {book.volumeInfo.imageLinks === undefined?'':<img alt="" src={book.volumeInfo.imageLinks.smallThumbnail} />}
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            }
        </ListContent>
    )
}
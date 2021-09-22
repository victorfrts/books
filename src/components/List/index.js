import React, {useEffect} from 'react'
import ListContent from './styles'
import fetchBookList from '../../services/fetchBookList'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'

export default function List(){
    
    const value = localStorage.getItem('bookName');
    const [page,setPage] = React.useState(0)
    const [pages,setPages] = React.useState('')
    const [books,setBooks] = React.useState([])

    const previousPage = () =>{
        setPage(page-1)
    }

    const nextPage = () =>{
        setPage(page+1)
    }

    useEffect(() => {
        const fecth = async () => {
            const response = await fetchBookList(value,page)
            console.log(response.totalItems);
            setPages(parseInt(response.totalItems/40)+1);
            setBooks(response.items);
        }
        fecth();
    },[page,value])

    return(
        <ListContent>
            {books.length === 0?'':
                <>
                    <div className="bookPainel">
                        <ul className="bookList">
                            {books.map(book => (
                                <li key={book.id} className="bookInfo">
                                    <div className="bookDetail">
                                        {book.volumeInfo.imageLinks === undefined || book.volumeInfo.imageLinks.thumbnail === undefined?'':<img className="bookImage" alt="capa do livro" src={book.volumeInfo.imageLinks.thumbnail} />}
                                        <p className="bookTitle">{book.volumeInfo.title}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="pagePainel">
                        {pages.length === 0?'':<div className="pageControl"><FaAngleLeft className="arrowIcon" size="18px" color="#C32BAD" onClick={previousPage}/> Pagina {page} de {pages} <FaAngleRight className="arrowIcon" size="18px" color="#C32BAD" onClick={nextPage}/></div>}
                    </div>
                </>
            }
        </ListContent>
    )
}
import React, {useEffect} from 'react'
import ListContent from './styles'
import fetchBookList from '../../services/fetchBookList'
import fetchBookDetail from '../../services/fetchBookDetail'
import {FaAngleLeft, FaAngleRight, FaAngleDoubleLeft, FaAngleDoubleRight, FaWindowClose, FaSpinner, FaRegStar, FaStar} from 'react-icons/fa'

export default function List(){
    
    const value = localStorage.getItem('bookName');
    const [book,setBook] = React.useState('')
    const [page,setPage] = React.useState(0)
    const [pages,setPages] = React.useState('')
    const [books,setBooks] = React.useState([])
    const [viewBook, setViewbook] = React.useState('none')
    const [favorites, setFavorites] = React.useState(JSON.parse(localStorage.getItem("favorites"))===null?[]:JSON.parse(localStorage.getItem("favorites")));

    const closeModal = (e) => {
        if(e.target.className === "modal"){
            setViewbook('none')
        }
    }

    const firstPage = () =>{setPage(0)}

    const lastPage = () =>{setPage(pages)}

    const previousPage = () =>{
        if(page !== 0){
            setPage(page-1)
        }    
    }

    const nextPage = () =>{
        if(page !== pages){
            setPage(page+1)
        }
    }

    const getDetail = async (e) =>{
        const response = await fetchBookDetail(e.target.id);
        setBook(response)
        setViewbook('')
    }

    useEffect(() => {
        const fecth = async () => {
            const response = await fetchBookList(value,page)
            setPages(parseInt(response.totalItems/40)+1);
            setBooks(response.items);
        }
        fecth();
    },[page,value])

    const addFav = (id,title,img) =>{
        let array = favorites;
        let addArray = true;
        array.map((item) => {
            if(item === id){
                array.splice(array.indexOf(id),1)
                addArray = false;
            }
            return array
        });
        if(addArray){
            array.push(id); 
        }
        setFavorites([...array])
        localStorage.setItem("favorites", JSON.stringify(favorites));

        var storage = localStorage.getItem('favBook'+id)
        if(storage === null){
            localStorage.setItem('favBook'+id, JSON.stringify([id,title,img]));
        }
        else{
            localStorage.removeItem('favBook'+id);
        }
    }

    return(
        <ListContent>
            {books.length === 0?
            <div className="loading">
                <FaSpinner className="spinner"/>
            </div>:
                <>
                    <div className="modal" style={{display: viewBook}} onClick={(e)=>{closeModal(e)}} >
                        <div className="modal-content">
                            <FaWindowClose className="closeIcon" onClick={()=>{setViewbook('none')}}/>
                            {book.volumeInfo === undefined?
                                '':
                                <section className="bookSection">
                                    <header className="headerSection">
                                        <a target="_blank" rel="noreferrer" href={book.volumeInfo.canonicalVolumeLink}><img className="sectionImg" alt="capa do livro" src={book.volumeInfo.imageLinks.thumbnail}/></a>
                                        <form className="sectionDetails">
                                            <h1 className="sectionTitle"> {book.volumeInfo.title}</h1>
                                            <p>Autor: {book.volumeInfo.authors[0]}</p>
                                            <p>Publicação: {book.volumeInfo.publishedDate}</p>        
                                            <p>Paginas: {book.volumeInfo.pageCount}</p>        
                                            <p>Categorias: {book.volumeInfo.categories}</p>  
                                            <p>Disponível no <a className="sectionLink" href={book.volumeInfo.canonicalVolumeLink} target="_blank" rel="noreferrer">Google Play </a></p>  
                                        </form>
                                    </header>
                                    <hr/>
                                    <div className="sectionResume" dangerouslySetInnerHTML={{ __html: book.volumeInfo.description}} />
                                </section>
                            }
                        </div>
                    </div>
                    <div className="bookPainel">
                        <ul className="bookList">
                            {books.map((book) => (
                                <li key={book.id} className="bookInfo">
                                    <div className="bookDetail">
                                        {book.volumeInfo.imageLinks === undefined || book.volumeInfo.imageLinks.thumbnail === undefined?
                                        '':
                                            <>
                                                <img id={book.id} className="bookImage" alt="capa do livro" src={book.volumeInfo.imageLinks.thumbnail} onClick={e => getDetail(e)} />                                                
                                                <p  id={book.id} className="bookTitle">  
                                                    {favorites.includes(book.id)?(
                                                        <FaStar onClick={() => addFav(book.id,book.volumeInfo.title,book.volumeInfo.imageLinks.thumbnail)} style={{color:'gold'}}/>
                                                    ):(
                                                        <FaRegStar onClick={() => addFav(book.id,book.volumeInfo.title,book.volumeInfo.imageLinks.thumbnail)} style={{color:'gold'}}/>
                                                    )}
                                                    {book.volumeInfo.title}
                                                </p>
                                            </>
                                        }
                                    </div>
                                </li>
                            ))}
                        </ul>   
                    </div>
                    <div className="pagePainel">
                        {pages.length === 0?
                            '':
                            <div className="pageControl">
                                <FaAngleDoubleLeft className="arrowIcon" size="18px" color="#C32BAD" onClick={firstPage}/>
                                <FaAngleLeft className="arrowIcon" size="18px" color="#C32BAD" onClick={previousPage}/> 
                                    Pagina {page} de {pages} 
                                <FaAngleRight className="arrowIcon" size="18px" color="#C32BAD" onClick={nextPage}/>
                                <FaAngleDoubleRight className="arrowIcon" size="18px" color="#C32BAD" onClick={lastPage}/>
                            </div>
                        }
                    </div>
                </>
            }
        </ListContent>
    )
}
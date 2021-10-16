import React,{useEffect} from 'react'
import FavoriteContent from './styles'
import fetchBookDetail from '../../services/fetchBookDetail'
import {FaWindowClose, FaSpinner, FaStar} from 'react-icons/fa'

export default function Favorite(){

    const [favorites, setFavorites] = React.useState([]);
    const [viewModal, setViewmodal] = React.useState('none')
    const [book,setBook] = React.useState('')

    useEffect(() => {
        const initFav = () => {
            const array = JSON.parse(localStorage.getItem("favorites"))
            setFavorites(array)
        }
        initFav()
    }, [])

    const closeModal = (e) => {
        if(e.target.className === "modal"){
            setViewmodal('none')
        }
    }

    const getDetail = async (e) =>{
        const response = await fetchBookDetail(e.target.id);
        setBook(response)
        setViewmodal('')
    }

    const removeFav = (id) => {
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
        if(storage !== null){
            localStorage.removeItem('favBook'+id);
        }
    }

    return(
        <FavoriteContent>
            {favorites === null || favorites.length === 0 || favorites === 'undefined'?
            <div className="loading">
                <FaSpinner className="spinner"/>
            </div>:
                <>
                    <div className="modal" style={{display: viewModal}} onClick={(e)=>{closeModal(e)}} >
                        <div className="modal-content">
                            <FaWindowClose className="closeIcon" onClick={()=>{setViewmodal('none')}}/>
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
                    <div className="favoritePainel">
                        <ul className="favoriteList">
                            {favorites.map((favorite) => (
                                <li key={favorite} className="favoriteInfo">
                                    <div className="favoriteDetail">
                                        {favorite === undefined?
                                        '': 
                                            <>
                                                <img id={favorite} className="favoriteImage" alt="capa do livro" src={JSON.parse(localStorage.getItem("favBook"+favorite))[2]} onClick={e => getDetail(e)} />                                                
                                                <p  id={favorite} className="favoriteTitle">  
                                                    <FaStar onClick={() => removeFav(favorite)} style={{color:'gold'}} />
                                                    {JSON.parse(localStorage.getItem("favBook"+favorite))[1]}
                                                </p>
                                            </>
                                        }
                                    </div>
                                </li>
                            ))}
                        </ul>   
                    </div>
                </>
            }        
        </FavoriteContent>
    )

}
import SearchBarContainer from './styles'
import React from "react";
import {useHistory} from 'react-router';
import {FaSearch,FaFilter} from 'react-icons/fa'


export default function SearchBar(props){

    const history = useHistory();
    const [value,setValue] = React.useState('');

    const goFav = () => {
        if(history.location.pathname !== '/books/favorites'){
            history.push("/books/favorites")    
        }else{
            history.push("/books/detail")
        }
    }

    const valueChange = event =>{
        setValue(event.target.value);
    }

    const goNext = () => {
        localStorage.setItem('bookName', value);
        setValue('')
        history.push("/books/detail")
    }

    return(
        <SearchBarContainer marginBottom={props.marginBottom} right={props.right} top={props.top}>
            <form className="formBar" onSubmit={goNext}>
                <input className="inputBar" placeholder="Busca..." onChange={valueChange}/>
                <FaSearch className="iconBar" onClick={goNext} size="16px" color="#C32BAD"/>
                <div className="favoritos" onClick={goFav}>
                    <FaFilter className="iconFilter"/>
                    <span className="textFilter">Favoritos</span>
                </div>
            </form>
        </SearchBarContainer>
    )
}
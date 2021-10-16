import styled from 'styled-components';

const SearchBarContainer = styled.section`
    
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-top:54px;

    .formBar{
        display: flex;
        width: 100%;
        height: 16px;
    }

    .inputBar:hover{
        border-bottom: solid #C32BAD 2px;
    }

    .inputBar{
        width:30%;
        min-width: 180px;
        max-width: 254px;
        border:none;
        outline: none; 
        border-bottom: solid #C32BAD 1px;
    }

    .iconBar:hover{
        cursor: pointer;
    }

    .favoritos{
        display: relative;
        position: absolute;
        font-size: 12px;
        display: flex;
        margin-top:auto;
        right: 17%;
        
    }

    @media screen and (max-width: 767px){
        .textFilter{
            display: none;
        }
        
    }

    .favoritos:hover{
        .textFilter{
            color: #C32BAD;
            cursor: pointer;
        }
    }

    .iconFilter{
        margin-top:2px;
        color: #C32BAD;
        font-size: 14px;
    }

`

export default SearchBarContainer;
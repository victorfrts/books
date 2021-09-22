import styled from 'styled-components'

const ListContent = styled.section`

    width: 70%;
    margin-left: auto;
    margin-right: auto;
    height: 768px; 
    max-height: 768px;
    border-bottom: solid #C32BAD 1px;

    .bookList{
        margin-right: auto;
        display: grid;
        list-style: none;
        margin-left: -35px;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
               
    }

    .bookDetail{
        width: 50%;
        min-width:210px;
        height: 220px;
        margin-top: 20px;
        
    }

    .bookTitle{   
        text-align:left;     
        border-bottom: solid 1px #C32BAD;
    }

    .bookImage{
        height:190px;
        margin-right: auto;
        margin-left: auto;
    }

    .bookPainel{
        overflow-y : scroll;
        scroll-behavior: smooth;
        height: 768px;
        max-height: 768px;

        ::-webkit-scrollbar {
        width: 5px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
        background: #f1f1f1;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
        background: #C32BAD;
        border-radius: 10px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
        background: #7027A0;
        border-radius: 10px;
        }
    }

    .pageControl{
        font-size: 12px;
        float:right;
        margin-top:10px;
        display:flex;
    }

`
export default ListContent
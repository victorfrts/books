import styled from 'styled-components'

const ListContent = styled.section`

    width: 70%;
    margin-left: auto;
    margin-right: auto;
    height: 768px; 
    max-height: 768px;
    border-bottom: solid #C32BAD 1px;

    .loading{
        display:flex;
        width: 100%;
        height: 100%;
    }

    .spinner{
        margin:auto;
        font-size:24px;
        animation: spin infinite 2s linear;
        color: #C32BAD;
    }
    
    @keyframes spin {
      from { 
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

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

    .bookDetail:hover{
        cursor: pointer;
        .bookTitle{
            border-bottom: solid 2px #C32BAD;
        }
    }

    .bookTitle{   
        overflow: hidden;
        text-align:left; 
        white-space: nowrap;
        text-overflow: ellipsis;  
        border-bottom: solid 1px #C32BAD; 
    }

    .bookTitle:hover{
        border-bottom: solid 2px #C32BAD;
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
        cursor: pointer;
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

    .modal{
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; 
        height: 100%; 
        background-color: rgb(0,0,0); 
        background-color: rgba(0,0,0,0.5); 
    }

    .modal-content {
        height: 615px;
        width: 820px; 
        background-color: #f1f1f1;
        margin: 10% auto; 
        border: 1px solid #F56FAD;
    }

    @media screen and (max-width: 820px) {
        .modal-content {
            height: 90%;
            width: 100%; 
            background-color: #f1f1f1;
            margin: 10% auto; 
            border: 1px solid #F56FAD;
        }
    }

    .closeIcon{
        margin-top: 2px;
        margin-right: 2px;
        display: relative;
        float:right;
        color: #C32BAD;
        font-size:18px;
    }

    .closeIcon:hover{
        cursor: pointer;
        color: #7027A0;
    }

    .bookSection{
        display:relative;
    }

    .headerSection{
        display:relative;
        width:100%;
        height:200px;
    }

    .sectionDetails{
        height: 220px;
        padding-left:10px;
        text-align:left;
        float:left;
        width: 100%;
        max-width:560px;
        max-height: 220px;
        font-size:12px;
        @media screen and (max-width: 768px) {
            p{
                overflow: hidden; 
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }

    .sectionTitle{
        font-size: 18px;
        overflow: hidden;
        text-align:left; 
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .sectionImg{
        margin-left:5px;
        margin-top:5px;
        float:left;
        width:140px;
        height:210px;
        border: solid 1px #F56FAD;
    }

    .sectionImg:hover{
        cursor: pointer;
        border: solid 1px #7027A0;
    }

    hr{
        margin:auto;
        width: 800px;
        border: solid 1px #F56FAD;
    }

    .sectionResume{
        font-size:12px;
        margin:auto;
        width: 100%;
        height: auto;
        max-width: 800px;
        max-height: 390px;
        
        overflow-y : scroll;
        scroll-behavior: smooth;
        
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
        cursor: pointer;
        background: #7027A0;
        border-radius: 10px;
        }
    }

    .sectionLink{
        color: #C32BAD;
        text-decoration: none;
    }
    
    .sectionLink:hover{
        cursor: pointer;
        color: #7027A0;
    }

`
export default ListContent
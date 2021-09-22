import styled from 'styled-components';

const SearchBarContainer = styled.section`
    
    position: relative;
    width: 70%;
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    .formBar{
        height: 16px;
        margin-top:54px;
        width:30%;
        display: flex;
        max-width: 1024px;
        border-bottom: solid #C32BAD 1px;
    }

    .inputBar{
        width:95%;
        border:none;
        outline: none; 
    }


`

export default SearchBarContainer;
import React from 'react';
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Slider from "react-slick";


function Header() {
    return (
        <Container>
            <Logo><a href='/'>Nkgeong-Swarts</a></Logo>
            <NavMenu>
                <a href="/">Home</a>
                <a href="/">About Us</a>
                <a href="/">Our Services </a>
                <a href="/">Contact Us</a>
            </NavMenu>
            <SearchBar>
                <input type="text"/>
                <CustomSearchIcon />
            </SearchBar>
            <Account>
                <a href="/">Sign up</a>
                <a href="/">Login</a>
            </Account>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #000814;
    height: 70px;
    padding: 0 30px;
    z-index: -1;
`

const Logo = styled.div`
    margin-right: 90px;

    a {
        text-decoration: none;
        font-weight: bold;
        font-size: 25px;
        font-family: cursive;
        color: #ffc300;
    }

`
const NavMenu = styled.div`
    display: flex;
    align-items: center;

    a {
        margin-right: 30px;
        letter-spacing: 1.42px;
        text-decoration: none;
        color: #ffc300;
        display: flex;
        align-items: center;

        &:hover {
            color: white;
        }
    }
`
// const CustomKeyboardArrowDownIcon = styled(KeyboardArrowDownIcon)`
// `
const SearchBar = styled.div`
    display: flex;
    background: white;
    padding: 5px;
    margin-right: 20px;
    border-radius: 5px;
    
    input {
        width: 25vw;
        border: none;
        padding: 5px 10px;
        margin-right: 5px;
        font-size: 16px;

        &:focus {
            outline: none;
        }
    }
`

const CustomSearchIcon = styled(SearchIcon)`
    color: #ffc300;
    cursor: pointer;
`


const Account = styled(NavMenu)`

`

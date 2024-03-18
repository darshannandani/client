import React from "react";
import styled from "styled-components";
import { HomeRounded, CloseRounded, SearchRounded, FavoriteRounded, UploadRounded, LightModeRounded, LogoutRounded, ExitToAppRounded } from "@mui/icons-material";
import { style } from "@mui/system";
// import LogoIcon  from "../Images/Logo.png";
import LogoIcon from '../Images/Logo.png'
import { Link } from "react-router-dom";

const MenuContainer = styled.div`
  flex-direction: column;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 1100px) {
    position: fixed;
    z-index: 1000;
    width: 100%;
    max-width: 250px;
    left: ${({ menuOpen }) => (menuOpen ? "0" : "-100%")};
    transition: 0.3s ease-in-out;
  }
`;

const Flex = styled.div`
//   width: 100%;  
  display: flex;
  flex-dierection: row;
  align-item: center;
  justify-content: space-between;
gap: 15px
`;

const Logo = styled.div`
   color : ${({ theme }) => theme.primary};
   display: flex;
   align-item: center;
   justify-content: center;
   font-weight: bold;
   font-size: 20px;
   margin: 16px 0;
`;

const Image = styled.img` 
  height: 40px;
  margin: 0 10px;
`;
const Close = styled.div`
display: none;
margin-top: 20px;
cursor: pointer;
@media (max-width: 1100px) {
  display: block;
}
`;

const Elements = styled.div`
    padding: 4px 23px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    cursor:pointer;
    color: ${({ theme }) => theme.tect_secondary};
    &:hover{
        background-color: ${({ theme }) => theme.text_secondary + 50}
    }
`;
const NavText = styled.div`
    Padding: 12px 0;
    text-decoration: none;
    color: ${({ theme }) => theme.tect_secondary} !important;
`;

const HR = styled.div`
width: 100%;
height: 1px;
background-color: ${({ theme }) => theme.text_secondary + 50};
margin: 10px 0px;
`;

const menuItems = [

    {
        Link: "/",
        name: "Dashboard",
        icon: <HomeRounded />
    },
    {
        Link: "/search",
        name: "Search",
        icon: <SearchRounded />
    },
    {
        Link: "/favorites",
        name: "Favorites",
        icon: <FavoriteRounded />
    },

];

const button = [
    {
        func: () => console.log("/upload"),
        name: "Upload",
        icon: <UploadRounded />
    },
    {
        func: () => console.log("/upload"),
        name: "LightMode",
        icon: <LightModeRounded />
    },
    {
        func: () => console.log("/upload"),
        name: "Log Out",
        icon: <LogoutRounded />
    }
]


const SideBar = ({ menuOpen, setMenuOpen, setDarkMode, darkMode }) => {
    return (
        <MenuContainer menuOpen={menuOpen} >
            <Flex>
                <Logo >
                    <Image src={LogoIcon} />
                    PodStream
                </Logo>
                <Close onClick={() => setMenuOpen(false)}>
                    <CloseRounded />
                </Close>
            </Flex>

            <Link to='/' style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
                <Elements>
                    <HomeRounded />
                    <NavText>Dashboard</NavText>
                </Elements>
            </Link>
            <Link to='/search' style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
                <Elements>
                    <SearchRounded />
                    <NavText>Search</NavText>
                </Elements>
            </Link>
            <Link to='/favorite' style={{ textDecoration: "none", color: "inherit", width: '100%' }}>
                <Elements>
                    <FavoriteRounded />
                    <NavText>Favourites</NavText>
                </Elements>
            </Link >

            <HR />


            <Elements>
                <UploadRounded />
                <NavText>Upload</NavText>
            </Elements>

            <Elements onClick={() => setDarkMode(!darkMode)}>
                <LightModeRounded />
                <NavText>Light Mode</NavText>
            </Elements>

            <Elements >
                <ExitToAppRounded />
                <NavText>Log Out</NavText>
            </Elements>


        </MenuContainer>
    );
};

export default SideBar;

import React from 'react'
import styled from 'styled-components';
import MenuIcon from "@mui/icons-material/Menu";
import { PersonRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBarDiv = styled.div` 
        display: flex;
        justify-content: space-between;
        padding: 16px 40px;
        color:  ${({ theme }) => theme.text_primary};
        gap : 30px;
        background: ${({ theme }) => theme.bgLight};
        box-shadow: 0 4px 30px rgba(0,0,0,0.1);
        backdrop-filter: blur(5.7px);
        -webkit-backdrop-filter: blur(5.7px);
        @media (max-width: 768px) {
            padding: 16px;
        }

    `;

const ButtonDiv = styled.div` 
        font-sixe: 14px;
        cursor: pointer;
        max-width: 70px;
        display: flex;
        align-itmes: center;
        color:  ${({ theme }) => theme.primary};
        border: 1px solid ${({ theme }) => theme.primary};
        border-radius: 8px;
        gap: 8px;
        padding: 8px 10px;
    `;

const IcoButton = styled.div` 
    color: ${({ theme }) => theme.text_secondary} !important;
    cursor: pointer;
`;

const Navbar = ({ setMenuOpen, menuOpen }) => {
    return (
        <NavBarDiv>
            <IcoButton onClick={() => setMenuOpen(!menuOpen)}>
                <MenuIcon />
            </IcoButton>
            <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }} >
            <ButtonDiv>
                <PersonRounded />
                Profile
            </ButtonDiv>
            </Link>
        </NavBarDiv>
    )
}

export default Navbar
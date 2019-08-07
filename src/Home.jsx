import React from 'react'
import styled, { createGlobalStyle, css } from 'styled-components'
import { SwipeableDrawer } from '@material-ui/core'
import {
    FaTwitter,
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaDev,
} from 'react-icons/fa'
import { FiMenu, FiX } from 'react-icons/fi'

import { getRandomValueFromArray } from './utils';
import ACCENT_COLORS from './colors';

const subtitle = 'Software Engineer • Nashville, TN'
const linkColor = 'darkgray';
const COLOR_TIMEOUT = 2000; // ms

const Home = () => {
    const [accentColor, setAccentColor] = React.useState(getRandomValueFromArray(ACCENT_COLORS, 'lightblue'))
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

    React.useEffect(() => {
        const colorTimeout = setTimeout(() => {
            const newColor = getRandomValueFromArray(ACCENT_COLORS, accentColor)
            setAccentColor(newColor);
        }, COLOR_TIMEOUT);

        return () => {
            clearTimeout(colorTimeout);
        }
    }, [accentColor, getRandomValueFromArray])

    return (
        <MainArticle>
            <GlobalStyles />
            <MenuButton onClick={() => setIsDrawerOpen(true)} color={accentColor}>
                <FiMenu />
            </MenuButton>
            <SwipeableDrawer
                open={isDrawerOpen}
                onOpen={() => console.log('opened')}
                onClose={() => console.log('closed')}
            >
                <DrawerContents>
                    <MenuButton onClick={() => setIsDrawerOpen(false)} color={accentColor}>
                        <FiX />
                    </MenuButton>
                    <div>
                        <p>Come back for more soon</p>
                    </div>
                </DrawerContents>
            </SwipeableDrawer>
            <h1>Evan Freeze</h1>
            <h2>{subtitle}</h2>
            <ColorChangeSection accentColor={accentColor}>
                <SocialLinks>
                    <Icon href="https://twitter.com/evanfreeze" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </Icon>
                    <Icon href="https://www.instagram.com/evanfreeze/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </Icon>
                    <Icon href="https://github.com/evanfreeze" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </Icon>
                    <Icon href="https://dev.to/evanfreeze" target="_blank" rel="noopener noreferrer">
                        <FaDev />
                    </Icon>
                    <Icon href="https://www.linkedin.com/in/evanfreeze/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </Icon>
                </SocialLinks>
            </ColorChangeSection>
        </MainArticle>
    )
}

const GlobalStyles = createGlobalStyle`
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
        height: 100vh;
    }

    h1 {
        font-size: 2rem;
        margin-bottom: 0.3rem;
    }

    h2 {
        font-size: 0.9rem;
        margin: 0;
        opacity: 0.65;
    }
`

const MenuButton = styled.button`
    ${props => css`
        outline: 0;
        border: 0;
        font-size: 1.6rem;
        position: fixed;
        color: ${props.color};
        transition: color 2s ease-in-out;
        top: 10px;
        left: 8px;

        &:hover {
            cursor: pointer;
            color: black;
        }`
    }
`

const DrawerContents = styled.aside`
    margin-top: 34px;
    padding: 1.5rem;
    padding-right: 3.5rem;
`

const MainArticle = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80vh;
`

const ColorChangeSection = styled.section`
    ${props => css`
        &::before {
            content: '';
            display: flex;
            height: 10px;
            background: ${props.accentColor};
            width: 20rem;
            margin: 1.3rem;
            justify-items: center;
            border-radius: 1rem;
            transition: background 2s ease-in-out;
        }
    `}
`

const SocialLinks = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
`

const Icon = styled.a`
    margin: 0 0.5rem;
    color: ${linkColor};
    transition: color 0.15s ease-in-out;

    &:visited {
        color: ${linkColor};
    }

    &:hover {
        color: black;
    }

    &:first-of-type {
        margin-left: 0;
    }

    &:last-of-type {
        margin-right: 0;
    }
`

export default Home

import React from 'react'
import { render } from 'react-dom'
import styled, { createGlobalStyle, css } from 'styled-components'
import {
    FaTwitter,
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaDev,
} from 'react-icons/fa'

import { getRandomValueFromArray } from './utils';
import ACCENT_COLORS from './colors';

const subtitle = 'Software Engineer • Nashville, TN'
const linkColor = 'darkgray';
const COLOR_TIMEOUT = 2000; // ms

const App = () => {
    const [accentColor, setAccentColor] = React.useState('lightblue')

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
            <GlobalStyles accentColor={accentColor} />
            <h1>Evan Freeze</h1>
            <h2>{subtitle}</h2>
            <aside>
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
            </aside>
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

    ${props => css`
        aside::before {
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

const MainArticle = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80vh;
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

render(<App />, document.getElementById('root'))

export default App

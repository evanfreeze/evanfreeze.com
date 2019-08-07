import React from 'react'
import styled, { css } from 'styled-components'
import {
    FaTwitter,
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaDev,
} from 'react-icons/fa'

import { getRandomValueFromArray } from './utils';
import ACCENT_COLORS from './colors';

import DrawerWithMenuButton from './DrawerWithMenuButton.jsx';

const subtitle = 'Software Engineer • Nashville, TN'
const COLOR_TIMEOUT = 2000; // ms

const Home = () => {
    const [accentColor, setAccentColor] = React.useState(getRandomValueFromArray(ACCENT_COLORS, 'lightblue'))

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
        <>
            <DrawerWithMenuButton color={accentColor} />
            <MainArticle>
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
        </>
    )
}

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

const linkColor = 'darkgray';

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

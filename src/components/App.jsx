import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import {
    FaTwitter,
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaDev,
} from 'react-icons/fa'

const subtitle = 'Software Engineer • Nashville, TN'

const App = () => (
    <GlobalStyles>
        <MainArticle>
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
    </GlobalStyles>
)

const GlobalStyles = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

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
    margin: 2rem;
    display: flex;
    justify-content: center;
`

const Icon = styled.a`
    margin: 0 0.5rem;
    color: darkgray;
    transition: color 0.15s ease-in-out;

    &:visited {
        color: lightblue;
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

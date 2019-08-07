import React from 'react'
import { render } from 'react-dom'
import { Router } from '@reach/router'
import { createGlobalStyle } from 'styled-components'

import Home from './Home.jsx';
import WikipediaViewer from './projects/WikipediaViewer.jsx';
import ITunesSearcher from './projects/ITunesSearcher.jsx';

const App = () => (
    <>
        <GlobalStyles />
        <Router>
            <Home path="/" />
            <WikipediaViewer path="/projects/wikipedia-search" />
            <ITunesSearcher path="/projects/itunes-preview" />
        </Router>
    </>
)

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

render(<App />, document.getElementById('root'))
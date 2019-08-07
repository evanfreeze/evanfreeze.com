import React from 'react'
import { render } from 'react-dom'
import { Router } from '@reach/router'

import Home from './Home.jsx';
import Projects from './Projects.jsx';

const App = () => (
    <Router>
        <Home path="/" />
        <Projects path="/projects" />
    </Router>
)

render(<App />, document.getElementById('root'))
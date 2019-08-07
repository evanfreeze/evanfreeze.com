import React from 'react'
import styled from 'styled-components'

import DrawerWithMenuButton from './DrawerWithMenuButton.jsx'

const FullScreenFrame = ({ url, title }) => (
    <article>
        <DrawerWithMenuButton />
        <FullScreen src={url} title={title} />
    </article>
)

const FullScreen = styled.iframe`
    width: 100vw;
    height: 100vh;
`

export default FullScreenFrame

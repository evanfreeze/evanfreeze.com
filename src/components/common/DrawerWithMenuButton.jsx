import React, { useState, useContext } from 'react'
import styled, { css } from 'styled-components'
import { FiMenu, FiX } from 'react-icons/fi'
import { SwipeableDrawer } from '@material-ui/core'
import { Link } from '@reach/router'
import { ColorContext } from './ColorChangeContext.jsx';

const DrawerWithMenuButton = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const color = useContext(ColorContext)

    return (
        <>
            <MenuButton onClick={() => setIsDrawerOpen(true)} color={color}>
                <FiMenu />
            </MenuButton>
            <SwipeableDrawer open={isDrawerOpen}>
                <DrawerContents>
                    <MenuButton onClick={() => setIsDrawerOpen(false)} color={color}>
                        <FiX />
                    </MenuButton>
                    <LinkList>
                        <ListItem>
                            <Link to="/">Home</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/projects/wikipedia-search">Wikipedia Search</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/projects/itunes-preview">iTunes Preview</Link>
                        </ListItem>
                    </LinkList>
                </DrawerContents>
            </SwipeableDrawer>
        </>
    )
}

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

const LinkList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

const ListItem = styled.li`
    margin-bottom: 1rem;

    &:last-of-type {
        margin-bottom: 0;
    }
`

export default DrawerWithMenuButton
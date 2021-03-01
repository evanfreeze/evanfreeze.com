import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

function Navigation() {
    const router = useRouter();

    return (
        <Nav>
            <Link href="/posts">Posts</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </Nav>
    );
}

const Nav = styled.nav`
    margin: 1.5rem 0.4rem;
    display: flex;
    flex-direction: column;

    a {
        margin-bottom: 0.7rem;
        text-decoration: none;
        color: rgba(0, 0, 0, 0.6);
        font-size: 1.1rem;

        :visited {
            color: rgba(0, 0, 0, 0.6);
        }

        :hover {
            text-decoration: underline;
        }
    }
`;

export default Navigation;
